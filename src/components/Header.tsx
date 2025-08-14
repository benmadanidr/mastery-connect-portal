import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "تسجيل طالب", href: "/student-registration" },
    { name: "تسجيل أستاذ", href: "/teacher-registration" },
    { name: "التحقق من التسجيل", href: "/verify-registration" },
    { name: "الدورات", href: "/courses" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-academic-gradient/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* الشعار واسم الأكاديمية */}
          <Link to="/" className="flex items-center space-x-4 space-x-reverse group">
            <div className="relative">
              <img 
                src="/lovable-uploads/9d677575-10db-41d7-8ff6-59ba6aad2276.png" 
                alt="شعار أكاديمية الإتقان التعليمية" 
                className="w-14 h-14 rounded-full shadow-gold group-hover:scale-105 transition-smooth border-2 border-secondary-accent/40"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-primary/10 group-hover:from-secondary-accent/20 transition-smooth"></div>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-primary-foreground font-arabic">أكاديمية الإتقان</h1>
              <p className="text-sm text-primary-light">التعليمية - دار الشيوخ - الجلفة</p>
            </div>
          </Link>

          {/* قائمة التنقل للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-secondary-accent group ${
                  location.pathname === item.href
                    ? "text-secondary-accent"
                    : "text-primary-foreground/90"
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gold-gradient transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* زر القائمة للشاشات الصغيرة */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;