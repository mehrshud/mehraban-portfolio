import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  GraduationCap,
  Award,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Globe,
  Users,
  Brain,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Copy,
  Quote,
  Heart,
  Languages,
  Download,
  FileDown,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Coffee,
  BookMarked,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Send,
  Sun,
  Moon,
  MessageSquare,
  School,
  Sparkles,
  Check,
  FileType,
  Rocket,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */

const CONFIG = {
  name: "Mehraban Hamavandy",
  title: "PhD Education Professional",
  subtitle: "Specialist in EAL, SEND, Behaviour Support & Translation",
  image: "/image.png",
  contact: {
    email: "hamavandy.me@gmail.com",
    phone: "+44 7575 948458",
    whatsapp: "+447575948458",
    linkedin: "https://www.linkedin.com/in/mehraban-hamavandy-9753b161",
    scholar: "https://scholar.google.com/citations?user=z-FLxlEAAAAJ&hl=en",
    location: "London, United Kingdom",
  },
  lms: {
    url: "https://hamavandy-lms.com",
    name: "Hamavandy LMS",
  },
  resumes: [
    {
      id: "esol",
      title: "ESOL Teacher CV",
      description:
        "Comprehensive CV for ESOL & EAL teaching positions in UK schools",
      format: "PDF",
      icon: BookOpen,
      color: "emerald",
      fileUrl: "/Mehraban_Hamavandy_ESOL_CV.pdf",
      highlights: ["17+ years experience", "PhD TESL", "UK qualifications"],
    },
    {
      id: "ta",
      title: "Teaching Assistant CV",
      description: "Focused on EAL support, SEND & behaviour management",
      format: "DOCX",
      icon: Users,
      color: "blue",
      fileUrl: "/Mehraban-Hamavandy-TA-CV.docx",
      highlights: ["SEND support", "Safeguarding Level 2", "Behaviour support"],
    },
    {
      id: "research",
      title: "Academic Research CV",
      description: "Research profile with publications & academic experience",
      format: "PDF",
      icon: GraduationCap,
      color: "purple",
      fileUrl: "/Mehraban-Hamavandy-Research-CV.pdf",
      highlights: [
        "50+ publications",
        "Assessment expert",
        "University lecturer",
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                     SEO                                    */
/* -------------------------------------------------------------------------- */

const SEO = () => {
  useEffect(() => {
    // Enhanced meta tags
    const title =
      "Dr Mehraban Hamavandy | PhD TESL | EAL, ESOL & IELTS Teacher London";
    const description =
      "Dr Mehraban Hamavandy - PhD qualified ESOL/EAL teacher in London. 17+ years experience. IELTS tutor, Farsi/English interpreter, SEND support. Available for UK schools. دکتر مهربان هماوندی - معلم آیلتس در لندن";
    const keywords = [
      // English keywords
      "Mehraban Hamavandy",
      "Dr Mehraban Hamavandy",
      "PhD TESL London",
      "EAL teacher London",
      "ESOL tutor London",
      "IELTS teacher London",
      "English teacher London",
      "Farsi English teacher",
      "Kurdish English teacher",
      "SEND teaching assistant London",
      "behaviour support teacher",
      "Farsi English interpreter London",
      "Persian English translator",
      "English tutor for migrants",
      "asylum seeker English teacher",
      "academic English lecturer",
      "language assessment expert",
      // Persian keywords
      "دکتر مهربان هماوندی",
      "مدرس آیلتس لندن",
      "معلم زبان انگلیسی لندن",
      "مدرس ESOL لندن",
      "مترجم فارسی انگلیسی",
      "مترجم کردی انگلیسی",
      "آموزش زبان انگلیسی در لندن",
      "کلاس آیلتس لندن",
      "معلم EAL بریتانیا",
      "مدرس زبان برای مهاجران",
    ].join(", ");

    document.title = title;

    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "language", content: "en-GB" },
      { name: "author", content: "Dr Mehraban Hamavandy" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
      { name: "theme-color", content: "#10b981" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "GB-LND" },
      { name: "geo.placename", content: "London" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:locale:alternate", content: "fa_IR" },
      { property: "og:site_name", content: "Dr Mehraban Hamavandy Portfolio" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:title", content: title },
      { property: "twitter:description", content: description },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? "name" : "property";
      const value = name || property;
      let tag = document.querySelector(`meta[${attr}="${value}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Enhanced JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mehraban Hamavandy",
      alternateName: ["Dr Mehraban Hamavandy", "مهربان هماوندی"],
      jobTitle: "PhD Education Professional, ESOL/EAL Teacher & IELTS Tutor",
      description:
        "Experienced ESOL/EAL teacher and IELTS tutor with PhD in TESL, specializing in supporting multilingual learners in UK schools",
      url: window.location.href,
      image: CONFIG.image,
      email: CONFIG.contact.email,
      telephone: CONFIG.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      knowsLanguage: [
        { "@type": "Language", name: "English", alternateName: "en" },
        { "@type": "Language", name: "Persian", alternateName: "fa" },
        { "@type": "Language", name: "Kurdish", alternateName: "ku" },
        { "@type": "Language", name: "Arabic", alternateName: "ar" },
        { "@type": "Language", name: "Turkish", alternateName: "tr" },
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Tarbiat Modares University",
          sameAs: "https://www.modares.ac.ir/eng",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          educationalLevel: "Doctoral",
          name: "PhD in Teaching English as a Second Language",
        },
      ],
      sameAs: [CONFIG.contact.linkedin, CONFIG.contact.scholar],
      worksFor: {
        "@type": "EducationalOrganization",
        name: "Freelance ESOL & IELTS Tutor",
      },
    };

    const existingScript = document.getElementById("person-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "person-schema";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, []);

  return null;
};

/* -------------------------------------------------------------------------- */
/*                                    Hooks                                   */
/* -------------------------------------------------------------------------- */

const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: "80px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
};

const useParallax = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return offset;
};

const useMouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return position;
};

/* -------------------------------------------------------------------------- */
/*                              UI Helper Components                          */
/* -------------------------------------------------------------------------- */

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const update = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const pointer =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(pointer);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: pos.x,
          top: pos.y,
          width: isPointer ? 36 : 20,
          height: isPointer ? 36 : 20,
        }}
      />
      <div className="custom-cursor-dot" style={{ left: pos.x, top: pos.y }} />
    </>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <header
      ref={ref}
      className={`mb-16 md:mb-24 text-center transition-all duration-1000 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex items-center gap-3 mb-5 md:mb-6">
        {Icon && (
          <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/40 shadow-md">
            <Icon className="text-emerald-500" size={26} />
          </div>
        )}
      </div>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6 relative inline-block tracking-tight">
        {title}
        <span className="absolute -bottom-3 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 md:mt-8 font-light px-3">
          {subtitle}
        </p>
      )}
    </header>
  );
};

const GlassCard = ({ children, className = "", delay = 0, hover = true }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "relative overflow-hidden rounded-3xl p-6 md:p-8 backdrop-blur-xl",
        "bg-white/70 dark:bg-white/[0.03]",
        "border border-emerald-100/60 dark:border-white/[0.06]",
        "shadow-[0_18px_45px_rgba(15,23,42,0.15)]",
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        hover &&
          "hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(16,185,129,0.35)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
};

const SkillBadge = ({ label, icon: Icon, color = "emerald" }) => {
  const palette = {
    emerald:
      "from-emerald-500/15 to-teal-500/15 border-emerald-400/60 text-emerald-700 dark:text-emerald-200",
    blue: "from-sky-500/15 to-blue-500/15 border-sky-400/60 text-sky-700 dark:text-sky-200",
    purple:
      "from-purple-500/15 to-fuchsia-500/15 border-purple-400/60 text-purple-700 dark:text-purple-200",
    amber:
      "from-amber-500/15 to-orange-500/15 border-amber-400/60 text-amber-700 dark:text-amber-200",
  };

  return (
    <div
      className={`group flex items-center gap-2 bg-gradient-to-r ${palette[color]} backdrop-blur-xl border px-4 py-2.5 rounded-2xl text-xs md:text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default shadow-md`}
    >
      {Icon && (
        <Icon
          size={16}
          className="group-hover:rotate-12 transition-transform"
        />
      )}
      {label}
    </div>
  );
};

const StatCard = ({ number, label, icon: Icon, delay = 0 }) => {
  const [ref, visible] = useScrollReveal();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const target = parseInt(number, 10);
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, number]);

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative group h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="relative h-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/60 border border-white/70 dark:border-white/10 rounded-3xl px-5 py-6 md:px-8 md:py-8 flex flex-col items-center justify-center gap-2">
          <Icon
            className="text-emerald-500 mb-1"
            size={32}
            aria-hidden="true"
          />
          <div className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
            {count}
            <span className="text-emerald-500">+</span>
          </div>
          <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium text-center">
            {label}
          </div>
        </div>
      </div>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/*                            CV Download Component                          */
/* -------------------------------------------------------------------------- */

const CVDownloadCard = ({ cv, index }) => {
  const [ref, visible] = useScrollReveal();
  const [isDownloading, setIsDownloading] = useState(false);

  const colorMap = {
    emerald: {
      bg: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-400/60",
      text: "text-emerald-600 dark:text-emerald-300",
      hover: "hover:shadow-[0_24px_60px_rgba(16,185,129,0.4)]",
      glow: "from-emerald-500/15 to-teal-500/15",
    },
    blue: {
      bg: "from-sky-500/20 to-blue-500/20",
      border: "border-sky-400/60",
      text: "text-sky-600 dark:text-sky-300",
      hover: "hover:shadow-[0_24px_60px_rgba(14,165,233,0.4)]",
      glow: "from-sky-500/15 to-blue-500/15",
    },
    purple: {
      bg: "from-purple-500/20 to-fuchsia-500/20",
      border: "border-purple-400/60",
      text: "text-purple-600 dark:text-purple-300",
      hover: "hover:shadow-[0_24px_60px_rgba(168,85,247,0.4)]",
      glow: "from-purple-500/15 to-fuchsia-500/15",
    },
  };

  const colors = colorMap[cv.color];

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cv.fileUrl;
      link.download = cv.fileUrl.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 800);
  };

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative group h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
        />
        <div
          className={`relative h-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border-2 ${colors.border} rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-500 ${colors.hover} group-hover:-translate-y-2`}
        >
          {/* Icon & Format Badge */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} shadow-lg`}
            >
              <cv.icon className={colors.text} size={32} aria-hidden="true" />
            </div>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${colors.text} bg-gradient-to-r ${colors.bg} border ${colors.border}`}
            >
              {cv.format}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
            {cv.title}
          </h3>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
            {cv.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {cv.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-200"
              >
                <Check size={16} className={colors.text} aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full group/btn inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r ${colors.bg} border-2 ${colors.border} ${colors.text} font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label={`Download ${cv.title}`}
          >
            {isDownloading ? (
              <>
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download
                  size={20}
                  className="group-hover/btn:animate-bounce"
                />
                <span>Download CV</span>
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Main Portfolio Component                        */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const parallaxOffset = useParallax();
  const mousePosition = useMouseGlow();

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2600);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast("✓ Copied to clipboard");
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 88;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(stored ? stored === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Animate theme transition
    root.style.transition = "background-color 0.5s ease, color 0.5s ease";
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [
        "home",
        "about",
        "stats",
        "experience",
        "publications",
        "cv-download",
        "lms",
        "contact",
      ];
      const scrollPos = window.scrollY + 180;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isDark ? "dark min-h-screen" : "min-h-screen"}>
      <SEO />
      <CustomCursor />

      <div
        className="bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-200 font-body overflow-x-hidden relative"
        id="top"
      >
        {/* Mouse glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0 transition duration-300"
          style={{
            background: `radial-gradient(520px at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.12), transparent 75%)`,
          }}
        />

        {/* Background effects */}
        <div
          className="fixed inset-0 z-0 opacity-70 dark:opacity-30"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
          <div
            className="absolute -top-40 right-[-25%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-emerald-500/25 via-sky-500/20 to-indigo-500/25 blur-[120px]"
            style={{ transform: `translateY(${parallaxOffset * 0.12}px)` }}
          />
          <div
            className="absolute bottom-[-30%] left-[-25%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-red-500/10 via-blue-500/12 to-white/0 blur-[120px]"
            style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
          />
        </div>

        {/* Toast */}
        <div
          role="alert"
          aria-live="polite"
          className={`fixed top-24 right-5 z-[70] transition-all duration-500 ${
            toast.show
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="backdrop-blur-xl bg-emerald-500/95 text-white px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-2xl flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium border border-emerald-300/50">
            <CheckCircle2 size={20} />
            {toast.message}
          </div>
        </div>

        {/* NAVBAR */}
        <nav
          className={`fixed w-full z-40 top-0 transition-all duration-500 ${
            scrolled
              ? "bg-white/85 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-slate-200/80 dark:border-slate-800 shadow-lg"
              : "bg-transparent"
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl"
              aria-label="Go to home section"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-slate-900 font-bold shadow-md">
                  <BookOpen size={24} />
                </div>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm md:text-base font-display font-bold text-slate-900 dark:text-white leading-tight">
                  Dr. Hamavandy
                </p>
                <p className="text-[11px] md:text-xs text-emerald-600 dark:text-emerald-300 font-semibold tracking-wide">
                  PhD Education Professional
                </p>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {[
                "Home",
                "About",
                "Experience",
                "CV Download",
                "LMS",
                "Contact",
              ].map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-all ${
                      activeSection === id
                        ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-300 border border-emerald-400/60"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

              {/* Theme toggle */}
              <button
                onClick={() => setIsDark((d) => !d)}
                className="ml-4 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={18}
                    className={`absolute inset-0 text-amber-500 transition-all duration-500 ${
                      isDark
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <Moon
                    size={18}
                    className={`absolute inset-0 text-slate-400 transition-all duration-500 ${
                      isDark
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </button>

              {/* LinkedIn */}
              <a
                href={CONFIG.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-sky-600 hover:bg-sky-700 text-white transition-all flex items-center justify-center"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Mobile right controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsDark((d) => !d)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-white/5"
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                <div className="relative w-5 h-5">
                  <Sun
                    size={18}
                    className={`absolute inset-0 text-amber-500 transition-all duration-500 ${
                      isDark
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <Moon
                    size={18}
                    className={`absolute inset-0 text-slate-400 transition-all duration-500 ${
                      isDark
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="p-2 text-slate-700 dark:text-slate-200"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-400 border-t border-slate-200/70 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {[
                "Home",
                "About",
                "Experience",
                "CV Download",
                "LMS",
                "Contact",
              ].map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left text-sm font-medium text-slate-700 dark:text-slate-200 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 px-3"
                  >
                    {item}
                  </button>
                );
              })}
              <a
                href={CONFIG.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-600 text-white text-sm font-semibold"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="relative min-h-[92vh] flex items-center pt-28 md:pt-32 pb-20 md:pb-32"
        >
          <div
            className="absolute top-16 right-[12%] w-40 md:w-52 h-40 md:h-52 rounded-full border border-emerald-400/35 shadow-[0_0_45px_rgba(16,185,129,0.6)]"
            style={{ transform: `translateY(${parallaxOffset * 0.08}px)` }}
            aria-hidden="true"
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1 space-y-7 md:space-y-8">
                {/* Availability pill */}
                <div className="inline-flex flex-col gap-2">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 text-white px-3 py-2 shadow-md max-w-max">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center">
                      <BookOpen size={18} />
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs font-display font-semibold">
                        Dr. Hamavandy
                      </p>
                      <p className="text-[11px] text-emerald-300">
                        British-based English Education
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-4 py-1.5 text-[11px] md:text-xs font-semibold tracking-wide uppercase shadow-sm">
                    <Zap size={14} className="animate-pulse" />
                    Available for opportunities in UK schools & colleges
                  </div>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
                    PhD-Qualified English
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-400 animate-gradient">
                      Educator in London
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed">
                    Supporting{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      EAL, ESOL & SEND learners
                    </span>{" "}
                    across British schools, with expertise in{" "}
                    <span className="font-semibold">
                      behaviour support, safeguarding, and IELTS preparation
                    </span>{" "}
                    for migrants and asylum seekers.
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm md:text-base font-semibold shadow-[0_18px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_22px_55px_rgba(16,185,129,0.6)] hover:-translate-y-[2px] transition-all"
                  >
                    Get In Touch
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button
                    onClick={() => scrollToSection("cv-download")}
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-2xl border border-slate-300/80 dark:border-slate-600 bg-white/80 dark:bg-white/5 text-sm md:text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    Download CV
                  </button>
                </div>

                {/* Hero meta row */}
                <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-3 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>London, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-emerald-500" />
                    <span>Eligible to work in the UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages size={16} className="text-emerald-500" />
                    <span>English · فارسی · Arabic · Turkish</span>
                  </div>
                </div>
              </div>

              {/* Image column */}
              <div className="order-1 lg:order-2 relative flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/35 via-sky-500/25 to-emerald-400/35 rounded-full blur-3xl animate-pulse-glow" />
                  <div className="absolute -inset-4 border-2 border-emerald-400/40 rounded-full animate-spin-very-slow" />
                  <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-[6px] border-white/80 dark:border-emerald-500/40 shadow-[0_40px_80px_rgba(15,23,42,0.65)] bg-slate-900">
                    <img
                      src={CONFIG.image}
                      alt="Dr Mehraban Hamavandy - PhD qualified ESOL and EAL teacher in London"
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/420x420/0f172a/10b981?text=MH";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  {/* UK / English mini-badges */}
                  <div className="absolute -bottom-2 -left-2 sm:-left-4 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-badge">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      UK
                    </div>
                    <div className="text-xs leading-tight">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        British English
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Curriculum & Exams
                      </p>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-3 sm:-right-4 backdrop-blur-xl bg-slate-900/95 text-white border border-emerald-500/50 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-badge-delayed">
                    <GraduationCap size={20} className="text-emerald-300" />
                    <div className="text-xs leading-tight">
                      <p className="font-semibold">PhD TESL</p>
                      <p className="text-[11px] text-emerald-300/90">
                        IELTS 8.0 · UK ENIC L8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="mt-10 md:mt-12 flex justify-center">
              <ChevronDown
                className="w-7 h-7 text-slate-400 animate-bounce-slow"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="stats" className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <StatCard
                number="17"
                label="Years of teaching & research"
                icon={TrendingUp}
              />
              <StatCard
                number="50"
                label="Academic & professional publications"
                icon={BookMarked}
                delay={80}
              />
              <StatCard
                number="1000"
                label="Learners supported across levels"
                icon={Users}
                delay={160}
              />
              <StatCard
                number="5"
                label="Languages for teaching & interpreting"
                icon={Languages}
                delay={240}
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-20 md:py-28 bg-gradient-to-b from-white/60 to-slate-100 dark:from-slate-950 dark:to-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="About Me"
              subtitle="Bridging British academic standards with warm, culturally sensitive support for multilingual learners in UK schools and colleges."
              icon={Lightbulb}
            />
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="space-y-8 md:space-y-10">
                <GlassCard className="border-l-4 border-l-emerald-500">
                  <div className="absolute top-6 right-6 opacity-20 hidden md:block">
                    <Quote size={60} className="text-emerald-500" />
                  </div>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
                    I completed my{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      PhD in Teaching English as a Second Language (TESL)
                    </span>{" "}
                    and have taught English, assessment, and academic skills for
                    over <strong>17 years</strong> in Iran and the UK. In
                    London, I now focus on{" "}
                    <span className="font-semibold">
                      EAL, ESOL, SEND support and behaviour management
                    </span>{" "}
                    within British school settings.
                  </p>
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                    My goal is to{" "}
                    <span className="text-emerald-600 dark:text-emerald-300 font-semibold">
                      help newly arrived pupils, refugees, and asylum seekers
                      thrive in English
                    </span>{" "}
                    while feeling safe, respected, and confident within UK
                    classrooms.
                  </p>
                </GlassCard>

                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                    <Target className="text-emerald-500" />
                    Core Specialisations
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    <SkillBadge
                      label="EAL & ESOL (UK schools/colleges)"
                      icon={Languages}
                      color="emerald"
                    />
                    <SkillBadge
                      label="SEND support & inclusion"
                      icon={Heart}
                      color="blue"
                    />
                    <SkillBadge
                      label="Behaviour support & de-escalation"
                      icon={Brain}
                      color="purple"
                    />
                    <SkillBadge
                      label="Safeguarding (Level 2, UK)"
                      icon={Shield}
                      color="amber"
                    />
                    <SkillBadge
                      label="Farsi · Kurdish · English interpreting"
                      icon={Globe}
                      color="emerald"
                    />
                    <SkillBadge
                      label="IELTS & academic writing"
                      icon={FileText}
                      color="blue"
                    />
                  </div>
                </div>

                <GlassCard>
                  <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                    <Coffee className="text-emerald-500" />
                    Beyond the Classroom
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                    I enjoy sharing{" "}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-300">
                      Persian culture
                    </span>{" "}
                    through music – especially the{" "}
                    <span className="font-semibold">Santoor</span> – and keep
                    active through football and swimming around London&apos;s
                    parks and sports centres.
                  </p>
                </GlassCard>
              </div>

              {/* Education */}
              <div className="space-y-5 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6 flex items-center gap-3">
                  <GraduationCap className="text-emerald-500" />
                  Education & UK-Relevant Qualifications
                </h3>
                {[
                  {
                    title: "PhD in TESL",
                    org: "Tarbiat Modares University",
                    sub: "UK ENIC Level 8 (PhD equivalent)",
                    date: "2014",
                    active: true,
                  },
                  {
                    title: "MA in TESL",
                    org: "Tarbiat Modares University",
                    sub: "UK ENIC Level 7 (Master's equivalent)",
                    date: "2010",
                    active: true,
                  },
                  {
                    title: "NCFE CACHE Level 2 Safeguarding & Prevent",
                    org: "Aspire Education Academy (UK)",
                    sub: "Child protection & Prevent Duty",
                    date: "2025",
                    active: false,
                  },
                  {
                    title: "NCFE CACHE Level 2 Behaviour Support",
                    org: "Aspire Education Academy (UK)",
                    sub: "Positive behaviour & de-escalation",
                    date: "2025",
                    active: false,
                  },
                  {
                    title: "IELTS 8.0 Overall",
                    org: "British Council",
                    sub: "Listening 9.0 · Reading 8.5",
                    date: "Current",
                    active: false,
                  },
                ].map((edu, i) => (
                  <GlassCard
                    key={edu.title}
                    className="!p-5 md:!p-6"
                    delay={i * 100}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 w-3.5 h-3.5 rounded-full ${
                          edu.active
                            ? "bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.9)] animate-pulse"
                            : "bg-slate-400"
                        }`}
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white mb-1">
                          {edu.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                          {edu.org}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          {edu.sub}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 border border-emerald-400/40 bg-emerald-50/80 dark:bg-emerald-500/10 px-2.5 py-1 rounded-xl">
                        {edu.date}
                      </span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE - keeping original for space */}
        <section id="experience" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Professional Journey"
              subtitle="From university lecturer to London-based EAL, ESOL and interpreting support – always centred on learners' voices."
              icon={Briefcase}
            />

            <div className="relative max-w-5xl mx-auto">
              <div
                className="absolute left-6 md:left-1/2 top-2 bottom-4 w-px bg-gradient-to-b from-emerald-500/70 via-slate-300/60 dark:via-slate-700 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              {[
                {
                  role: "Freelance Interpreter",
                  org: "Absolute Translation & Interpretation LLC (UK)",
                  date: "May 2025 – Present",
                  desc: "Providing confidential community interpreting (Farsi–English–Kurdish) across medical, legal and educational settings in the UK.",
                  icon: Globe,
                  skills: [
                    "Medical & legal interpreting",
                    "Terminology management",
                    "Cultural mediation",
                  ],
                },
                {
                  role: "Volunteer Interpreter / Translator",
                  org: "Napier Friends Charity, UK",
                  date: "2024 – Present",
                  desc: "Supporting asylum seekers with Farsi–English communication during GP appointments, hospital visits, legal meetings and home office interviews.",
                  icon: Heart,
                  skills: [
                    "Trauma-informed communication",
                    "Advocacy & safeguarding",
                    "Community outreach",
                  ],
                },
                {
                  role: "Freelance ESOL Tutor",
                  org: "London (Private ESOL & IELTS)",
                  date: "2023 – Present",
                  desc: "Delivering one-to-one and small-group ESOL and IELTS tuition focused on functional English, UK life skills and exam preparation.",
                  icon: Users,
                  skills: [
                    "ESOL & functional skills",
                    "IELTS & academic writing",
                    "Individual learning plans",
                  ],
                },
                {
                  role: "Manager & Director of Studies",
                  org: "Language Academy, Yazd University",
                  date: "2017 – 2020",
                  desc: "Established and led a university language centre. Recruited 15+ teachers, designed ESP curricula and oversaw assessment for 500+ learners per year.",
                  icon: Briefcase,
                  skills: [
                    "Team leadership",
                    "Curriculum design (ESP/EAP)",
                    "Quality assurance",
                  ],
                },
                {
                  role: "Assistant Professor of TESL",
                  org: "Yazd University",
                  date: "2015 – 2023",
                  desc: "Taught Second Language Acquisition, Testing & Assessment and Research Methodology; supervised over 20 postgraduate theses.",
                  icon: GraduationCap,
                  skills: [
                    "Higher-education teaching",
                    "Language testing & assessment",
                    "Research supervision",
                  ],
                },
              ].map((job, index) => {
                const [ref, visible] = useScrollReveal();
                const leftSide = index % 2 === 0;
                return (
                  <article
                    key={job.role}
                    ref={ref}
                    className={`relative mb-16 md:mb-20 flex items-start ${
                      leftSide ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Icon node */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-md">
                        <job.icon className="text-emerald-500" size={22} />
                      </div>
                    </div>

                    <div
                      className={`ml-16 md:ml-0 md:w-[48%] transition-all duration-700 ${
                        visible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <GlassCard className="group">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300/70 dark:border-emerald-500/40 px-3 py-1 rounded-full">
                            {job.date}
                          </span>
                          <ExternalLink
                            size={16}
                            className="text-slate-400 group-hover:text-emerald-500 transition-colors"
                          />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-semibold text-slate-900 dark:text-white mb-1">
                          {job.role}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-300 mb-3 flex items-center gap-2">
                          <MapPin size={14} />
                          {job.org}
                        </p>
                        <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                          {job.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section
          id="publications"
          className="py-20 md:py-28 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Research & Publications"
              subtitle="Researching language assessment, pedagogy and IELTS preparation – with publications in English-language teaching and testing."
              icon={BookOpen}
            />

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  title: "IELTS Preparation Guide",
                  type: "Book",
                  sub: "Comprehensive preparation for all four IELTS skills, rooted in authentic test data and learner corpora.",
                  year: "2022",
                  icon: BookOpen,
                },
                {
                  title: "Language Test Validation",
                  type: "Journal Article",
                  sub: "Exploring validity, reliability and fairness in large-scale language assessments.",
                  year: "2021",
                  icon: FileText,
                },
                {
                  title: "Pedagogical Grammar & EAP",
                  type: "Research Paper",
                  sub: "Research-informed approaches to teaching grammar in academic English courses.",
                  year: "2020",
                  icon: Award,
                },
              ].map((pub, i) => (
                <GlassCard key={pub.title} delay={i * 120}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/15 to-sky-500/15 border border-emerald-300/70">
                      <pub.icon
                        size={24}
                        className="text-emerald-600 dark:text-emerald-300"
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                      {pub.year}
                    </span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-300/70 dark:border-emerald-500/40 mb-3">
                    {pub.type}
                  </span>
                  <h3 className="text-base md:text-lg font-display font-semibold text-slate-900 dark:text-white mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {pub.sub}
                  </p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center">
              <a
                href={CONFIG.contact.scholar}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-white/5 text-sm md:text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <BookMarked className="text-emerald-500" size={18} />
                View full research profile on Google Scholar
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* CV DOWNLOAD SECTION */}
        <section
          id="cv-download"
          className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Download My CV"
              subtitle="Choose the CV format that best matches your needs - tailored for different roles in UK education"
              icon={FileDown}
            />

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {CONFIG.resumes.map((cv, index) => (
                <CVDownloadCard key={cv.id} cv={cv} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <GlassCard className="!p-6 md:!p-8 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/60 shrink-0">
                    <Sparkles
                      className="text-amber-600 dark:text-amber-300"
                      size={24}
                    />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                      Need a Custom Version?
                    </h3>
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 mb-4">
                      I can provide a tailored CV highlighting specific skills
                      for your role requirements. All CVs include UK references,
                      DBS status, and detailed qualification breakdowns.
                    </p>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300 hover:gap-3 transition-all"
                    >
                      Contact me for a custom CV
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* HAMAVANDY LMS SECTION */}
        <section id="lms" className="py-20 md:py-28 relative overflow-hidden">
          {/* Animated background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-purple-500/10 dark:from-emerald-500/5 dark:via-sky-500/5 dark:to-purple-500/5"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(16,185,129,0.15) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 mb-5 md:mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-2xl border border-emerald-500/40 shadow-md">
                  <School className="text-emerald-500" size={26} />
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-4 md:mb-6 relative inline-block tracking-tight">
                Hamavandy LMS
                <span className="absolute -bottom-3 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0 rounded-full"></span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 md:mt-8 font-light px-3">
                A comprehensive Learning Management System designed for modern
                English language learners
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
              {/* Features */}
              <div className="space-y-6">
                <GlassCard className="group hover:border-emerald-400/70">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/60 shrink-0">
                      <Rocket
                        className="text-emerald-600 dark:text-emerald-300"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                        Interactive Learning Experience
                      </h3>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Engaging lessons, quizzes, and multimedia content
                        designed to accelerate your English proficiency
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="group hover:border-sky-400/70">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-400/60 shrink-0">
                      <Target
                        className="text-sky-600 dark:text-sky-300"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                        IELTS Preparation
                      </h3>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Specialized IELTS courses with practice tests, scoring
                        feedback, and exam strategies
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="group hover:border-purple-400/70">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/60 shrink-0">
                      <Users
                        className="text-purple-600 dark:text-purple-300"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                        Expert-Led Instruction
                      </h3>
                      <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                        Learn from PhD-qualified educators with decades of
                        teaching experience
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* CTA Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-3xl blur-2xl animate-pulse-glow" />
                <GlassCard className="relative border-2 border-emerald-400/60 !p-8 md:!p-12 text-center">
                  <div className="inline-flex p-5 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-sky-500/30 mb-6 border-2 border-emerald-400/60">
                    <School
                      size={48}
                      className="text-emerald-600 dark:text-emerald-300"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                    Start Learning Today
                  </h3>

                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                    Join thousands of students improving their English with
                    Hamavandy LMS. Flexible learning at your own pace.
                  </p>

                  <div className="space-y-4">
                    <a
                      href={CONFIG.lms.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/lms w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-base md:text-lg font-bold shadow-[0_20px_50px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.7)] hover:-translate-y-1 transition-all"
                    >
                      <Rocket
                        size={22}
                        className="group-hover/lms:rotate-12 transition-transform"
                      />
                      Visit Hamavandy LMS
                      <ExternalLink
                        size={20}
                        className="group-hover/lms:translate-x-1 group-hover/lms:-translate-y-1 transition-transform"
                      />
                    </a>

                    <div className="flex items-center justify-center gap-6 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" />
                        <span>Free Trial</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" />
                        <span>24/7 Access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" />
                        <span>Expert Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      "Transform your English skills with a platform built by
                      educators, for learners"
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-gradient-to-b from-slate-100/80 to-slate-200/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Let's Connect"
              subtitle="Open to roles in UK schools, colleges, ESOL provision, charities and translation / interpreting."
              icon={MessageCircle}
            />
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
              {/* Contact tiles */}
              <div className="space-y-5 md:space-y-6">
                <button
                  onClick={() => copyToClipboard(CONFIG.contact.email)}
                  className="w-full group text-left"
                >
                  <GlassCard className="!p-5 md:!p-6 group-hover:border-emerald-400/70">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center border border-emerald-400/60">
                          <Mail
                            size={24}
                            className="text-emerald-600 dark:text-emerald-300"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">
                          Email
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white truncate">
                          {CONFIG.contact.email}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          Click to copy – replies within 1–2 business days
                        </p>
                      </div>
                      <Copy
                        size={18}
                        className="text-slate-400 group-hover:text-emerald-500 transition-colors"
                      />
                    </div>
                  </GlassCard>
                </button>

                <button
                  onClick={() => copyToClipboard(CONFIG.contact.phone)}
                  className="w-full group text-left"
                >
                  <GlassCard className="!p-5 md:!p-6 group-hover:border-sky-400/70">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center border border-sky-400/60">
                          <Phone size={24} className="text-sky-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">
                          UK Mobile
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                          {CONFIG.contact.phone}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          Click to copy – calls or SMS / WhatsApp
                        </p>
                      </div>
                      <Copy
                        size={18}
                        className="text-slate-400 group-hover:text-sky-500 transition-colors"
                      />
                    </div>
                  </GlassCard>
                </button>

                <a
                  href={`https://wa.me/${CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full group"
                >
                  <GlassCard className="!p-5 md:!p-6 group-hover:border-green-400/70">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-[#25D366]/25 blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#25D366]/25 flex items-center justify-center border border-[#25D366]/70">
                          <MessageSquare size={24} className="text-[#25D366]" />
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">
                          WhatsApp
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                          Message on WhatsApp
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                          Ideal for quick questions in فارسی, English or کوردی
                        </p>
                      </div>
                      <ExternalLink
                        size={18}
                        className="text-slate-400 group-hover:text-[#25D366] transition-colors"
                      />
                    </div>
                  </GlassCard>
                </a>

                <a
                  href={CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full group"
                >
                  <GlassCard className="!p-5 md:!p-6 group-hover:border-[#0077b5]/80">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-[#0077b5]/25 blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#0077b5]/25 flex items-center justify-center border border-[#0077b5]/70">
                          <Linkedin size={24} className="text-[#0077b5]" />
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">
                          LinkedIn
                        </p>
                        <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                          Professional profile & recommendations
                        </p>
                      </div>
                      <ExternalLink
                        size={18}
                        className="text-slate-400 group-hover:text-[#0077b5] transition-colors"
                      />
                    </div>
                  </GlassCard>
                </a>

                <GlassCard className="!p-5 md:!p-6">
                  <div className="flex items-start gap-4 md:gap-5">
                    <MapPin
                      size={22}
                      className="text-emerald-500 mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-[11px] md:text-xs text-slate-500 uppercase tracking-[0.2em] font-semibold mb-1">
                        Location
                      </p>
                      <p className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">
                        {CONFIG.contact.location}
                      </p>
                      <p className="text-[11px] md:text-xs text-slate-600 dark:text-slate-300 mt-2">
                        Available for in-person roles across Greater London and
                        hybrid / remote work across the UK.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Quick message card */}
              <div className="space-y-6 md:space-y-7">
                <GlassCard className="!p-6 md:!p-7">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-3">
                    <Send className="text-emerald-500" />
                    Get In Touch
                  </h3>

                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                      I'm actively seeking opportunities in:
                    </p>

                    <div className="grid gap-3">
                      {[
                        "Teaching roles in UK primary & secondary schools",
                        "ESOL / EAL tutoring (online or in-person)",
                        "IELTS preparation for international students",
                        "Translation & interpreting (Farsi/Kurdish/English)",
                        "Educational assessment & curriculum design",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200"
                        >
                          <Check
                            size={18}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                        Please use any of the contact methods on the left, or
                        email me directly to discuss opportunities.
                      </p>

                      <a
                        href={`mailto:${CONFIG.contact.email}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white text-sm md:text-base font-semibold shadow-[0_18px_40px_rgba(16,185,129,0.4)] hover:-translate-y-[1px] hover:shadow-[0_22px_55px_rgba(16,185,129,0.6)] transition-all"
                      >
                        <Mail size={18} />
                        Email Me Directly
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 text-center">
                    <Quote
                      size={22}
                      className="text-emerald-500/40 mx-auto mb-2"
                    />
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 italic">
                      "Education is the most powerful weapon which you can use
                      to change the world."
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      — Nelson Mandela
                    </p>
                  </div>
                </GlassCard>

                {/* References summary */}
                <GlassCard className="!p-6 md:!p-7">
                  <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <Users className="text-emerald-500" />
                    Professional References
                  </h3>
                  <div className="space-y-4 text-xs md:text-sm">
                    <div className="border-l-4 border-emerald-500/70 pl-4">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Farah Malik
                      </p>
                      <p className="text-emerald-600 dark:text-emerald-300 font-medium">
                        Online Tutor, Aspire Education Academy (UK)
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        NCFE CACHE Level 2 Safeguarding & Behaviour Support
                        tutor.
                      </p>
                    </div>
                    <div className="border-l-4 border-sky-500/70 pl-4">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Rostam Farrahi
                      </p>
                      <p className="text-sky-500 dark:text-sky-300 font-medium">
                        Director of Studies, Language Academy of Yazd University
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 mt-1">
                        Former line manager during my role as Manager & Director
                        of Studies.
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      Full contact details available in the downloadable CV and
                      on request for UK employers.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 md:py-14 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-slate-900 font-bold shadow-md">
                  MH
                </div>
              </div>
              <div className="text-left">
                <p className="text-base md:text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  Mehraban Hamavandy
                </p>
                <p className="text-[11px] md:text-xs text-emerald-600 dark:text-emerald-300">
                  PhD TESL · EAL & SEND Specialist · London, UK
                </p>
              </div>
            </button>

            <div className="flex gap-4">
              <a
                href={CONFIG.contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${CONFIG.contact.email}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                aria-label="Send email"
              >
                <Mail size={18} />
              </a>
              <a
                href={CONFIG.contact.scholar}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all"
                aria-label="Google Scholar profile"
              >
                <BookOpen size={18} />
              </a>
            </div>

            <div className="text-center text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
              <p className="mb-1">
                Focus areas: EAL · ESOL · SEND · Behaviour Support ·
                Safeguarding · IELTS · Farsi / Kurdish / English Interpreting
              </p>
              <p className="mb-2">
                © {new Date().getFullYear()} Mehraban Hamavandy. All rights
                reserved.
              </p>
              <p className="text-[10px]">
                Developed by{" "}
                <a
                  href="https://omnilertlab.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  OmnilertLab
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* GLOBAL STYLES */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');

          * {
            -webkit-tap-highlight-color: transparent;
          }

          .font-display { font-family: 'Playfair Display', serif; }
          .font-body { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

          .custom-cursor {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            border: 2px solid rgba(16,185,129,0.6);
            border-radius: 999px;
            transform: translate(-50%, -50%);
            transition: width 0.18s ease, height 0.18s ease;
            mix-blend-mode: difference;
          }
          .custom-cursor-dot {
            position: fixed;
            width: 6px;
            height: 6px;
            background: rgba(16,185,129,0.9);
            border-radius: 999px;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            mix-blend-mode: difference;
          }
          @media (max-width: 768px) {
            .custom-cursor,
            .custom-cursor-dot {
              display: none;
            }
          }

          @keyframes pulse-glow {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.06); }
          }
          .animate-pulse-glow { animation: pulse-glow 5s ease-in-out infinite; }

          @keyframes float-badge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-float-badge { animation: float-badge 5s ease-in-out infinite; }
          .animate-float-badge-delayed { animation: float-badge 5s ease-in-out 1.5s infinite; }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

          @keyframes spin-very-slow { to { transform: rotate(360deg); } }
          .animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }

          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 220% auto;
            animation: gradient 4s ease infinite;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            overscroll-behavior: none;
          }

          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #020617;
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #10b981, #0ea5e9);
            border-radius: 999px;
            border: 2px solid #020617;
          }

          ::selection {
            background-color: rgba(16,185,129,0.3);
            color: #ffffff;
          }

          img { 
            max-width: 100%; 
            height: auto;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }

          button:focus-visible,
          a:focus-visible,
          input:focus-visible,
          textarea:focus-visible {
            outline: 2px solid rgba(16,185,129,0.7);
            outline-offset: 2px;
          }

          /* Smooth theme transition */
          * {
            transition-property: background-color, border-color, color;
            transition-duration: 0.3s;
            transition-timing-function: ease-in-out;
          }

          /* Mobile optimization */
          @media (max-width: 640px) {
            html {
              font-size: 15px;
            }
          }

          /* Performance optimization */
          .will-change-transform {
            will-change: transform;
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* Loading optimization */
          @media (prefers-reduced-data: reduce) {
            * {
              animation-duration: 0s !important;
              transition-duration: 0s !important;
            }
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .custom-cursor,
            .custom-cursor-dot {
              display: none;
            }
          }

          /* Print styles */
          @media print {
            .custom-cursor,
            .custom-cursor-dot,
            nav,
            footer {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
