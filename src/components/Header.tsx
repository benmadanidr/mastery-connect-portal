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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* الشعار واسم الأكاديمية */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="text-right">
              <h1 className="text-lg font-bold text-primary">أكاديمية الإتقان</h1>
              <p className="text-xs text-muted-foreground">التعليمية</p>
            </div>
          </Link>

          {/* قائمة التنقل للشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary rounded-full" />
                )}
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