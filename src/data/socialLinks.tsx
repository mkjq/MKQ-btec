import { Instagram, Youtube, Globe, Mail, MessageCircle, Facebook, Ghost, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  id: string;
  label: string;
  hint?: string;
  url: string;
  Icon: LucideIcon;
  /** Brand color (hex) used for hover glow + border */
  brand: string;
  /** When true, hover background is light → use dark icon color */
  lightHover?: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "whatsapp",
    label: "واتساب",
    hint: "تواصل مباشر",
    url: "https://wa.me/962779538251",
    Icon: MessageCircle,
    brand: "#25D366",
  },
  {
    id: "instagram-btec",
    label: "إنستغرام MKQ BTEC",
    hint: "@its.btec.it",
    url: "https://www.instagram.com/its.btec.it",
    Icon: Instagram,
    brand: "#E4405F",
  },
  {
    id: "facebook",
    label: "فيسبوك",
    hint: "صفحة المجتمع",
    url: "https://www.facebook.com/share/173Lm6oHHR/",
    Icon: Facebook,
    brand: "#1877F2",
  },
  {
    id: "youtube",
    label: "يوتيوب",
    hint: "قناة الشروحات",
    url: "https://www.youtube.com",
    Icon: Youtube,
    brand: "#FF0000",
  },
  {
    id: "linkedin",
    label: "لينكد إن",
    hint: "محمد خالد قطناني",
    url: "https://www.linkedin.com",
    Icon: Linkedin,
    brand: "#0A66C2",
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    hint: "تواصل رسمي",
    url: "mailto:info@mkq-btec.edu",
    Icon: Mail,
    brand: "#EA4335",
  },
];
