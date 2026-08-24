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
    url: "#", inactive: true,
    Icon: MessageCircle,
    brand: "#25D366",
  },
  {
    id: "instagram-btec",
    label: "إنستغرام",
    hint: "@55htp",
    url: "https://instagram.com/55htp",
    Icon: Instagram,
    brand: "#E4405F",
  },
  {
    id: "facebook",
    label: "فيسبوك",
    hint: "صفحة المجتمع",
    url: "#", inactive: true,
    Icon: Facebook,
    brand: "#1877F2",
  },
  {
    id: "youtube",
    label: "يوتيوب",
    hint: "قناة الشروحات",
    url: "#", inactive: true,
    Icon: Youtube,
    brand: "#FF0000",
  },
  {
    id: "linkedin",
    label: "لينكد إن",
    hint: "محمد خالد قطناني",
    url: "#", inactive: true,
    Icon: Linkedin,
    brand: "#0A66C2",
  },
  {
    id: "email",
    label: "البريد الإلكتروني",
    hint: "تواصل رسمي",
    url: "#", inactive: true,
    Icon: Mail,
    brand: "#EA4335",
  },
];
