import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال الرسالة
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال رسالتك!",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "الهاتف",
      details: ["+213 XXX XXX XXX", "+213 YYY YYY YYY"],
      action: "اتصل بنا"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "البريد الإلكتروني",
      details: ["info@itqan-academy.dz", "contact@itqan-academy.dz"],
      action: "راسلنا"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "العنوان",
      details: ["دار الشيوخ", "ولاية الجلفة، الجزائر"],
      action: "اتجاهات"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "أوقات العمل",
      details: ["السبت - الخميس", "8:00 ص - 6:00 م"],
      action: "جدولة موعد"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            تواصل معنا
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4 font-arabic">
            نحن هنا لمساعدتك
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            لديك أسئلة أو تحتاج مساعدة؟ لا تتردد في التواصل معنا، فريقنا جاهز لخدمتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  معلومات الاتصال
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* وسائل التواصل الاجتماعي */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>تابعنا على</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  تابع آخر الأخبار والتحديثات من أكاديمية الإتقان
                </p>
              </CardContent>
            </Card>
          </div>

          {/* نموذج الاتصال */}
          <div className="lg:col-span-2">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input id="firstName" placeholder="أدخل اسمك الأول" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">اللقب</Label>
                      <Input id="lastName" placeholder="أدخل لقبك" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input id="phone" placeholder="05XX XXX XXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">الموضوع</Label>
                    <Input id="subject" placeholder="موضوع رسالتك" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea 
                      id="message" 
                      placeholder="اكتب رسالتك هنا..."
                      className="min-h-[150px]"
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-hero text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                    <Send className="mr-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* الخريطة */}
        <div className="mt-16">
          <Card className="card-elegant overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                موقعنا على الخريطة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    أكاديمية الإتقان التعليمية
                  </h3>
                  <p className="text-muted-foreground">
                    دار الشيوخ - ولاية الجلفة - الجزائر
                  </p>
                  <Button className="mt-4 btn-hero">
                    عرض في خرائط جوجل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* دعوة للتسجيل */}
        <div className="mt-16">
          <Card className="card-elegant bg-primary-gradient text-white text-center">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4 font-arabic">
                مستعد لبدء رحلتك التعليمية؟
              </h2>
              <p className="text-xl mb-8 text-white/90">
                انضم إلى أكاديمية الإتقان واكتشف إمكانياتك الحقيقية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  تسجيل طالب جديد
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  انضم كأستاذ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;