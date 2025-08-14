import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات الأكاديمية */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">أكاديمية الإتقان التعليمية</h3>
            <p className="text-primary-foreground/80 mb-4">
              نحن نسعى لتقديم أفضل التعليم والتدريب لطلابنا في بيئة تعليمية متميزة
            </p>
            <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/" className="hover:text-secondary transition-colors">الرئيسية</a></li>
              <li><a href="/courses" className="hover:text-secondary transition-colors">الدورات</a></li>
              <li><a href="/student-registration" className="hover:text-secondary transition-colors">تسجيل طالب</a></li>
              <li><a href="/teacher-registration" className="hover:text-secondary transition-colors">تسجيل أستاذ</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>دار الشيوخ - الجلفة - الجزائر</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+213 XXX XXX XXX</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-secondary" />
                <span>info@itqan-academy.dz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 أكاديمية الإتقان التعليمية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;