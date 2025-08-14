import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  ArrowLeft, 
  Star,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "تعليم متميز",
      description: "نقدم أفضل المناهج التعليمية مع أحدث طرق التدريس"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "أساتذة مؤهلين",
      description: "فريق من أفضل المعلمين والمدربين في مختلف التخصصات"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "دورات متنوعة",
      description: "مجموعة واسعة من الدورات التعليمية والتدريبية المتخصصة"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "شهادات معتمدة",
      description: "نمنح شهادات معتمدة بعد إتمام الدورات بنجاح"
    }
  ];

  const stats = [
    { number: "500+", label: "طالب مسجل" },
    { number: "50+", label: "أستاذ مؤهل" },
    { number: "25+", label: "دورة تدريبية" },
    { number: "95%", label: "معدل النجاح" }
  ];

  return (
    <div className="min-h-screen">
      {/* القسم الرئيسي */}
      <section className="relative overflow-hidden bg-hero min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              أهلاً بكم في أكاديمية الإتقان التعليمية
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic">
              طريقك نحو 
              <span className="text-secondary block mt-2">التميز والإتقان</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              نقدم تعليماً متميزاً ودورات تدريبية متخصصة في بيئة تعليمية حديثة
              <br />
              لإعداد جيل واعد ومتميز في دار الشيوخ - الجلفة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/student-registration">
                <Button size="lg" className="btn-hero text-lg px-8 py-6">
                  تسجيل طالب جديد
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/teacher-registration">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  انضم كأستاذ
                  <Users className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات سريعة */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مميزاتنا */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
              مميزات أكاديمية الإتقان
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن نقدم تجربة تعليمية شاملة ومتميزة تهدف إلى إعداد جيل واعد ومؤهل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant text-center p-6 hover-lift">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arabic">
            ابدأ رحلتك التعليمية معنا اليوم
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            انضم إلى مئات الطلاب الذين اختاروا أكاديمية الإتقان لتحقيق أهدافهم التعليمية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="btn-secondary text-lg px-8 py-6">
                تصفح الدورات
                <BookOpen className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                تواصل معنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;