import { useState } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { GraduationCap, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const [hoverId, setHoverId] = useState<string | null>(null);

  return (
    <footer className="border-t border-border/60 bg-card/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-black flex items-center justify-center text-base shadow-md shadow-primary/20">
                MKQ
              </div>
              <div>
                <span className="text-xl font-black text-foreground">
                  MKQ<span className="text-primary">-btec</span>
                </span>
                <p className="text-xs text-muted-foreground font-medium">المنصة الأكاديمية الشاملة</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              منصة تعليمية متكاملة مخصصة لطلاب ومدرسي نظام التعليم المهني والتطبيقي BTEC. توفر كافة المراجع والكتب المعتمدة، حاسبات المعدل التراكمي، أدوات تنظيم الوقت، وشروحات ذكية لمساعدة الطلاب على التفوق الأكاديمي.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <ShieldCheck className="w-4 h-4" />
              <span>محتوى تعليمي معتمد ومحدث لعام 2026</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/btec-about" className="text-muted-foreground hover:text-primary transition-colors">
                  دليل مسارات BTEC
                </Link>
              </li>
              <li>
                <Link to="/assistance" className="text-muted-foreground hover:text-primary transition-colors">
                  المصادر والملفات المعتمدة
                </Link>
              </li>
              <li>
                <Link to="/grade-calculator" className="text-muted-foreground hover:text-primary transition-colors">
                  حاسبة المعدل BTEC
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  الجدول الدراسي
                </Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-muted-foreground hover:text-primary transition-colors">
                  المساعد الذكي (MKQ AI)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Developer & Vision */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              عن المنصة والمطور
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              تم تأسيس وتطوير المنصة بواسطة <strong className="text-foreground">محمد خالد قطناني</strong> بهدف دعم مسيرة التعليم التطبيقي وتمكين الطلاب من تحقيق أعلى الدرجات.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>تعرف على المطور محمد خالد قطناني</span>
                <span>←</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Bar & Divider */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} <strong className="text-foreground">MKQ-btec</strong> • تم التطوير بعناية بواسطة{" "}
            <strong className="text-foreground">محمد خالد قطناني</strong>. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.Icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="w-9 h-9 rounded-lg border border-border/50 bg-secondary/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
