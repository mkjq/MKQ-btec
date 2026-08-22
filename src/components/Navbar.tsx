import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Library,
  ClipboardList,
  Calculator,
  Calendar,
  Timer,
  FileQuestion,
  Trophy,
  Bot,
  MessageSquareMore,
  Lightbulb,
  MessagesSquare,
  User,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import UserMenu from "@/components/UserMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavGroup {
  label: string;
  icon: any;
  items: {
    to: string;
    label: string;
    desc?: string;
    icon: any;
    badge?: string;
  }[];
}

const navGroups: NavGroup[] = [
  {
    label: "المناهج والمسارات",
    icon: GraduationCap,
    items: [
      { to: "/btec-about", label: "دليل مسارات BTEC", desc: "استكشف كافة التخصصات والخطط", icon: Sparkles },
      { to: "/assistance", label: "المصادر والملفات المعتمدة", desc: "كتب، شروحات، وحلول المهام", icon: ClipboardList, badge: "شامل" },
      { to: "/btec-glossary", label: "قاموس المصطلحات", desc: "معجم المصطلحات الأكاديمية", icon: Library },
      { to: "/courses", label: "المساقات والكورسات", desc: "دورات مساندة وتطويرية", icon: BookOpen },
      { to: "/cultures", label: "الثقافات العامة", desc: "إثراء معرفي وثقافي", icon: BookOpen },
    ],
  },
  {
    label: "أدوات الطالب",
    icon: Calculator,
    items: [
      { to: "/grade-calculator", label: "حاسبة المعدل BTEC", desc: "حساب دقيق للمعدل والدرجات", icon: Calculator, badge: "أساسي" },
      { to: "/schedule", label: "الجدول الدراسي", desc: "تنظيم الحصص والمهام", icon: Calendar },
      { to: "/pomodoro", label: "مؤقت التركيز (بومودورو)", desc: "جلسات مذاكرة خالية من التشتت", icon: Timer },
      { to: "/btec-quiz", label: "بنك الاختبارات", desc: "اختبر معلوماتك في تخصصك", icon: FileQuestion },
      { to: "/achievements", label: "معرض الإنجازات", desc: "لوحة الشرف وتفوق الطلاب", icon: Trophy },
    ],
  },
  {
    label: "المساعد والمجتمع",
    icon: Bot,
    items: [
      { to: "/ai-chat", label: "المساعد الذكي (MKQ AI)", desc: "إجابات وشروحات أكاديمية فورية", icon: Bot, badge: "AI" },
      { to: "/comments", label: "آراء ومجتمع الطلاب", desc: "تجارب ونصائح من زملائك", icon: MessageSquareMore },
      { to: "/advice-guide", label: "دليل التوجيه والنصائح", desc: "إرشادات للتميز والنجاح", icon: Lightbulb },
      { to: "/contact", label: "تواصل مع الإدارة", desc: "اقتراحات واستفسارات مباشرة", icon: MessagesSquare },
    ],
  },
];

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [mobileOpen]);

  const isGroupActive = (group: NavGroup) => {
    return group.items.some((item) => location.pathname === item.to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/5"
          : "bg-background/50 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Right side: Modern Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-black shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
            <span className="text-base sm:text-lg tracking-tighter">MKQ</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background flex items-center justify-center text-[8px] font-bold">
              ✓
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                MKQ<span className="text-primary">-btec</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-primary/10 text-primary border border-primary/20 hidden sm:inline-block">
                المنصة الأكاديمية
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground font-medium hidden sm:block">
              إشراف وتطوير محمد خالد قطناني
            </span>
          </div>
        </Link>

        {/* Center: Clean Categorized Dropdown Hubs (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              location.pathname === "/"
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            الرئيسية
          </Link>

          {navGroups.map((group) => {
            const active = isGroupActive(group);
            const Icon = group.icon;

            return (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all outline-none ${
                    active
                      ? "bg-primary/15 text-primary border border-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{group.label}</span>
                  <ChevronDown className="w-3 h-3 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  className="w-72 p-2 rounded-xl bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl shadow-black/20"
                >
                  <div className="px-2 py-1.5 text-[11px] font-semibold text-muted-foreground border-b border-border/40 mb-1">
                    {group.label}
                  </div>
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    const isItemActive = location.pathname === item.to;

                    return (
                      <DropdownMenuItem key={item.to} asChild>
                        <Link
                          to={item.to}
                          className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors cursor-pointer ${
                            isItemActive
                              ? "bg-primary/15 text-primary"
                              : "hover:bg-secondary/70 text-foreground"
                          }`}
                        >
                          <div className={`p-1.5 rounded-md mt-0.5 ${isItemActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                            <ItemIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold truncate">{item.label}</span>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 text-[9px] font-extrabold rounded bg-primary/15 text-primary border border-primary/20">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.desc && (
                              <p className="text-[10px] text-muted-foreground truncate mt-0.5 font-normal">
                                {item.desc}
                              </p>
                            )}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}

          <Link
            to="/about"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
              location.pathname === "/about"
                ? "bg-primary/15 text-primary border border-primary/25"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>عن المطور</span>
          </Link>
        </nav>

        {/* Left Side Actions: Quick Action + User Menu + Mobile Button */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/grade-calculator"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:opacity-95 transition-opacity"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة المعدل</span>
          </Link>

          {user ? <UserMenu /> : null}

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="فتح القائمة الرئيسية"
            className="lg:hidden p-2 rounded-lg border border-border/50 bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 z-50 w-80 max-w-[85vw] bg-card border-r border-border p-5 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground font-black flex items-center justify-center text-sm shadow-sm">
                      MKQ
                    </div>
                    <div>
                      <div className="font-extrabold text-sm text-foreground">MKQ-btec</div>
                      <div className="text-[10px] text-muted-foreground">محمد خالد قطناني</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground"
                    aria-label="إغلاق القائمة"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-5">
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold ${
                      location.pathname === "/" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>الرئيسية</span>
                  </Link>

                  {navGroups.map((group) => (
                    <div key={group.label} className="space-y-1.5">
                      <div className="px-2 text-[11px] font-bold text-muted-foreground">
                        {group.label}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = location.pathname === item.to;

                          return (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                                isActive
                                  ? "bg-primary/15 text-primary font-bold"
                                  : "text-foreground hover:bg-secondary/70"
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <ItemIcon className="w-4 h-4 text-primary" />
                                <span>{item.label}</span>
                              </div>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-primary/10 text-primary">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-border/50">
                    <Link
                      to="/about"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold ${
                        location.pathname === "/about" ? "bg-primary/15 text-primary" : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      <User className="w-4 h-4 text-primary" />
                      <span>عن المطور (محمد خالد قطناني)</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 mt-6 border-t border-border text-center">
                <p className="text-[11px] text-muted-foreground font-medium">
                  منصة MKQ-btec التعليمية المتكاملة
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
