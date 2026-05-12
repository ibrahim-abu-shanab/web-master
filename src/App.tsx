import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";



// ========== ICONS ==========
const IconMenu = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconX = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconSun = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const IconMoon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const IconWhatsapp = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconCode = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconShop = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const IconSearch = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconMegaphone = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>
);
const IconChart = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconDashboard = () => (
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconStar = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconArrowLeft = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
);
const IconGoogle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ========== TYPES ==========
interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgGradient: string;
  image: string;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

type Lang = "ar" | "tr";

// ========== TRANSLATIONS ==========
const translations = {
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      whyUs: "لماذا نحن",
      pricing: "الأسعار",
      testimonials: "آراء العملاء",
      contact: "تواصل معنا",
      cta: "تواصل معنا",
    },
    hero: {
      badge: "شريكك الرقمي نحو النجاح",
      title1: "نحوّل أفكارك إلى",
      title2: "واقع رقمي احترافي",
      desc: "خدمات متكاملة في البرمجة، التسويق الرقمي، وتحسين نتائج جوجل SEO لضمان وصول عملائك إليك قبل المنافسين وتضاعف مبيعاتك.",
      descBold1: "البرمجة",
      descBold2: "التسويق الرقمي",
      descBold3: "SEO",
      cta1: "احصل على استشارة مجانية",
      cta2: "شاهد خدماتنا",
      stats: ["مشروع منجز", "رضا العملاء", "عميل سعيد", "سنوات خبرة"],
      statSuffixes: ["+", "%", "+", "+"],
      badge1Title: "SEO متخصص",
      badge1Sub: "صدارة نتائج جوجل مضمونة",
      badge2Title: "تسليم سريع",
      badge2Sub: "في الوقت المحدد",
      badge3Title: "تصميم إبداعي",
      badge3Sub: "واجهات عصرية",
      badge4Title: "دعم فني مستمر",
      badge4Sub: "متاحون دائماً لخدمتك",
    },
    services: {
      badge: "• خدماتنا المتميزة •",
      title1: "نبتكر حلولاً رقمية تقودك",
      title2: "للقمة",
      desc: "لا نقدم مجرد كود، بل نبني أصولاً رقمية مصممة لزيادة المبيعات، تعزيز الثقة، وضمان تجربة مستخدم لا تُنسى.",
      orderBtn: "اطلب الخدمة",
    },
    whyUs: {
      badge: "• لماذا نحن؟ •",
      title1: "لماذا يثق العملاء",
      title2: "بخدماتنا؟",
      desc: "نركز على الأداء، جودة التصميم، قوة السيو، والدعم المستمر لضمان نمو موقعك مع عملك.",
      items: [
        { icon: "⚡", title: "أداء استثنائي", desc: "مواقع فائقة السرعة محسّنة بأحدث التقنيات لضمان تجربة مستخدم لا مثيل لها." },
        { icon: "📈", title: "SEO متقدم", desc: "تهيئة شاملة لمحركات البحث لرفع ترتيب موقعك وزيادة الزيارات العضوية." },
        { icon: "🛡️", title: "أمان عالي", desc: "نطبّق أعلى معايير الأمان لحماية موقعك وبيانات عملائك من أي تهديد." },
        { icon: "🎨", title: "تصميم إبداعي", desc: "واجهات عصرية تجذب الانتباه وتحوّل الزوار إلى عملاء فعليين." },
        { icon: "🔧", title: "دعم مستمر", desc: "فريق دعم متاح دائماً لضمان عمل موقعك بلا انقطاع وإجراء التحديثات اللازمة." },
        { icon: "💡", title: "حلول مخصصة", desc: "نبني حلولاً تقنية مصممة خصيصاً لاحتياجاتك وأهداف عملك." },
      ],
      googleTitle: "نضع متجرك على",
      googleTitleHL: "صدارة جوجل",
      googleDesc: "من خلال استراتيجيات SEO متقدمة وتحسين شامل لصفحات منتجاتك، نضمن ظهور متجرك في الصفحة الأولى من نتائج البحث لزيادة المبيعات بشكل ملحوظ.",
      googleCta: "استشارة مجانية",
    },
    pricing: {
      badge: "• الأسعار •",
      title1: "اختر الخطة المناسبة",
      title2: "لعملك",
      desc: "أسعار شفافة وتنافسية مع ضمان الجودة وخدمة ما بعد التسليم.",
      orderBtn: "اطلب الآن",
    },
    testimonials: {
      badge: "• آراء العملاء •",
      title1: "ماذا يقول",
      title2: "عملاؤنا؟",
    },
    contact: {
      badge: "• تواصل معنا •",
      title1: "ابدأ مشروعك",
      title2: "اليوم!",
      desc: "تواصل معنا الآن للحصول على استشارة مجانية ونبدأ رحلة نجاح عملك الرقمي معاً.",
      whatsapp: "واتساب",
      phone: "اتصل بنا",
      email: "البريد الإلكتروني",
      ctaTitle: "هل أنت جاهز لتحويل عملك رقمياً؟",
      ctaDesc: "تواصل معنا الآن واحصل على استشارة مجانية تماماً",
      ctaBtn: "ابدأ الآن مجاناً",
    },
    footer: {
      copy: "© 2026 Web Master | جميع الحقوق محفوظة",
    },
  },
  tr: {
    dir: "ltr" as const,
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetlerimiz",
      whyUs: "Neden Biz?",
      pricing: "Fiyatlar",
      testimonials: "Müşteri Yorumları",
      contact: "İletişim",
      cta: "Bize Ulaşın",
    },
    hero: {
      badge: "Dijital Başarının Ortağı",
      title1: "Fikirlerinizi",
      title2: "Profesyonel Dijital Gerçeğe Dönüştürüyoruz",
      desc: "Web geliştirme, dijital pazarlama ve Google SEO optimizasyonunda kapsamlı hizmetler sunarak müşterilerinizin sizi rakiplerinizden önce bulmasını sağlıyoruz.",
      descBold1: "Web Geliştirme",
      descBold2: "Dijital Pazarlama",
      descBold3: "SEO",
      cta1: "Ücretsiz Danışmanlık Al",
      cta2: "Hizmetlerimizi Gör",
      stats: ["Tamamlanan Proje", "Müşteri Memnuniyeti", "Mutlu Müşteri", "Yıl Deneyim"],
      statSuffixes: ["+", "%", "+", "+"],
      badge1Title: "Uzman SEO",
      badge1Sub: "Google'da üst sıra garantisi",
      badge2Title: "Hızlı Teslimat",
      badge2Sub: "Zamanında teslim",
      badge3Title: "Yaratıcı Tasarım",
      badge3Sub: "Modern arayüzler",
      badge4Title: "Sürekli Destek",
      badge4Sub: "Her zaman yanınızdayız",
    },
    services: {
      badge: "• Öne Çıkan Hizmetlerimiz •",
      title1: "Sizi Zirveye Taşıyacak",
      title2: "Dijital Çözümler",
      desc: "Sadece kod yazmıyoruz; satışları artırmak, güven oluşturmak ve unutulmaz kullanıcı deneyimi sağlamak için dijital varlıklar inşa ediyoruz.",
      orderBtn: "Hizmet Al",
    },
    whyUs: {
      badge: "• Neden Biz? •",
      title1: "Müşteriler Neden",
      title2: "Bize Güveniyor?",
      desc: "Performans, tasarım kalitesi, SEO gücü ve sürekli destek ile sitenizin işinizle birlikte büyümesini sağlıyoruz.",
      items: [
        { icon: "⚡", title: "Olağanüstü Performans", desc: "Eşsiz kullanıcı deneyimi garantilemek için en son teknolojilerle optimize edilmiş süper hızlı siteler." },
        { icon: "📈", title: "Gelişmiş SEO", desc: "Sitenizin sıralamasını yükseltmek ve organik trafiği artırmak için kapsamlı arama motoru optimizasyonu." },
        { icon: "🛡️", title: "Yüksek Güvenlik", desc: "Sitenizi ve müşteri verilerinizi her türlü tehdide karşı korumak için en yüksek güvenlik standartlarını uyguluyoruz." },
        { icon: "🎨", title: "Yaratıcı Tasarım", desc: "Dikkat çeken ve ziyaretçileri gerçek müşterilere dönüştüren modern arayüzler." },
        { icon: "🔧", title: "Sürekli Destek", desc: "Sitenizin kesintisiz çalışmasını sağlamak ve gerekli güncellemeleri yapmak için her zaman hazır destek ekibi." },
        { icon: "💡", title: "Özel Çözümler", desc: "İhtiyaçlarınıza ve iş hedeflerinize özel olarak tasarlanmış teknoloji çözümleri." },
      ],
      googleTitle: "Mağazanızı",
      googleTitleHL: "Google'ın Zirvesine Koyuyoruz",
      googleDesc: "Gelişmiş SEO stratejileri ve ürün sayfalarınızın kapsamlı optimizasyonu sayesinde mağazanızın arama sonuçlarının ilk sayfasında görünmesini sağlıyoruz.",
      googleCta: "Ücretsiz Danışmanlık",
    },
    pricing: {
      badge: "• Fiyatlar •",
      title1: "İşinize Uygun",
      title2: "Paketi Seçin",
      desc: "Teslimat sonrası hizmet ve kalite garantisi ile şeffaf ve rekabetçi fiyatlar.",
      orderBtn: "Şimdi Sipariş Ver",
    },
    testimonials: {
      badge: "• Müşteri Yorumları •",
      title1: "Müşterilerimiz",
      title2: "Ne Diyor?",
    },
    contact: {
      badge: "• İletişim •",
      title1: "Projenize",
      title2: "Bugün Başlayın!",
      desc: "Ücretsiz danışmanlık için hemen bize ulaşın ve birlikte dijital başarı yolculuğunuza başlayalım.",
      whatsapp: "WhatsApp",
      phone: "Bizi Arayın",
      email: "E-posta",
      ctaTitle: "İşinizi Dijitale Taşımaya Hazır mısınız?",
      ctaDesc: "Hemen bize ulaşın ve tamamen ücretsiz danışmanlık alın",
      ctaBtn: "Hemen Ücretsiz Başla",
    },
    footer: {
      copy: "© 2026 Web Master | Tüm Hakları Saklıdır",
    },
  },
};

// ========== SEO KEYWORDS ==========
const SEO_KEYWORDS_TR = [
  // Web Tasarım & Geliştirme
  "web tasarım", "web sitesi tasarımı", "profesyonel web tasarım", "kurumsal web tasarım",
  "web sitesi yapımı", "web sitesi kurma", "web sitesi oluşturma", "web sayfası tasarımı",
  "modern web tasarım", "responsive web tasarım", "mobil uyumlu web tasarım", "web geliştirme",
  "web sitesi geliştirme", "özel web tasarım", "web tasarım firması", "web tasarım ajansı",
  "web tasarım şirketi", "ucuz web tasarım", "uygun fiyatlı web tasarım", "kaliteli web tasarım",
  "hızlı web sitesi", "web sitesi yaptırma", "web sitesi fiyatları", "web tasarım fiyatları",
  "HTML CSS tasarım", "React web geliştirme", "web sitesi bakımı", "web sitesi güncellemesi",
  "UI UX tasarım", "kullanıcı arayüzü tasarımı", "landing page tasarımı", "tek sayfalık web sitesi",
  "çok sayfalık web sitesi", "kurumsal kimlik tasarımı", "web sitesi yenileme", "web sitesi revizyonu",
  "özel yazılım geliştirme", "web uygulaması", "web sitesi danışmanlığı", "web projesi",
  "profesyonel web sitesi", "işletme web sitesi", "şirket web sitesi", "kişisel web sitesi",
  "portfolio web sitesi", "hizmet web sitesi", "tanıtım web sitesi", "web sitesi tasarlatma",
  "web tasarım paketleri", "web sitesi paketi", "başlangıç web paketi", "kurumsal web paketi",
  // Web Tasarım - Ek Anahtar Kelimeler
  "web site tasarımı", "web yazilim", "web tasarım firmaları", "web tasarım şirketleri",
  "web sitesi yapan firmalar", "web sitesi yapan ajanslar", "web sitesi tasarlama",
  "site tasarımı", "site yapımı", "web online", "web sitesi dizayn",
  "tasarım web siteleri", "shopify site tasarımı", "kolay web tasarım", "butik web tasarım",
  "freelancer web tasarım", "basit site tasarımları", "basit web sitesi tasarımı",
  "güzel site tasarımları", "hazır tasarım siteleri", "html5 site yapımı",
  "internet sitesi yazılımı", "kişisel site tasarımı", "css web tasarım",
  "bootstrap sayfa tasarımı", "bootstrap site tasarımı", "adobe dreamweaver site yapımı",
  "ada web tasarım", "akwebtasarim", "ar web ajans", "bionluk web tasarım", "boluweb",
  "en iyi internet sitesi tasarımları", "en iyi web tasarım şirketleri",
  "ücretsiz web sitesi tasarımı",
  // Web Tasarım - Fiyat Odaklı Ek
  "web tasarım fiyatları 2026", "web site tasarım fiyatları", "web sayfası tasarım fiyatları",
  "web sitesi tasarımı fiyatları", "site tasarım fiyatları", "profesyonel web sitesi fiyatları",
  "kurumsal web sitesi fiyatları",
  // Logo & Grafik Tasarım
  "logo tasarımı", "grafik tasarım", "kurumsal tasarım", "kurumsal kimlik",
  "logo oluşturma", "profesyonel logo tasarımı", "online logo tasarım", "kurumsal logo tasarımı",
  "yapay zeka logo tasarımı", "logo tasarimi", "logo tasarım fiyatları",
  "freelancer grafiker", "freelance grafiker",
  "kartvizit tasarımı", "ücretsiz etiket tasarımı", "kutu tasarımı",
  // E-Ticaret
  "e-ticaret sitesi", "e-ticaret kurulum", "online mağaza kurma", "online satış sitesi",
  "dijital mağaza", "e-ticaret yazılımı", "e-ticaret tasarımı", "alışveriş sitesi kurma",
  "e-ticaret çözümleri", "e-ticaret geliştirme", "ödeme sistemi entegrasyonu", "e-ticaret paketi",
  "e-ticaret yönetim paneli", "ürün yönetimi", "stok takip sistemi", "sepet sistemi",
  "güvenli ödeme altyapısı", "SSL sertifikası", "e-ticaret SEO", "e-ticaret pazarlama",
  "online satış artırma", "e-ticaret danışmanlığı", "e-ticaret fiyatları", "e-ticaret yazılım fiyatı",
  "e-ticaret sitesi yaptırma", "online mağaza açmak", "internet üzerinden satış", "sanal mağaza",
  "online satış platformu", "ürün kataloğu sitesi", "B2B e-ticaret", "B2C e-ticaret",
  "dropshipping sitesi", "toptan satış sitesi", "perakende e-ticaret", "e-ticaret entegrasyonu",
  "kargo entegrasyonu", "ödeme entegrasyonu", "iyzico entegrasyonu", "PayTR entegrasyonu",
  // SEO
  "SEO", "arama motoru optimizasyonu", "Google SEO", "SEO hizmetleri", "SEO danışmanlığı",
  "SEO ajansı", "SEO şirketi", "SEO firması", "SEO optimizasyonu", "teknik SEO",
  "içerik SEO", "yerel SEO", "e-ticaret SEO", "SEO analizi", "SEO raporu",
  "anahtar kelime araştırması", "backlink oluşturma", "link building", "site içi SEO",
  "site dışı SEO", "Google sıralama", "Google ilk sayfa", "organik trafik artırma",
  "arama motoru sıralaması", "SEO fiyatları", "aylık SEO paketi", "SEO paketi",
  "sayfa hızı optimizasyonu", "mobil SEO", "teknik site analizi", "Google Search Console",
  "meta tag optimizasyonu", "başlık optimizasyonu", "schema markup", "yerel işletme SEO",
  "harita SEO", "Google My Business optimizasyonu", "SEO içerik yazımı", "blog SEO",
  "SEO danışmanı", "SEO uzmanı", "Google sıralaması yükseltme", "web sitesi sıralaması",
  "arama sonuçları optimizasyonu", "organik büyüme", "SEO stratejisi", "içerik stratejisi",
  "site haritası", "robots.txt", "canonical tag", "hreflang etiketi", "domain otoritesi",
  "sayfa otoritesi", "DA PA artırma", "SEO denetimi", "SEO iyileştirme", "SEO performansı",
  // Dijital Pazarlama
  "dijital pazarlama", "dijital reklam", "online pazarlama", "internet pazarlama",
  "sosyal medya pazarlama", "sosyal medya yönetimi", "Google reklamları", "Google Ads",
  "Meta reklamları", "Facebook reklamları", "Instagram reklamları", "reklam yönetimi",
  "dijital pazarlama ajansı", "dijital pazarlama şirketi", "dijital pazarlama hizmetleri",
  "içerik pazarlama", "e-posta pazarlama", "performans pazarlama", "marka bilinirliği",
  "müşteri edinme", "lead generation", "dönüşüm oranı optimizasyonu", "CRO",
  "reklam bütçesi yönetimi", "ROAS optimizasyonu", "dijital strateji", "pazarlama danışmanlığı",
  "marka stratejisi", "hedef kitle analizi", "rakip analizi", "pazar araştırması",
  "dijital analitik", "Google Analytics", "web analizi", "reklam kampanyası yönetimi",
  "YouTube reklamları", "TikTok reklamları", "Twitter reklamları", "LinkedIn reklamları",
  "sosyal medya içerikleri", "sosyal medya stratejisi", "influencer pazarlama",
  "affiliate marketing", "email marketing", "newsletter", "dijital marka yönetimi",
  "online itibar yönetimi", "müşteri geri bildirimi", "müşteri ilişkileri yönetimi",
  // Lokasyon - İstanbul
  "İstanbul web tasarım", "İstanbul web sitesi", "İstanbul e-ticaret", "İstanbul SEO",
  "İstanbul dijital pazarlama", "İstanbul web geliştirme", "İstanbul web ajansı",
  "İstanbul yazılım şirketi", "İstanbul dijital ajans", "İstanbul online mağaza",
  // Lokasyon - Ankara
  "Ankara web tasarım", "Ankara web sitesi", "Ankara e-ticaret", "Ankara SEO",
  "Ankara dijital pazarlama", "Ankara web ajansı", "Ankara yazılım şirketi",
  // Lokasyon - İzmir
  "İzmir web tasarım", "İzmir web sitesi", "İzmir e-ticaret", "İzmir SEO",
  "İzmir dijital pazarlama", "İzmir web ajansı",
  // Lokasyon - Bursa
  "Bursa web tasarım", "Bursa SEO", "Bursa e-ticaret",
  "bursa en iyi web tasarım", "bursa site tasarım",
  // Lokasyon - Diğer şehirler
  "Antalya web tasarım", "Antalya SEO", "Antalya e-ticaret", "Antalya dijital pazarlama",
  "Adana web tasarım", "Adana SEO", "Adana e-ticaret",
  "Gaziantep web tasarım", "Gaziantep SEO", "Gaziantep e-ticaret",
  "Konya web tasarım", "Konya SEO", "Konya e-ticaret",
  "Mersin web tasarım", "Mersin SEO", "Mersin e-ticaret",
  "Kayseri web tasarım", "Kayseri SEO", "Kayseri e-ticaret",
  "Eskişehir web tasarım", "Eskişehir SEO", "Eskişehir e-ticaret",
  "Trabzon web tasarım", "Trabzon SEO", "Trabzon e-ticaret",
  "Samsun web tasarım", "Samsun SEO", "Samsun e-ticaret",
  "Diyarbakır web tasarım", "Diyarbakır SEO", "Diyarbakır e-ticaret",
  "Kocaeli web tasarım", "Kocaeli SEO", "Kocaeli e-ticaret",
  "Şanlıurfa web tasarım", "Şanlıurfa SEO",
  "Malatya web tasarım", "Malatya SEO", "Malatya e-ticaret",
  "Elazığ web tasarım", "Elazığ SEO", "Elazığ e-ticaret", "Elazığ dijital pazarlama",
  "Erzurum web tasarım", "Erzurum SEO",
  "Van web tasarım", "Van SEO",
  "Denizli web tasarım", "Denizli SEO", "Denizli e-ticaret",
  "Manisa web tasarım", "Manisa SEO",
  "Balıkesir web tasarım", "Balıkesir SEO",
  "Sakarya web tasarım", "Sakarya SEO",
  "Tekirdağ web tasarım", "Tekirdağ SEO",
  "Hatay web tasarım", "Hatay SEO",
  "Kahramanmaraş web tasarım", "Kahramanmaraş SEO",
  "Mardin web tasarım", "Mardin SEO",
  "Batman web tasarım", "Batman SEO",
  "Muğla web tasarım", "Muğla SEO",
  "Türkiye web tasarım", "Türkiye SEO", "Türkiye e-ticaret", "Türkiye dijital pazarlama",
  // Teknik & Backend
  "API geliştirme", "REST API", "backend geliştirme", "veritabanı tasarımı",
  "hosting hizmetleri", "domain kayıt", "SSL kurulumu", "yönetim paneli geliştirme",
  "CMS kurulumu", "mobil uygulama", "PWA geliştirme", "SaaS geliştirme",
  "bulut çözümleri", "sunucu yönetimi", "güvenlik duvarı", "DDoS koruması",
  "veri yedekleme", "site bakımı", "teknik destek", "7/24 destek",
  // Genel & Marka
  "web master", "webmaster", "web tasarım uzmanı", "dijital ajans", "kreatif ajans",
  "teknoloji şirketi", "yazılım şirketi", "web ajansı", "dijital çözümler",
  "dijital dönüşüm", "online varlık", "dijital kimlik", "marka tasarımı",
  "marka geliştirme", "online marka", "dijital marka", "web varlığı",
  // Müşteri odaklı & Long-tail
  "web sitesi yaptırmak istiyorum", "web sitesi nasıl yaptırılır", "web sitesi fiyatı ne kadar",
  "SEO fiyatları ne kadar", "e-ticaret sitesi açmak", "işimi internete taşımak",
  "dijitale geçiş", "web sitesi satışları artırma", "müşteri bulmak",
  "online müşteri kazanma", "Google'da ilk sıraya çıkmak", "Google sıralaması nasıl yükseltilir",
  "web sitesi trafiği artırma", "organik müşteri kazanma", "ücretsiz SEO danışmanlığı",
  "ücretsiz web danışmanlığı", "en iyi web tasarım şirketi", "güvenilir web tasarım",
  "hızlı web sitesi kurma", "profesyonel e-ticaret kurulum", "başarılı web sitesi",
  "satış artıran web sitesi", "dönüşüm odaklı web tasarım", "kullanıcı dostu web sitesi",
  "hızlı yüklenen web sitesi", "güvenli web sitesi", "arama motorlarına uygun site",
  "mobil öncelikli tasarım", "Google core web vitals", "site performansı",
  "web sitesi analizi", "rakip analizi", "pazar araştırması dijital",
  "sosyal medya hesap yönetimi", "Facebook sayfa yönetimi", "Instagram hesap yönetimi",
  "içerik üretimi", "görsel tasarım", "video pazarlama", "YouTube kanal yönetimi",
  "web sitesi optimizasyonu", "dönüşüm artırma", "müşteri sadakati", "müşteri memnuniyeti",
  "web tasarım teklifi", "ücretsiz teklif", "web sitesi teklif al", "proje teklifi",
  // Sektör bazlı web tasarım
  "restoran web sitesi", "kafe web sitesi", "otel web sitesi", "turizm web sitesi",
  "doktor web sitesi", "klinik web sitesi", "hastane web sitesi", "eczane web sitesi",
  "avukat web sitesi", "hukuk bürosu web sitesi", "muhasebe web sitesi", "mali müşavir web sitesi",
  "inşaat web sitesi", "emlak web sitesi", "gayrimenkul web sitesi", "çiçekçi web sitesi",
  "güzellik salonu web sitesi", "kuaför web sitesi", "spor salonu web sitesi", "fitness web sitesi",
  "eğitim web sitesi", "okul web sitesi", "kurs web sitesi", "özel ders web sitesi",
  "mühendislik web sitesi", "mimarlık web sitesi", "danışmanlık web sitesi", "medya web sitesi",
  "yayıncılık web sitesi", "haber sitesi", "blog sitesi", "dernek web sitesi", "vakıf web sitesi",
  // SEO - Sektör bazlı
  "restoran SEO", "otel SEO", "emlak SEO", "doktor SEO", "klinik SEO",
  "avukat SEO", "e-ticaret SEO uzmanı", "yerel SEO uzmanı", "ulusal SEO",
  "Google haritalar optimizasyonu", "Google işletme profili", "yorum yönetimi",
  "yerel arama optimizasyonu", "mobil arama optimizasyonu", "sesli arama optimizasyonu",
  "görsel arama optimizasyonu", "YouTube SEO", "video SEO", "podcast SEO",
  // Dijital pazarlama - Detaylı
  "Facebook reklam yönetimi", "Instagram reklam yönetimi", "Google Ads yönetimi",
  "Yandex reklam", "reklam optimizasyonu", "reklam maliyeti düşürme", "CPC optimizasyonu",
  "CPM optimizasyonu", "retargeting reklam", "remarketing", "hedefli reklam",
  "A/B testi", "landing page optimizasyonu", "satış hunisi", "müşteri yolculuğu",
  "dijital pazarlama fiyatları", "sosyal medya danışmanlığı", "içerik takvimi",
  "hashtag stratejisi", "sosyal medya analizi", "rakip sosyal medya analizi",
  "marka kimliği oluşturma", "kurumsal sosyal medya", "sosyal medya büyüme",
  // E-ticaret detaylı
  "e-ticaret müşteri kazanma", "e-ticaret trafiği artırma", "sepet terk oranı düşürme",
  "ürün sayfası optimizasyonu", "kategori sayfası SEO", "e-ticaret blog",
  "e-ticaret email pazarlama", "e-ticaret sosyal medya", "e-ticaret Google Ads",
  "e-ticaret Meta reklamları", "e-ticaret dönüşüm oranı", "e-ticaret müşteri sadakati",
  "e-ticaret mobil uygulama", "e-ticaret hızlı teslimat", "e-ticaret lojistik",
  "çoklu satış kanalı", "marketplace entegrasyonu", "Trendyol entegrasyonu",
  "Hepsiburada entegrasyonu", "Amazon entegrasyonu", "N11 entegrasyonu",
  // Web tasarım - Teknik detaylı
  "Core Web Vitals optimizasyonu", "LCP optimizasyonu", "CLS optimizasyonu",
  "FID optimizasyonu", "sayfa hızı testi", "GTmetrix optimizasyonu",
  "PageSpeed Insights", "web sitesi güvenliği", "HTTPS", "güvenlik duvarı",
  "DDoS koruması", "spam koruması", "veri yedekleme", "felaket kurtarma planı",
  "web erişilebilirliği", "WCAG uyumluluğu", "çok dil desteği", "Arapça web sitesi",
  "Türkçe İngilizce web sitesi", "uluslararası SEO", "çok dilli SEO",
  "web sitesi analiz araçları", "ısı haritası analizi", "kullanıcı davranış analizi",
  "dönüşüm izleme", "hedef takibi", "e-ticaret izleme", "gelişmiş analitik",
  // Fiyat ve paketler
  "ucuz SEO", "uygun fiyatlı SEO", "ekonomik web paketi", "premium web paketi",
  "kurumsal web paketi", "başlangıç web paketi", "e-ticaret başlangıç paketi",
  "e-ticaret premium paketi", "aylık web bakım paketi", "yıllık SEO paketi",
  "web sitesi bakım sözleşmesi", "teknik destek paketi", "7/24 teknik destek",
  // Müşteri sorguları - Soru formatı
  "web sitesi nasıl açılır", "e-ticaret nasıl kurulur", "SEO nasıl yapılır",
  "Google'da nasıl üst sıraya çıkılır", "web sitesi trafiği nasıl artırılır",
  "sosyal medya nasıl yönetilir", "Facebook reklamı nasıl verilir",
  "Instagram reklamı nasıl verilir", "Google reklamı nasıl açılır",
  "web sitesi fiyatı", "SEO fiyatı", "dijital pazarlama fiyatı",
  "e-ticaret sitesi fiyatı", "logo tasarım fiyatı", "sosyal medya yönetim fiyatı",
  // Başarı & Sonuç odaklı
  "satışları artıran web sitesi", "müşteri kazandıran web sitesi", "sonuç odaklı SEO",
  "ölçülebilir dijital pazarlama", "garantili SEO hizmeti", "hızlı SEO sonuçları",
  "kısa sürede Google ilk sayfa", "web sitesiyle büyüme", "dijital büyüme",
  "online satış büyümesi", "marka bilinirliği artırma", "müşteri güveni oluşturma",
  "referans müşteriler", "başarı hikayeleri", "vaka çalışması", "web tasarım portföyü",
  // Ekstra & Tamamlayıcı
  "yazılım çözümleri", "teknoloji danışmanlığı", "IT danışmanlığı", "dijital altyapı",
  "iş süreçleri otomasyonu", "ERP entegrasyonu", "CRM yazılımı", "müşteri yönetim sistemi",
  "randevu sistemi", "online rezervasyon", "form sistemi", "anket sistemi",
  "canlı destek entegrasyonu", "chatbot entegrasyonu", "WhatsApp entegrasyonu",
  "SMS pazarlama", "push bildirim", "mobil uyumlu tasarım", "tablet uyumlu tasarım",
  "web sitesi güncelleme", "eski site yenileme", "site hızlandırma", "CDN kullanımı",
  "görsel optimizasyonu", "video optimizasyonu", "içerik yönetim sistemi",
  "blog yönetimi", "e-bülten sistemi", "üyelik sistemi", "forum sistemi",
  "galeri sistemi", "portföy sitesi", "etkinlik web sitesi", "organizasyon web sitesi",
  "kurumsal blog", "sektör blogu", "web sitesi içeriği", "metin yazarlığı",
  "SEO metin yazarlığı", "içerik optimizasyonu", "anahtar kelime yoğunluğu",
  "meta açıklama yazımı", "sayfa başlığı optimizasyonu", "URL yapısı optimizasyonu",
].join(", ");

const SEO_KEYWORDS_AR = [
  "تصميم مواقع", "تصميم مواقع احترافية", "برمجة مواقع", "تطوير مواقع", "تصميم موقع إلكتروني",
  "موقع إلكتروني احترافي", "تصميم متجر إلكتروني", "متجر إلكتروني", "تسويق رقمي",
  "تحسين محركات البحث", "SEO", "سيو", "تحسين سيو", "ظهور في جوجل", "تصدر نتائج جوجل",
  "إعلانات جوجل", "إعلانات فيسبوك", "إدارة السوشيال ميديا", "تصميم هوية تجارية",
  "تطوير تطبيقات", "لوحة تحكم", "استضافة مواقع", "دومين", "شهادة SSL",
  "تسويق المحتوى", "إدارة الحملات الإعلانية", "زيادة المبيعات", "استشارة مجانية",
  "خدمات رقمية", "حلول رقمية", "ويب ماستر", "شركة تصميم مواقع", "أفضل مصمم مواقع",
].join(", ");

// ========== CONSTANTS ==========
const WHATSAPP_NUMBER = "+905537917977";
const WHATSAPP_LINK = `https://wa.me/905537917977`;
const EMAIL = "webmastr.tr@gmail.com";
const PHONE = "+905537917977";

// ========== SERVICES DATA (bilingual) ==========
const servicesData = {
  ar: [
    {
      icon: <IconCode />,
      title: "تصميم وبرمجة المواقع",
      description: "نبني مواقع ويب احترافية عالية الأداء تعكس هوية علامتك التجارية وتحوّل زوارك إلى عملاء فعليين.",
      features: ["تصميم UI/UX عصري", "متجاوب مع جميع الشاشات", "سرعة تحميل فائقة", "دعم متعدد اللغات"],
      color: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-500/10 to-blue-700/5",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    },
    {
      icon: <IconShop />,
      title: "المتاجر الإلكترونية",
      description: "ابنِ إمبراطوريتك التجارية بمتجر إلكتروني متكامل مع سلة تسوق، نظام دفع، ولوحة تحكم ذكية.",
      features: ["تكامل بوابات الدفع", "لوحة تحكم متكاملة", "إدارة المنتجات والمخزون", "أمان SSL عالي"],
      color: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-500/10 to-orange-700/5",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    },
    {
      icon: <IconSearch />,
      title: "تحسين محركات البحث SEO",
      description: "نضع موقعك في صدارة نتائج جوجل لضمان وصول عملائك إليك قبل المنافسين وزيادة المبيعات.",
      features: ["تحسين الكلمات المفتاحية", "بناء روابط خلفية", "تحسين السرعة والأداء", "تقارير شهرية مفصّلة"],
      color: "from-green-500 to-green-700",
      bgGradient: "from-green-500/10 to-green-700/5",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
    },
    {
      icon: <IconMegaphone />,
      title: "التسويق الرقمي",
      description: "استراتيجيات تسويق رقمي متكاملة تشمل إدارة الحملات الإعلانية على جميع المنصات لتضاعف مبيعاتك.",
      features: ["إعلانات جوجل وميتا", "إدارة السوشيال ميديا", "تسويق بالمحتوى", "تحليل المنافسين"],
      color: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-500/10 to-purple-700/5",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    },
    {
      icon: <IconChart />,
      title: "تحسين نتائج المتجر",
      description: "نحلّل متجرك ونطبّق أفضل استراتيجيات CRO وSEO لزيادة معدل التحويل ومضاعفة إيراداتك.",
      features: ["تحليل سلوك المستخدم", "تحسين صفحات المنتجات", "A/B Testing", "تقليل نسبة الارتداد"],
      color: "from-rose-500 to-rose-700",
      bgGradient: "from-rose-500/10 to-rose-700/5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      icon: <IconDashboard />,
      title: "لوحات التحكم والـ API",
      description: "نصمم لوحات تحكم مخصصة وخوادم Backend قوية تتيح لك إدارة عملك بكفاءة عالية وأمان تام.",
      features: ["لوحات تحكم مخصصة", "API متكاملة وآمنة", "قواعد بيانات متطورة", "دعم فني مستمر"],
      color: "from-cyan-500 to-cyan-700",
      bgGradient: "from-cyan-500/10 to-cyan-700/5",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
  ],
  tr: [
    {
      icon: <IconCode />,
      title: "Web Tasarım & Geliştirme",
      description: "Markanızın kimliğini yansıtan ve ziyaretçilerinizi gerçek müşterilere dönüştüren yüksek performanslı profesyonel web siteleri inşa ediyoruz.",
      features: ["Modern UI/UX Tasarım", "Tüm Ekranlara Uyumlu", "Süper Hızlı Yükleme", "Çok Dil Desteği"],
      color: "from-blue-500 to-blue-700",
      bgGradient: "from-blue-500/10 to-blue-700/5",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    },
    {
      icon: <IconShop />,
      title: "E-Ticaret Mağazaları",
      description: "Alışveriş sepeti, ödeme sistemi ve akıllı yönetim paneliyle eksiksiz bir e-ticaret mağazasıyla ticari imparatorluğunuzu kurun.",
      features: ["Ödeme Entegrasyonu", "Tam Yönetim Paneli", "Ürün & Stok Yönetimi", "Yüksek SSL Güvenliği"],
      color: "from-orange-500 to-orange-700",
      bgGradient: "from-orange-500/10 to-orange-700/5",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    },
    {
      icon: <IconSearch />,
      title: "SEO Optimizasyonu",
      description: "Müşterilerinizin rakiplerinizden önce size ulaşmasını sağlamak ve satışları artırmak için sitenizi Google arama sonuçlarının zirvesine taşıyoruz.",
      features: ["Anahtar Kelime Optimizasyonu", "Backlink İnşası", "Hız & Performans", "Aylık Detaylı Raporlar"],
      color: "from-green-500 to-green-700",
      bgGradient: "from-green-500/10 to-green-700/5",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
    },
    {
      icon: <IconMegaphone />,
      title: "Dijital Pazarlama",
      description: "Satışlarınızı katlayacak tüm platformlarda reklam kampanyası yönetimini kapsayan entegre dijital pazarlama stratejileri.",
      features: ["Google & Meta Reklamları", "Sosyal Medya Yönetimi", "İçerik Pazarlama", "Rakip Analizi"],
      color: "from-purple-500 to-purple-700",
      bgGradient: "from-purple-500/10 to-purple-700/5",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    },
    {
      icon: <IconChart />,
      title: "Mağaza Performans Artırma",
      description: "Dönüşüm oranını artırmak ve gelirinizi katlayacak en iyi CRO ve SEO stratejilerini uygulamak için mağazanızı analiz ediyoruz.",
      features: ["Kullanıcı Davranış Analizi", "Ürün Sayfası Optimizasyonu", "A/B Testi", "Bounce Rate Azaltma"],
      color: "from-rose-500 to-rose-700",
      bgGradient: "from-rose-500/10 to-rose-700/5",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      icon: <IconDashboard />,
      title: "Yönetim Panelleri & API",
      description: "İşinizi yüksek verimlilik ve tam güvenlikle yönetmenizi sağlayan özel yönetim panelleri ve güçlü Backend sunucuları tasarlıyoruz.",
      features: ["Özel Yönetim Panelleri", "Entegre & Güvenli API", "Gelişmiş Veritabanları", "Sürekli Teknik Destek"],
      color: "from-cyan-500 to-cyan-700",
      bgGradient: "from-cyan-500/10 to-cyan-700/5",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
  ],
};

// ========== PLANS DATA (bilingual) ==========
const plansData = {
  ar: [
    {
      name: "موقع صفحة واحدة",
      price: "7.999 ₺",
      period: "ابتداءً من",
      features: [
        "تصميم احترافي لصفحة واحدة",
        "أداء سريع وواجهة نظيفة",
        "هيكل محسّن لـ SEO",
        "دعم لمدة شهر",
        "استضافة + دومين مجاني سنة",
        "مراجعة مجانية بعد التسليم",
      ],
      highlighted: false,
    },
    {
      name: "موقع تجاري",
      price: "14.999 ₺",
      period: "ابتداءً من",
      features: [
        "3–7 صفحات مخصصة بالكامل",
        "واجهة احترافية ومتجاوبة",
        "تحسين SEO مدمج",
        "نظام محتوى سهل الإدارة",
        "استضافة + دومين مجاني سنتين",
        "دعم 3 أشهر + 3 مراجعات",
      ],
      highlighted: true,
      badge: "الأكثر طلباً",
    },
    {
      name: "متجر إلكتروني",
      price: "34.999 ₺",
      period: "ابتداءً من",
      features: [
        "متجر إلكتروني كامل متكامل",
        "سلة تسوق + تسجيل دخول",
        "ربط بوابات الدفع",
        "لوحة تحكم كاملة",
        "استضافة + دومين مجاني 3 سنوات",
        "دعم 6 أشهر + أمان عالي",
      ],
      highlighted: false,
    },
  ],
  tr: [
    {
      name: "Tek Sayfalık Site",
      price: "7.999 ₺",
      period: "Başlangıç fiyatı",
      features: [
        "Tek sayfa profesyonel tasarım",
        "Hızlı performans & temiz arayüz",
        "SEO optimize yapısı",
        "1 ay destek",
        "1 yıl ücretsiz hosting + domain",
        "Teslim sonrası ücretsiz revizyon",
      ],
      highlighted: false,
    },
    {
      name: "Kurumsal Site",
      price: "14.999 ₺",
      period: "Başlangıç fiyatı",
      features: [
        "3–7 tamamen özel sayfa",
        "Profesyonel & uyumlu arayüz",
        "Entegre SEO optimizasyonu",
        "Kolay yönetim içerik sistemi",
        "2 yıl ücretsiz hosting + domain",
        "3 ay destek + 3 revizyon",
      ],
      highlighted: true,
      badge: "En Çok Tercih Edilen",
    },
    {
      name: "E-Ticaret Mağazası",
      price: "34.999 ₺",
      period: "Başlangıç fiyatı",
      features: [
        "Tam entegre e-ticaret mağazası",
        "Sepet + kullanıcı girişi",
        "Ödeme gateway entegrasyonu",
        "Tam yönetim paneli",
        "3 yıl ücretsiz hosting + domain",
        "6 ay destek + yüksek güvenlik",
      ],
      highlighted: false,
    },
  ],
};

// ========== TESTIMONIALS DATA (bilingual) ==========
const testimonialsData = {
  ar: [
    {
      name: "أحمد أبو شنب",
      role: "صاحب متجر إلكتروني",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=81",
      text: "والله تجربة ما توصف! المتجر طلع أحسن من اللي تخيلته بكتير. WebMaster شغلتهم تكلم، وشفنا زيادة في المبيعات من أول أسبوع بعد إطلاق الموقع!",
      rating: 5,
    },
    {
      name: "سارة الخطيب",
      role: "مديرة تسويق",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80",
      text: "تعاملت مع شركات كتير بس WebMaster غير تماماً. سرعة في التسليم وجودة عالية. الحملة التسويقية اللي سووها حققت نتايج ما توقعناها في وقت قصير!",
      rating: 5,
    },
    {
      name: "خالد الراشد",
      role: "رائد أعمال",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80",
      text: "أفضل قرار اتخذته لعملي إني تواصلت مع WebMaster. ظهرت على أول جوجل في 3 أسابيع بس! فريق محترف ومتجاوب، أنصح فيهم من غير تردد.",
      rating: 5,
    },
  ],
  tr: [
    {
      name: "Mehmet Yılmaz",
      role: "E-Ticaret Mağazası Sahibi",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop//images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=81",
      text: "İnanılmaz bir deneyim! Mağaza hayal ettiğimden çok daha iyi çıktı. WebMaster'ın işi gerçekten konuşuyor ve siteyi yayına aldıktan sonraki ilk haftadan itibaren satışlarda artış gördük!",
      rating: 5,
    },
    {
      name: "Ayşe Kaya",
      role: "Pazarlama Müdürü",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80",
      text: "Birçok şirketle çalıştım ama WebMaster tamamen farklı. Hızlı teslimat ve yüksek kalite. Yaptıkları pazarlama kampanyası kısa sürede beklentilerimizin ötesinde sonuçlar elde etti!",
      rating: 5,
    },
    {
      name: "Ali Demir",
      role: "Girişimci",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80",
      text: "İşim için aldığım en iyi karar WebMaster ile iletişime geçmekti. Sadece 3 haftada Google'ın ilk sayfasına çıktım! Profesyonel ve duyarlı bir ekip, tereddütsüz tavsiye ediyorum.",
      rating: 5,
    },
  ],
};

// ========== GLOBE ICON FOR LANGUAGE TOGGLE ==========
const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    {/* الدائرة الخارجية */}
    <circle cx="12" cy="12" r="10"/>
    {/* خطوط الطول — عمودية */}
    <ellipse cx="12" cy="12" rx="4" ry="10"/>
    <ellipse cx="12" cy="12" rx="8" ry="10"/>
    {/* خط الاستواء */}
    <line x1="2" y1="12" x2="22" y2="12"/>
    {/* خطوط العرض — منحنية */}
    <path d="M3.34 7 Q12 4.5 20.66 7"/>
    <path d="M3.34 17 Q12 19.5 20.66 17"/>
  </svg>
);

// ========== MAIN COMPONENT ==========
export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("tr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [countersStarted, setCountersStarted] = useState(false);
  const [counterVals, setCounterVals] = useState([0, 0, 0, 0]);

  const t = translations[lang];
  const services: Service[] = servicesData[lang];
  const plans: Plan[] = plansData[lang];
  const testimonials = testimonialsData[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "services", "why-us", "pricing", "testimonials", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const statTargets = [150, 98, 50, 5];
  useEffect(() => {
    if (!countersStarted) return;
    const duration = 2000;
    const steps = 80;
    const intervalMs = duration / steps;
    let step = 0;
    setCounterVals([0, 0, 0, 0]);
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounterVals(statTargets.map(t => Math.round(t * ease)));
      if (step >= steps) {
        setCounterVals(statTargets);
        clearInterval(timer);
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [countersStarted]);

  useEffect(() => {
    const tryObserve = () => {
      const el = document.querySelector("[data-stats-row]") as HTMLElement;
      if (!el) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setCountersStarted(true); obs.disconnect(); }
      }, { threshold: 0.4 });
      obs.observe(el);
      return () => obs.disconnect();
    };
    const timeout = setTimeout(tryObserve, 500);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Inject SEO meta keywords dynamically based on language
  useEffect(() => {
    let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "keywords";
      document.head.appendChild(meta);
    }
    meta.content = lang === "tr" ? SEO_KEYWORDS_TR : SEO_KEYWORDS_AR;
  }, [lang]);

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "why-us", label: t.nav.whyUs },
    { id: "pricing", label: t.nav.pricing },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "contact", label: t.nav.contact },
  ];

  const bg = dark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900";
  const cardBg = dark ? "bg-slate-900/80 border-slate-700/50" : "bg-white border-slate-200";
  const navBg = scrolled
    ? dark ? "bg-slate-950/90 border-b border-slate-800" : "bg-white/90 border-b border-slate-200"
    : "bg-transparent";
  const subText = dark ? "text-slate-400" : "text-slate-600";

  // Language toggle button component
  const LangToggle = () => (
    <button
      onClick={() => setLang(lang === "ar" ? "tr" : "ar")}
      title={lang === "ar" ? "Türkçe'ye geç" : "العربية"}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all duration-300 cursor-pointer font-bold text-sm select-none
        ${dark
          ? "bg-slate-800 border-slate-700 text-slate-200 hover:border-orange-500 hover:bg-slate-700"
          : "bg-slate-100 border-slate-300 text-slate-700 hover:border-orange-500 hover:bg-slate-200"
        }`}
    >
      <IconGlobe />
      <span className="hidden sm:inline">
        {lang === "ar" ? "TR" : "AR"}
      </span>
    </button>
  );

  const isRTL = t.dir === "rtl";

  return (
    <div
      className={`min-h-screen ${bg} relative overflow-x-hidden`}
      dir={t.dir}
      style={{ transition: "background 0.3s, color 0.3s" }}
    >

      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 backdrop-blur-md ${navBg}`}
        style={{ transition: "background 0.3s, border 0.3s" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3 gap-2">

            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/imges/Logo.png"
                alt="Web Master Logo"
                className="h-12 w-12 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <span
                className="text-xl font-black"
                style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Web Master
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap
                    ${activeSection === link.id
                      ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg"
                      : dark ? "text-slate-300 hover:text-white hover:bg-slate-800" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Language Toggle */}
              <LangToggle />

              {/* Dark/Light toggle */}
              <button
                onClick={() => setDark(!dark)}
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer
                  ${dark ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
                title={dark ? (lang === "ar" ? "الوضع النهاري" : "Gündüz Modu") : (lang === "ar" ? "الوضع الليلي" : "Gece Modu")}
              >
                {dark ? <IconSun /> : <IconMoon />}
              </button>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-orange-500/30 transition-all duration-300 whitespace-nowrap"
              >
                <IconWhatsapp />
                {t.nav.cta}
              </a>

              {/* Mobile Menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-xl cursor-pointer ${dark ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"}`}
              >
                {menuOpen ? <IconX /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`lg:hidden border-t ${dark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"} px-4 pb-4 pt-2`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-${isRTL ? "right" : "left"} px-4 py-3 rounded-xl mb-1 font-semibold transition-all cursor-pointer
                  ${activeSection === link.id
                    ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white"
                    : dark ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {link.label}
              </button>
            ))}
            {/* Mobile lang toggle in menu */}
            <div className={`mt-2 flex ${isRTL ? "justify-end" : "justify-start"}`}>
              <LangToggle />
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{
          background: dark
            ? "linear-gradient(135deg, #0f172a 0%, #0c1527 40%, #0f1f3d 100%)"
            : "linear-gradient(135deg, #f1f5f9 0%, #e8f0fe 40%, #fef3e2 100%)",
        }}
      >
        {/* Blobs */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`text-${isRTL ? "right" : "left"}`}>
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-bold mb-6`}>
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                {t.hero.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className={dark ? "text-white" : "text-slate-900"}>{t.hero.title1}</span>
                <br />
                <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.hero.title2}
                </span>
              </h1>

              <p className={`text-lg leading-relaxed mb-8 ${subText} max-w-xl`}>
                {lang === "ar" ? (
                  <>
                    خدمات متكاملة في <strong className="text-orange-500">البرمجة</strong>، <strong className="text-blue-500">التسويق الرقمي</strong>، وتحسين نتائج جوجل <strong className="text-green-500">SEO</strong> لضمان وصول عملائك إليك قبل المنافسين وتضاعف مبيعاتك.
                  </>
                ) : (
                  <>
                    <strong className="text-orange-500">Web geliştirme</strong>, <strong className="text-blue-500">dijital pazarlama</strong> ve Google <strong className="text-green-500">SEO</strong> optimizasyonunda kapsamlı hizmetler sunarak müşterilerinizin sizi rakiplerinizden önce bulmasını sağlıyoruz.
                  </>
                )}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-base shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
                >
                  <IconWhatsapp />
                  {t.hero.cta1}
                </a>
                <button
                  onClick={() => scrollTo("services")}
                  className={`flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-base border-2 transition-all duration-300 hover:scale-105 cursor-pointer
                    ${dark ? "border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400" : "border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500"}`}
                >
                  {t.hero.cta2}
                  <IconArrowLeft />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12" data-stats-row="true">
                {[
                  { suffix: t.hero.statSuffixes[0], label: t.hero.stats[0], idx: 0, color: "text-orange-500" },
                  { suffix: t.hero.statSuffixes[1], label: t.hero.stats[1], idx: 1, color: "text-blue-500" },
                  { suffix: t.hero.statSuffixes[2], label: t.hero.stats[2], idx: 2, color: "text-green-500" },
                  { suffix: t.hero.statSuffixes[3], label: t.hero.stats[3], idx: 3, color: "text-purple-500" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl sm:text-3xl font-black ${s.color}`}>
                      {counterVals[s.idx]}{s.suffix}
                    </div>
                    <div className={`text-xs mt-1 ${subText}`}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Badges */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <div className={`col-span-2 flex items-center gap-5 p-6 rounded-2xl border ${cardBg} shadow-lg hover:scale-105 transition-all duration-300`}>
                  <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-md">✓</div>
                  <div className={`text-${isRTL ? "right" : "left"}`}>
                    <div className={`font-black text-xl ${dark ? "text-white" : "text-slate-900"}`}>{t.hero.badge1Title}</div>
                    <div className={`text-sm mt-1 ${subText}`}>{t.hero.badge1Sub}</div>
                  </div>
                </div>
                <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${cardBg} shadow-lg hover:scale-105 transition-all duration-300 text-center`}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl shadow-md">🚀</div>
                  <div>
                    <div className={`font-black text-base ${dark ? "text-white" : "text-slate-900"}`}>{t.hero.badge2Title}</div>
                    <div className={`text-xs mt-1 ${subText}`}>{t.hero.badge2Sub}</div>
                  </div>
                </div>
                <div className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${cardBg} shadow-lg hover:scale-105 transition-all duration-300 text-center`}>
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl shadow-md">💡</div>
                  <div>
                    <div className={`font-black text-base ${dark ? "text-white" : "text-slate-900"}`}>{t.hero.badge3Title}</div>
                    <div className={`text-xs mt-1 ${subText}`}>{t.hero.badge3Sub}</div>
                  </div>
                </div>
                <div className={`col-span-2 flex items-center gap-5 p-6 rounded-2xl border ${cardBg} shadow-lg hover:scale-105 transition-all duration-300`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-md">🛡️</div>
                  <div className={`text-${isRTL ? "right" : "left"}`}>
                    <div className={`font-black text-xl ${dark ? "text-white" : "text-slate-900"}`}>{t.hero.badge4Title}</div>
                    <div className={`text-sm mt-1 ${subText}`}>{t.hero.badge4Sub}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className={`py-24 relative ${dark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold mb-4">
              {t.services.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {t.services.title1}{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {t.services.title2}
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${subText}`}>{t.services.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border ${cardBg} group overflow-hidden flex flex-col`}
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="relative h-52 overflow-hidden rounded-t-3xl flex-shrink-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                  <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative z-10 flex flex-col flex-1 text-${isRTL ? "right" : "left"}`}>
                    <h3 className={`text-xl font-black mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${subText}`}>{service.description}</p>
                    <ul className="space-y-1.5 flex-1">
                      {service.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-2 ${isRTL ? "flex-row" : "flex-row"}`}>
                          <span className="text-green-500 flex-shrink-0"><IconCheck /></span>
                          <span className={`text-sm ${dark ? "text-slate-300" : "text-slate-700"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${service.color} text-white hover:shadow-lg transition-all duration-300 hover:scale-105 self-start`}
                    >
                      {t.services.orderBtn}
                      <IconArrowLeft />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section
        id="why-us"
        className="py-24 relative overflow-hidden"
        style={{
          background: dark
            ? "linear-gradient(135deg, #0f172a 0%, #0f1f3d 50%, #0f172a 100%)"
            : "linear-gradient(135deg, #f8faff 0%, #fff7ed 50%, #f8faff 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: dark ? 0.07 : 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke={dark ? "#f97316" : "#1d4ed8"} strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: dark ? "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 100%)" : "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(248,250,255,0.88) 0%, rgba(248,250,255,0.3) 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-4">
              {t.whyUs.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {t.whyUs.title1}{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {t.whyUs.title2}
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${subText}`}>{t.whyUs.desc}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "linear-gradient(180deg, transparent, #f97316 20%, #1d4ed8 80%, transparent)", opacity: 0.4 }} />

            {t.whyUs.items.map((item, i) => {
              const side = i % 2 === 0 ? "right" : "left";
              const colors = [
                "from-yellow-500 to-orange-500",
                "from-green-500 to-emerald-600",
                "from-blue-500 to-blue-700",
                "from-purple-500 to-purple-700",
                "from-orange-500 to-red-500",
                "from-cyan-500 to-blue-500",
              ];
              return (
                <div key={i} className={`relative flex items-center mb-10 lg:mb-8 ${side === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col lg:gap-0 gap-4`}>
                  <div className={`lg:w-5/12 w-full ${side === "right" ? "lg:ml-auto lg:pr-16" : "lg:mr-auto lg:pl-16"}`}>
                    <div
                      className={`group p-7 rounded-3xl border ${cardBg} hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg`}
                      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors[i]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                      <div className={`flex items-start gap-5 relative z-10 ${isRTL ? "flex-row" : "flex-row"}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <div className={`text-${isRTL ? "right" : "left"} flex-1`}>
                          <h3 className={`text-xl font-black mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                          <p className={`text-sm leading-relaxed ${subText}`}>{item.desc}</p>
                        </div>
                      </div>
                      <div className={`absolute top-1/2 -translate-y-1/2 ${side === "right" ? "-left-12" : "-right-12"} text-7xl font-black select-none hidden lg:block`}
                        style={{ background: "linear-gradient(135deg, #f97316, #1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.7 }}>
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full items-center justify-center z-10"
                    style={{ background: "linear-gradient(135deg, #f97316, #1d4ed8)" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {i < 5 && (
                    <div className="hidden lg:block absolute left-1/2 z-10 pointer-events-none"
                      style={{ top: "calc(50% + 28px)", transform: "translateX(-50%)" }}>
                      <svg width="80" height="70" viewBox="0 0 80 70" fill="none">
                        <defs>
                          <linearGradient id={`arrowGrad${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#1d4ed8" />
                          </linearGradient>
                        </defs>
                        {side === "right" ? (
                          <>
                            <path d="M40 0 Q70 35 40 70" stroke={`url(#arrowGrad${i})`} strokeWidth="3" strokeDasharray="7 4" strokeLinecap="round" opacity="0.8"/>
                            <polygon points="34,62 40,75 46,62" fill="#1d4ed8" opacity="0.8"/>
                          </>
                        ) : (
                          <>
                            <path d="M40 0 Q10 35 40 70" stroke={`url(#arrowGrad${i})`} strokeWidth="3" strokeDasharray="7 4" strokeLinecap="round" opacity="0.8"/>
                            <polygon points="34,62 40,75 46,62" fill="#1d4ed8" opacity="0.8"/>
                          </>
                        )}
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Google section */}
          <div className={`mt-12 p-8 rounded-3xl border ${cardBg} flex flex-col md:flex-row items-center gap-8 relative overflow-hidden`}
            style={{ boxShadow: dark ? "0 0 40px rgba(249,115,22,0.08)" : "0 0 40px rgba(29,78,216,0.06)" }}>
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <IconGoogle />
              </div>
            </div>
            <div className={`text-${isRTL ? "right" : "left"} flex-1`}>
              <h3 className={`text-2xl font-black mb-2 ${dark ? "text-white" : "text-slate-900"}`}>
                {t.whyUs.googleTitle}{" "}
                <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {t.whyUs.googleTitleHL}
                </span>
              </h3>
              <p className={`${subText} text-sm leading-relaxed`}>{t.whyUs.googleDesc}</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold hover:shadow-orange-500/30 hover:shadow-lg transition-all duration-300"
            >
              <IconWhatsapp />
              {t.whyUs.googleCta}
            </a>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className={`py-24 ${dark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold mb-4">
              {t.pricing.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {t.pricing.title1}{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {t.pricing.title2}
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${subText}`}>{t.pricing.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col text-${isRTL ? "right" : "left"}
                  ${plan.highlighted
                    ? "border-orange-500 bg-gradient-to-br from-orange-500/10 to-blue-600/10 shadow-2xl shadow-orange-500/20 scale-105"
                    : `${cardBg} hover:scale-105 hover:shadow-xl`
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-black px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <p className={`text-xs ${subText} mb-3`}>{plan.period}</p>
                  <div className={`flex items-end gap-2 ${isRTL ? "justify-end" : "justify-start"}`}>
                    <span className="text-4xl font-black" style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {plan.price}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${plan.highlighted ? "bg-orange-500" : "bg-green-500"}`}>
                        <IconCheck />
                      </span>
                      <span className={`text-sm ${dark ? "text-slate-300" : "text-slate-700"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold transition-all duration-300
                    ${plan.highlighted
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-orange-500/40 hover:scale-105"
                      : dark
                        ? "border-2 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400"
                        : "border-2 border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500"
                    }`}
                >
                  <IconWhatsapp />
                  {t.pricing.orderBtn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section
        id="testimonials"
        className="py-24 relative overflow-hidden"
        style={{
          background: dark
            ? "linear-gradient(135deg, #0f172a 0%, #0c1527 100%)"
            : "linear-gradient(135deg, #f1f5f9 0%, #fff7ed 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-4">
              {t.testimonials.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {t.testimonials.title1}{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {t.testimonials.title2}
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t_item, i) => (
              <div key={i} className={`p-7 rounded-3xl border ${cardBg} hover:scale-105 transition-all duration-300 text-${isRTL ? "right" : "left"}`}>
                <div className={`flex gap-1 mb-4 ${isRTL ? "justify-end" : "justify-start"}`}>
                  {Array.from({ length: t_item.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400"><IconStar /></span>
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-6 italic ${subText}`}>"{t_item.text}"</p>
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse justify-end" : "flex-row"}`}>
                  <img
                    src={t_item.image}
                    alt={t_item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 flex-shrink-0"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 items-center justify-center text-white font-black text-lg flex-shrink-0 border-2 border-orange-400 hidden">
                    {t_item.name[0]}
                  </div>
                  <div className={`text-${isRTL ? "right" : "left"}`}>
                    <div className={`font-bold text-sm ${dark ? "text-white" : "text-slate-900"}`}>{t_item.name}</div>
                    <div className={`text-xs ${subText}`}>{t_item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className={`py-24 ${dark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-bold mb-4">
              {t.contact.badge}
            </span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
              {t.contact.title1}{" "}
              <span style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {t.contact.title2}
              </span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${subText}`}>{t.contact.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className={`p-7 rounded-3xl border ${cardBg} flex flex-col items-center text-center gap-4 hover:scale-105 transition-all duration-300 hover:border-green-500 group`}>
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <IconWhatsapp />
              </div>
              <div>
                <div className={`font-black mb-1 ${dark ? "text-white" : "text-slate-900"}`}>{t.contact.whatsapp}</div>
                <div className={`text-sm ${subText}`} dir="ltr">{WHATSAPP_NUMBER}</div>
              </div>
            </a>

            <a href={`tel:${PHONE}`}
              className={`p-7 rounded-3xl border ${cardBg} flex flex-col items-center text-center gap-4 hover:scale-105 transition-all duration-300 hover:border-blue-500 group`}>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <IconPhone />
              </div>
              <div>
                <div className={`font-black mb-1 ${dark ? "text-white" : "text-slate-900"}`}>{t.contact.phone}</div>
                <div className={`text-sm ${subText}`} dir="ltr">{PHONE}</div>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`}
              className={`p-7 rounded-3xl border ${cardBg} flex flex-col items-center text-center gap-4 hover:scale-105 transition-all duration-300 hover:border-orange-500 group`}>
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <IconMail />
              </div>
              <div>
                <div className={`font-black mb-1 ${dark ? "text-white" : "text-slate-900"}`}>{t.contact.email}</div>
                <div className={`text-sm ${subText}`}>{EMAIL}</div>
              </div>
            </a>
          </div>

          {/* Big CTA */}
          <div className="relative rounded-3xl overflow-hidden p-10 text-center"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #1d4ed8 100%)" }}>
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{ background: "repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(255,255,255,0.03) 20px,rgba(255,255,255,0.03) 40px)" }} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4">{t.contact.ctaTitle}</h3>
              <p className="text-white/80 mb-8 text-lg">{t.contact.ctaDesc}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-orange-600 rounded-2xl font-black text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
              >
                <IconWhatsapp />
                {t.contact.ctaBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={`py-10 border-t ${dark ? "bg-slate-950 border-slate-800" : "bg-slate-100 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/imges/Logo.png" alt="Web Master" className="h-10 w-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              <span className="text-lg font-black" style={{ background: "linear-gradient(90deg,#f97316,#1d4ed8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Web Master
              </span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-semibold transition-colors cursor-pointer ${subText} hover:text-orange-500`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all">
                <IconWhatsapp />
              </a>
              <a href={`tel:${PHONE}`}
                className="p-2 rounded-xl bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                <IconPhone />
              </a>
              <a href={`mailto:${EMAIL}`}
                className="p-2 rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
                <IconMail />
              </a>
            </div>
          </div>

          <div className={`text-center mt-8 text-sm ${subText}`}>
            {t.footer.copy}
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-400 transition-colors duration-300"
        title="WhatsApp"
        style={{ animation: "whatsappPulse 2s infinite", boxShadow: "0 0 0 0 rgba(37,211,102,0.7)" }}
      >
        <IconWhatsapp />
      </a>

      <style>{`
        @keyframes whatsappPulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </div>
  );
}
