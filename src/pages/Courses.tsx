import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, Calendar, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "تحفيظ القرآن الكريم",
      description: "برنامج شامل لتحفيظ القرآن الكريم مع التجويد والتلاوة الصحيحة",
      duration: "6 أشهر",
      students: 85,
      rating: 4.9,
      price: "مجاني",
      category: "دراسات إسلامية",
      image: "/placeholder.svg",
      features: ["تحفيظ متدرج", "تعلم التجويد", "مراجعة دورية", "اختبارات شهرية"]
    },
    {
      id: 2,
      title: "اللغة العربية والنحو",
      description: "دورة متكاملة لتعلم قواعد اللغة العربية والنحو والصرف",
      duration: "4 أشهر",
      students: 72,
      rating: 4.8,
      price: "2000 د.ج",
      category: "لغات",
      image: "/placeholder.svg",
      features: ["قواعد النحو", "البلاغة", "الإعراب", "التطبيق العملي"]
    },
    {
      id: 3,
      title: "الرياضيات المتقدمة",
      description: "دروس في الرياضيات لجميع المستويات مع التطبيقات العملية",
      duration: "5 أشهر",
      students: 94,
      rating: 4.7,
      price: "2500 د.ج",
      category: "علوم",
      image: "/placeholder.svg",
      features: ["الجبر", "الهندسة", "الإحصاء", "حل المسائل"]
    },
    {
      id: 4,
      title: "اللغة الإنجليزية",
      description: "تعلم اللغة الإنجليزية من الأساسيات حتى المستوى المتقدم",
      duration: "6 أشهر",
      students: 126,
      rating: 4.9,
      price: "3000 د.ج",
      category: "لغات",
      image: "/placeholder.svg",
      features: ["المحادثة", "القواعد", "الكتابة", "الاستماع"]
    },
    {
      id: 5,
      title: "الحاسوب والبرمجة",
      description: "مقدمة في علوم الحاسوب والبرمجة للمبتدئين",
      duration: "3 أشهر",
      students: 58,
      rating: 4.6,
      price: "4000 د.ج",
      category: "تكنولوجيا",
      image: "/placeholder.svg",
      features: ["أساسيات الحاسوب", "البرمجة", "المايكروسوفت أوفيس", "الإنترنت"]
    },
    {
      id: 6,
      title: "العلوم الطبيعية",
      description: "دورة في الفيزياء والكيمياء والأحياء للطلاب",
      duration: "4 أشهر",
      students: 67,
      rating: 4.5,
      price: "2200 د.ج",
      category: "علوم",
      image: "/placeholder.svg",
      features: ["الفيزياء", "الكيمياء", "الأحياء", "التجارب العملية"]
    }
  ];

  const categories = ["جميع الدورات", "دراسات إسلامية", "لغات", "علوم", "تكنولوجيا"];

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            دوراتنا التعليمية
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4 font-arabic">
            الدورات والبرامج التعليمية
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة واسعة من الدورات التعليمية المتخصصة لجميع الأعمار والمستويات
          </p>
        </div>

        {/* فلاتر الفئات */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "جميع الدورات" ? "default" : "outline"}
              className={category === "جميع الدورات" ? "btn-hero" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">دورة متاحة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">طالب مسجل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">أستاذ مؤهل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">معدل النجاح</div>
          </div>
        </div>

        {/* الدورات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="card-elegant hover-lift overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight">
                  {course.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>المدة: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{course.students} طالب مسجل</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span>شهادة معتمدة</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">ما ستتعلمه:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.features.map((feature, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="h-1 w-1 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {course.price}
                  </div>
                  <Button className="btn-hero">
                    التسجيل الآن
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* دعوة للتسجيل */}
        <div className="mt-16 text-center">
          <Card className="card-elegant bg-primary-gradient text-white max-w-4xl mx-auto">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4 font-arabic">
                هل أنت مستعد لبدء رحلتك التعليمية؟
              </h2>
              <p className="text-xl mb-8 text-white/90">
                انضم إلى آلاف الطلاب الذين اختاروا أكاديمية الإتقان لتحقيق أهدافهم
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="btn-secondary">
                  تسجيل طالب جديد
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  تواصل معنا
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;