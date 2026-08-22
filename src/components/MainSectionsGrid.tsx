import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Lightbulb,
  Timer,
  Calendar,
  FileQuestion,
  BookCheck,
  Bot,
  Trophy,
  Library,
  MessagesSquare,
  User,
  MessageSquareText,
  Calculator,
  ArrowUpRight
} from "lucide-react";

type SectionCard = {
  to: string;
  label: string;
  category: string;
  desc: string;
  icon: any;
  colorClass: string;
};

const SECTIONS: SectionCard[] = [
  {
    to: "/grade-calculator",
    label: "حاسبة المعدل BTEC",
    category: "أدوات التقييم",
    desc: "حساب معدل التوجيهي والأول ثانوي بدقة متناهية حسب معايير الوزارة وبيرسون.",
    icon: Calculator,
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    to: "/assistance",
    label: "المصادر والملفات المعتمدة",
    category: "المناهج والدراسة",
    desc: "مكتبة شاملة لكتب BTEC، أدلة المعلم، قوالب الحلول، والمهام لجميع المسارات.",
    icon: ClipboardList,
    colorClass: "text-primary bg-primary/10 border-primary/20"
  },
  {
    to: "/btec-about",
    label: "دليل مسارات BTEC",
    category: "التوجيه الأكاديمي",
    desc: "شرح شامل للنظام المهني، التخصصات المتاحة، وساعات التوزيع لكل مسار.",
    icon: Sparkles,
    colorClass: "text-accent bg-accent/10 border-accent/20"
  },
  {
    to: "/ai-chat",
    label: "المساعد الذكي (MKQ AI)",
    category: "الذكاء الاصطناعي",
    desc: "مساعدك الأكاديمي على مدار الساعة للإجابة عن أسئلة المواد وصياغة المهام.",
    icon: Bot,
    colorClass: "text-sky-500 bg-sky-500/10 border-sky-500/20"
  },
  {
    to: "/schedule",
    label: "الجدول الدراسي التفاعلي",
    category: "إدارة الوقت",
    desc: "نظم وقت دراستك وجدول حصصك ومهامك اليومية بسهولة واحترافية.",
    icon: Calendar,
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20"
  },
  {
    to: "/pomodoro",
    label: "مؤقت التركيز (بومودورو)",
    category: "الإنتاجية",
    desc: "جلسات دراسة مركزة مع فترات راحة ذكية لزيادة التحصيل الدراسي وتجنب الإجهاد.",
    icon: Timer,
    colorClass: "text-rose-500 bg-rose-500/10 border-rose-500/20"
  },
  {
    to: "/btec-quiz",
    label: "بنك اختبارات BTEC",
    category: "التقييم الذاتي",
    desc: "اختبارات تفاعلية لقياس فهمك في مواد تخصصك وتحضيرك للامتحانات.",
    icon: FileQuestion,
    colorClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
  },
  {
    to: "/btec-glossary",
    label: "قاموس مصطلحات BTEC",
    category: "المعرفة",
    desc: "شرح مبسط لكافة المصطلحات الفنية والأكاديمية المستخدمة في مناهج BTEC.",
    icon: Library,
    colorClass: "text-teal-500 bg-teal-500/10 border-teal-500/20"
  },
  {
    to: "/cultures",
    label: "المواد الثقافية العامة",
    category: "المواد المشتركة",
    desc: "شروحات ومصادر المواد الثقافية الإلزامية المشتركة لكافة الفروع.",
    icon: BookOpen,
    colorClass: "text-orange-500 bg-orange-500/10 border-orange-500/20"
  },
  {
    to: "/culture-quiz",
    label: "اختبارات الثقافات",
    category: "التقييم الذاتي",
    desc: "بنك أسئلة واختبارات تجريبية شاملة للمواد الثقافية العامة.",
    icon: BookCheck,
    colorClass: "text-violet-500 bg-violet-500/10 border-violet-500/20"
  },
  {
    to: "/advice-guide",
    label: "دليل النصائح والتوجيه",
    category: "الإرشاد",
    desc: "نصائح وإرشادات للتميز في المهام والتقييمات وضمان أعلى الدرجات.",
    icon: Lightbulb,
    colorClass: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
  },
  {
    to: "/achievements",
    label: "معرض إنجازات الطلاب",
    category: "الإلهام",
    desc: "مشاريع متميزة وقصص نجاح من طلبة مسارات BTEC المختلفة.",
    icon: Trophy,
    colorClass: "text-amber-400 bg-amber-400/10 border-amber-400/20"
  },
  {
    to: "/courses",
    label: "الدورات والمساقات",
    category: "التطوير",
    desc: "كورسات تعليمية ومساقات إضافية لتطوير المهارات العملية.",
    icon: GraduationCap,
    colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20"
  },
  {
    to: "/comments",
    label: "مجتمع وآراء الطلاب",
    category: "المجتمع",
    desc: "شارك تجربتك واستفد من نصائح وتجارب زملائك في مختلف التخصصات.",
    icon: MessageSquareText,
    colorClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
  },
  {
    to: "/about",
    label: "عن المطور (محمد خالد قطناني)",
    category: "عن المنصة",
    desc: "تعرف على مؤسس ومطور المنصة ورؤيته للتعليم المهني والتطبيقي.",
    icon: User,
    colorClass: "text-primary bg-primary/10 border-primary/20"
  },
  {
    to: "/contact",
    label: "تواصل مع الإدارة",
    category: "الدعم",
    desc: "قنوات التواصل المباشرة لتقديم الاقتراحات والاستفسارات الأكاديمية.",
    icon: MessagesSquare,
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
  },
];

export default function MainSectionsGrid() {
  const items = useMemo(() => SECTIONS, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.to + item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3) }}
          >
            <Link
              to={item.to}
              className="group relative flex flex-col justify-between h-full p-5 sm:p-6 rounded-2xl bg-card border border-border/70 shadow-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div>
                {/* Header of card: Icon & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${item.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-secondary text-muted-foreground">
                      {item.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom footer bar */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-semibold text-primary">
                <span>تصفح القسم</span>
                <span>←</span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
