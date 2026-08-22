import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Calculator,
  BookOpen,
  Bot,
  Sparkles,
  ArrowDown,
  Download,
  Share,
  CheckCircle2,
  Layers,
  FileCheck,
  ShieldCheck
} from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { canInstall, isInstalled, isIOS, promptInstall } = usePWAInstall();
  const { toast } = useToast();
  const [showIOSHint, setShowIOSHint] = useState(false);

  const handleInstallClick = async () => {
    if (isInstalled) return;
    if (canInstall) {
      const res = await promptInstall();
      if (res.outcome === "accepted") {
        toast({ title: "تم تثبيت التطبيق بنجاح ✨", description: "ستجده الآن على شاشتك الرئيسية" });
      }
      return;
    }
    if (isIOS) {
      setShowIOSHint((s) => !s);
      return;
    }
    toast({
      title: "تثبيت التطبيق",
      description:
        "افتح قائمة المتصفح ثم اختر «تثبيت التطبيق» أو «Add to Home Screen».",
    });
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle architectural gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Author & Platform Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-card/80 backdrop-blur-md shadow-sm mb-6 sm:mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-foreground">
            منصة <strong className="text-primary font-black">MKQ-btec</strong> الأكاديمية
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-semibold text-muted-foreground">
            إشراف وتطوير <span className="text-foreground font-bold">محمد خالد قطناني</span>
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.15] mb-6"
        >
          بوابتك الأكاديمية الشاملة
          <br />
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-200 bg-clip-text text-transparent">
            للتميز والتفوق في نظام BTEC
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          مرجعك المتكامل لجميع تخصصات التعليم المهني والتطبيقي. نوفر المناهج والكتب المعتمدة، حاسبات المعدل الدقيقة، بنك الاختبارات، ومساعد الذكاء الاصطناعي لدعمك في كل خطوة دراسية.
        </motion.p>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          <Link
            to="/grade-calculator"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>حاسبة المعدل والدرجات</span>
          </Link>

          <Link
            to="/assistance"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-secondary/80 hover:bg-secondary text-foreground border border-border/80 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span>المناهج والملفات المعتمدة</span>
          </Link>

          <Link
            to="/ai-chat"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-card hover:bg-secondary/60 text-foreground border border-border/60 transition-all"
          >
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span>المساعد الذكي (MKQ AI)</span>
          </Link>

          {!isInstalled && (
            <button
              type="button"
              onClick={handleInstallClick}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-border bg-card/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
            >
              <Download className="w-4 h-4" />
              <span>تثبيت التطبيق (PWA)</span>
            </button>
          )}
        </motion.div>

        {/* Feature Bento Bar: Instant Academic Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-right"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-card/70 border border-border/70 backdrop-blur-md hover:border-primary/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-base sm:text-lg font-black text-foreground">530+ مرجع معتمد</div>
            <p className="text-xs text-muted-foreground mt-1">كتب، أدلة المعلم، وشروحات لجميع التخصصات</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-card/70 border border-border/70 backdrop-blur-md hover:border-primary/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-base sm:text-lg font-black text-foreground">حاسبة دقيقة 100%</div>
            <p className="text-xs text-muted-foreground mt-1">مطابقة لمعايير تقييم بيرسون ونظام BTEC الأردني</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-card/70 border border-border/70 backdrop-blur-md hover:border-primary/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-base sm:text-lg font-black text-foreground">مساعد أكاديمي ذكي</div>
            <p className="text-xs text-muted-foreground mt-1">إجابات وشروحات فورية للمناهج والمهام</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-card/70 border border-border/70 backdrop-blur-md hover:border-primary/40 transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-base sm:text-lg font-black text-foreground">مجاني ومتاح دائماً</div>
            <p className="text-xs text-muted-foreground mt-1">منصة مستقلة تم تطويرها لدعم وتمكين الطلاب</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
