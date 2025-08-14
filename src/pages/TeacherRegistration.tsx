import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Users, User, Phone, Mail, Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react";

const TeacherRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationNumber, setRegistrationNumber] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة عملية التسجيل
    setTimeout(() => {
      const regNumber = `TCH${Date.now().toString().slice(-6)}`;
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
                  <Users className="h-10 w-10 text-white" />
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
                  تسجيل أستاذ آخر
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
            انضمام جديد
          </Badge>
          <h1 className="text-3xl font-bold text-primary mb-4 font-arabic">
            انضم إلى فريق التدريس
          </h1>
          <p className="text-muted-foreground">
            اكمل البيانات التالية للانضمام إلى أكاديمية الإتقان التعليمية كأستاذ
          </p>
        </div>

        <Card className="card-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              بيانات الأستاذ
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
                  <GraduationCap className="h-4 w-4" />
                  المؤهل العلمي
                </Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المؤهل العلمي" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelor">ليسانس / بكالوريوس</SelectItem>
                    <SelectItem value="master">ماجستير</SelectItem>
                    <SelectItem value="phd">دكتوراه</SelectItem>
                    <SelectItem value="diploma">دبلوم متخصص</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  التخصص
                </Label>
                <Input id="specialization" placeholder="مثال: لغة عربية، رياضيات، فيزياء..." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">سنوات الخبرة</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر سنوات الخبرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-2">أقل من سنتين</SelectItem>
                    <SelectItem value="2-5">2-5 سنوات</SelectItem>
                    <SelectItem value="5-10">5-10 سنوات</SelectItem>
                    <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subjects">المواد التي يمكن تدريسها</Label>
                <Textarea 
                  id="subjects" 
                  placeholder="اذكر المواد التي تتقن تدريسها..."
                  className="min-h-[100px]"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">نبذة تعريفية</Label>
                <Textarea 
                  id="about" 
                  placeholder="نبذة مختصرة عن خبراتك وأهدافك التعليمية..."
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-hero text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري التسجيل..." : "تسجيل الأستاذ"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherRegistration;