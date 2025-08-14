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
  TrendingUp,
  Trophy
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
      <section className="relative overflow-hidden bg-academic-gradient min-h-[85vh] flex items-center">
        {/* خلفية زخرفية متحركة */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-secondary-accent animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-primary-glow"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full border border-secondary-accent/50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-20 left-20 w-16 h-16 rounded-full border border-primary-glow/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            {/* شعار المدرسة في المقدمة */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9d677575-10db-41d7-8ff6-59ba6aad2276.png" 
                  alt="شعار أكاديمية الإتقان" 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-gold border-4 border-secondary-accent/40 hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary-accent/30 to-transparent"></div>
              </div>
            </div>
            
            <Badge className="mb-6 bg-secondary-accent/20 text-secondary-accent border-secondary-accent/30 hover:bg-secondary-accent/30 text-lg px-6 py-2">
              أهلاً بكم في أكاديمية الإتقان التعليمية
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 font-arabic leading-tight">
              طريقك نحو 
              <span className="text-gold-gradient block mt-2">التميز والإتقان</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-primary-light leading-relaxed max-w-4xl mx-auto">
              نقدم تعليماً متميزاً ودورات تدريبية متخصصة في بيئة تعليمية حديثة
            </p>
            <p className="text-lg md:text-xl mb-8 text-secondary-accent font-semibold">
              📍 دار الشيوخ - ولاية الجلفة - الجزائر
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/student-registration">
                <Button size="lg" className="btn-hero text-lg px-10 py-6 shadow-glow">
                  تسجيل طالب جديد
                  <GraduationCap className="mr-2 h-6 w-6" />
                </Button>
              </Link>
              
              <Link to="/teacher-registration">
                <Button size="lg" className="btn-secondary text-lg px-10 py-6">
                  انضم كأستاذ
                  <Users className="mr-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات سريعة */}
      <section className="py-20 bg-gradient-to-r from-primary-light/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border border-primary/10">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-smooth">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مميزاتنا */}
      <section className="py-24 bg-gradient-to-br from-background to-primary-light/5 relative overflow-hidden">
        {/* خلفية زخرفية */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-secondary-accent"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <Badge className="mb-6 bg-secondary-accent/10 text-secondary-accent border-secondary-accent/20 text-lg px-6 py-2">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 font-arabic">
              مميزات أكاديمية الإتقان
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              نحن نقدم تجربة تعليمية شاملة ومتميزة تهدف إلى إعداد جيل واعد ومؤهل للمستقبل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-academic text-center p-8 hover-lift group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6 relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-4">
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
      <section className="py-24 bg-academic-gradient text-white relative overflow-hidden">
        {/* خلفية زخرفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-2 border-secondary-accent animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border border-primary-glow"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-gradient mb-8 shadow-gold">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
            ابدأ رحلتك التعليمية معنا اليوم
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-light max-w-3xl mx-auto leading-relaxed">
            انضم إلى مئات الطلاب الذين اختاروا أكاديمية الإتقان لتحقيق أهدافهم التعليمية والوصول للتميز
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/courses">
              <Button size="lg" className="btn-secondary text-lg px-10 py-6 shadow-gold">
                تصفح الدورات
                <BookOpen className="mr-2 h-6 w-6" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-2 border-secondary-accent hover:bg-secondary-accent hover:text-primary text-lg px-10 py-6 shadow-soft">
                تواصل معنا
                <ArrowLeft className="mr-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;