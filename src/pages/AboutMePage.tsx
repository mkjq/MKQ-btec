import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, GraduationCap, Code2, Award, Compass, HeartHandshake, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SOCIAL_LINKS, type SocialLink } from "@/data/socialLinks";

export default function AboutMePage() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const skills = [
    { title: "تطوير المنصات والبرمجيات", desc: "بناء تطبيقات ويب متقدمة وأدوات أكاديمية تفاعلية للطلاب" },
    { title: "نظام BTEC والتعليم التطبيقي", desc: "خبرة في معايير بيرسون والخطط الدراسية للمسارات المهنية" },
    { title: "إدارة البيانات والمصادر التعليمية", desc: "تنظيم وأرشفة المناهج والأدلة لتسهيل وصول الطلاب إليها" },
    { title: "الابتكار وحل المشكلات", desc: "تصميم وتطوير خوارزميات حساب المعدلات ونماذج التقييم الذكية" }
  ];

  const pillars = [
    "الاهتمام البالغ بتجربة المستخدم وسلاسة تصفح المناهج",
    "توفير بيئة تعليمية مجانية خالية من العوائق لكافة الطلاب",
    "التحديث والتطوير المستمر لأدوات المنصة وقواعد البيانات",
    "الدقة الأكاديمية ومطابقة معايير وزارة التربية والتعليم وبيرسون"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <ScrollProgressBar />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة للرئيسية</span>
        </Link>

        {/* Hero Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xl shadow-black/5 backdrop-blur-md mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
            {/* Avatar Badge */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/50 text-primary-foreground font-black flex items-center justify-center text-3xl shadow-lg shadow-primary/30">
                MKQ
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-[10px] font-black border-2 border-background">
                FOUNDER
              </div>
            </div>

            {/* Title & Slogan */}
            <div className="text-center sm:text-right flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مؤسس ومطور منصة MKQ-btec</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight mb-2">
                محمد خالد قطناني
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                مطور برمجيات ومهتم بتطوير تقنيات التعليم التطبيقي (EdTech). صاحب فكرة ومطور منصة <strong className="text-foreground font-bold">MKQ-btec</strong>، المنصة الشاملة لدعم وتمكين طلاب التعليم المهني BTEC في مسيرتهم الدراسية والأكاديمية.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision & Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: Story & Idea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-card border border-border/70 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-black text-foreground mb-3">فكرة المنصة والبداية</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                انطلقت منصة <strong className="text-foreground">MKQ-btec</strong> برؤية واضحة: حل معضلة تشتت مصادر نظام BTEC الجديد، وتوفير بيئة رقمية أكاديمية متكاملة تجمع كل ما يحتاجه الطالب من كتب رسمية، أدلة معلمين، نماذج مهام وحلولها النموذجية، وحاسبات معدل دقيقة تساعد الطلاب على رسم خططهم المستقبلية بكل وضوح وثقة.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Mission & Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-card border border-border/70 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-black text-foreground mb-3">رسالتي لطلاب BTEC</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                التعليم المهني والتطبيقي هو مستقبل العمل والريادة. هدفي من خلال منصة MKQ-btec هو كسر أي حاجز يقف أمام الطالب، وتزويده بالأدوات التي تجعل تجربة دراسة هذا النظام ممتعة، منظمة، وذات مردود أكاديمي متميز. المنصة ستبقى دائماً مساحة للجميع ومصدر إلهام للتفوق.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills & Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-card border border-border/70 shadow-sm mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-black text-foreground">مجالات الاهتمام والتطوير</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.title} className="p-4 rounded-2xl bg-secondary/40 border border-border/50">
                <div className="text-xs font-bold text-foreground mb-1">{skill.title}</div>
                <div className="text-[11px] text-muted-foreground leading-relaxed">{skill.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 sm:p-8 rounded-3xl bg-card border border-border/70 shadow-sm mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-black text-foreground">المبادئ الأساسية للمنصة</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/40 text-xs font-medium text-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Connect & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-card border border-border/70 shadow-sm"
        >
          <h2 className="text-lg font-black text-foreground mb-2">قنوات التواصل والمتابعة</h2>
          <p className="text-xs text-muted-foreground mb-6">يسعدني دائماً التواصل واستقبال المقترحات والملاحظات لتطوير المنصة باستمرار.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.Icon;
              const isHovered = hoveredSocial === link.id;

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(link.id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-border/60 bg-secondary/30 hover:bg-secondary/70 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-card border border-border/60 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-foreground truncate">{link.label}</div>
                      {link.hint && (
                        <div className="text-[10px] text-muted-foreground truncate">{link.hint}</div>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}

