import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Search, CheckCircle, Edit, Calendar, User, Phone, Mail } from "lucide-react";

const VerifyRegistration = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // محاكاة البحث في قاعدة البيانات
    setTimeout(() => {
      setRegistrationData({
        id: "STU123456",
        firstName: "أحمد",
        lastName: "محمد",
        birthDate: "1995-05-15",
        phone: "0555123456",
        email: "ahmed@example.com",
        type: "طالب"
      });
      setIsLoading(false);
      toast({
        title: "تم العثور على التسجيل!",
        description: "يمكنك الآن مراجعة وتعديل بياناتك",
      });
    }, 1500);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
      toast({
        title: "تم تحديث البيانات!",
        description: "تم حفظ التعديلات بنجاح",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            التحقق من التسجيل
          </Badge>
          <h1 className="text-3xl font-bold text-primary mb-4 font-arabic">
            التحقق من التسجيل وتعديل البيانات
          </h1>
          <p className="text-muted-foreground">
            أدخل رقم التسجيل وتاريخ الميلاد للتحقق من تسجيلك
          </p>
        </div>

        {!registrationData ? (
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Search className="h-6 w-6 text-primary" />
                البحث عن التسجيل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="registrationId">رقم التسجيل</Label>
                  <Input 
                    id="registrationId" 
                    placeholder="مثال: STU123456 أو TCH123456" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    تاريخ الميلاد
                  </Label>
                  <Input id="birthDate" type="date" required />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-hero text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "جاري البحث..." : "البحث والتحقق"}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* معلومات التسجيل */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  تم العثور على التسجيل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {registrationData.type}
                  </Badge>
                  <Badge variant="outline">
                    {registrationData.id}
                  </Badge>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary">
                    {registrationData.firstName} {registrationData.lastName}
                  </h3>
                </div>
              </CardContent>
            </Card>

            {/* البيانات الشخصية */}
            <Card className="card-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <User className="h-6 w-6 text-primary" />
                    البيانات الشخصية
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "إلغاء" : "تعديل"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="editFirstName">الاسم الأول</Label>
                        <Input 
                          id="editFirstName" 
                          defaultValue={registrationData.firstName}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="editLastName">اللقب</Label>
                        <Input 
                          id="editLastName" 
                          defaultValue={registrationData.lastName}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="editPhone">رقم الهاتف</Label>
                      <Input 
                        id="editPhone" 
                        defaultValue={registrationData.phone}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="editEmail">البريد الإلكتروني</Label>
                      <Input 
                        id="editEmail" 
                        type="email"
                        defaultValue={registrationData.email}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-hero"
                      disabled={isLoading}
                    >
                      {isLoading ? "جاري الحفظ..." : "حفظ التعديلات"}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">الاسم الأول</Label>
                        <p className="font-medium">{registrationData.firstName}</p>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">اللقب</Label>
                        <p className="font-medium">{registrationData.lastName}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        رقم الهاتف
                      </Label>
                      <p className="font-medium">{registrationData.phone}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        البريد الإلكتروني
                      </Label>
                      <p className="font-medium">{registrationData.email}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        تاريخ الميلاد
                      </Label>
                      <p className="font-medium">{registrationData.birthDate}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setRegistrationData(null)}
              >
                البحث عن تسجيل آخر
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyRegistration;