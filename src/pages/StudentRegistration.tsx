import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, User, Phone, Mail, Calendar, MapPin, BookOpen } from "lucide-react";

const StudentRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة عملية التسجيل
    setTimeout(() => {
      const regNumber = `STU${Date.now().toString().slice(-6)}`;
      setRegistrationNumber(regNumber);
      setIsSubmitting(false);
      
      toast({
        title: "تم التسجيل بنجاح!",
        description: `رقم التسجيل الخاص بك: ${regNumber}`,
      });
    }, 2000);
  };

  if (registrationNumber) {
    return (
      <div className="min-h-screen bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="card-elegant text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 bg-primary-gradient rounded-full flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-primary font-arabic">
                تم التسجيل بنجاح!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Badge className="text-lg px-6 py-3 bg-primary text-white">
                رقم التسجيل: {registrationNumber}
              </Badge>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">مهم جداً:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  يرجى نسخ رقم التسجيل والاحتفاظ به. ستحتاجه مع تاريخ ميلادك للتحقق من التسجيل وتعديل البيانات لاحقاً.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigator.clipboard.writeText(registrationNumber)}
                  className="btn-hero"
                >
                  نسخ رقم التسجيل
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => setRegistrationNumber(null)}
                >
                  تسجيل طالب آخر
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            تسجيل جديد
          </Badge>
          <h1 className="text-3xl font-bold text-primary mb-4 font-arabic">
            تسجيل طالب جديد
          </h1>
          <p className="text-muted-foreground">
            اكمل البيانات التالية للتسجيل في أكاديمية الإتقان التعليمية
          </p>
        </div>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              بيانات الطالب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    الاسم الأول
                  </Label>
                  <Input id="firstName" placeholder="أدخل الاسم الأول" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    اللقب
                  </Label>
                  <Input id="lastName" placeholder="أدخل اللقب" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  تاريخ الميلاد
                </Label>
                <Input id="birthDate" type="date" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">الجنس</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الجنس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">ذكر</SelectItem>
                    <SelectItem value="female">أنثى</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  رقم الهاتف
                </Label>
                <Input id="phone" placeholder="05XX XXX XXX" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  البريد الإلكتروني
                </Label>
                <Input id="email" type="email" placeholder="example@gmail.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  العنوان
                </Label>
                <Input id="address" placeholder="العنوان الكامل" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  المستوى التعليمي
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستوى التعليمي" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">ابتدائي</SelectItem>
                    <SelectItem value="middle">متوسط</SelectItem>
                    <SelectItem value="secondary">ثانوي</SelectItem>
                    <SelectItem value="university">جامعي</SelectItem>
                    <SelectItem value="postgraduate">دراسات عليا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">الدورة المرغوبة</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الدورة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quran">تحفيظ القرآن الكريم</SelectItem>
                    <SelectItem value="arabic">اللغة العربية</SelectItem>
                    <SelectItem value="math">الرياضيات</SelectItem>
                    <SelectItem value="science">العلوم</SelectItem>
                    <SelectItem value="english">اللغة الإنجليزية</SelectItem>
                    <SelectItem value="computer">الحاسوب</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full btn-hero text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري التسجيل..." : "تسجيل الطالب"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentRegistration;