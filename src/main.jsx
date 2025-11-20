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
  CheckCircle,
  Globe,
  Users,
  Brain,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Copy,
  Sparkles,
  Quote,
  Music,
  Heart,
  Languages,
  Star,
} from "lucide-react";

/**
 * CONFIGURATION & DATA
 * ---------------------
 * Update these values to instantly change content across the site.
 */
const CONFIG = {
  name: "Mehraban Hamavandy",
  title: "PhD-Qualified Education Professional",
  subtitle: "Specialist in EAL, SEND, Behaviour Support & Translation",
  image: "/image.png", // <--- PUT YOUR IMAGE IN THE PUBLIC FOLDER NAMED 'image.png'
  contact: {
    email: "hamavandy.me@gmail.com",
    phone: "+44 7575 948458",
    linkedin: "https://www.linkedin.com/in/mehraban-hamavandy-9753b161",
    scholar: "https://scholar.google.com/citations?user=z-FLxlEAAAAJ&hl=en",
    location: "London, United Kingdom",
  },
};

// --- High Performance Animation Hook ---
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
};

// --- UI Components ---

const SectionHeader = ({ title, subtitle, centered = true }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`mb-20 ${
        centered ? "text-center" : "text-left"
      } transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 relative inline-block">
        {title}
        <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70"></span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const GlassCard = ({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        relative overflow-hidden bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        ${
          hoverEffect
            ? "hover:bg-slate-800/60 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const SkillPill = ({ label, icon: Icon }) => (
  <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full text-sm text-slate-300 hover:border-amber-500/50 transition-colors cursor-default">
    {Icon && <Icon size={14} className="text-amber-500" />}
    {label}
  </div>
);

// --- Main Application ---

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast({ show: true, message: "Copied to clipboard!" });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "publications",
        "contact",
      ];
      const scrollPos = window.scrollY + 300;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(sec);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Toast Notification */}
      <div
        className={`fixed top-24 right-5 z-[60] transition-all duration-500 ${
          toast.show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <div className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 font-medium">
          <CheckCircle size={20} /> {toast.message}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="text-xl md:text-2xl font-serif font-bold text-white cursor-pointer flex items-center gap-3 group"
            onClick={() => scrollTo("home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-700 rounded-lg flex items-center justify-center text-slate-950 font-bold text-xl transform group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-500/20">
              MH
            </div>
            <span className="hidden sm:block group-hover:text-amber-400 transition-colors">
              Hamavandy
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Experience", "Publications", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group py-2 ${
                    activeSection === item.toLowerCase()
                      ? "text-amber-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </button>
              )
            )}
            <a
              href={CONFIG.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-[#0077b5] text-white p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-200 hover:text-amber-400 transition-colors"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-slate-900/95 border-b border-slate-800 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {["Home", "About", "Experience", "Publications", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-left text-lg font-medium text-slate-300 hover:text-amber-400 py-2 border-b border-slate-800/50"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            {/* Profile Image Container */}
            <div className="order-1 md:order-2 flex-shrink-0 relative group animate-float">
              {/* Decorative Rings */}
              <div className="absolute -inset-4 border border-amber-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-8 border border-slate-700/30 rounded-full animate-spin-reverse-slower"></div>

              {/* Main Image */}
              <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-black/50 bg-slate-800">
                <img
                  src={CONFIG.image}
                  alt="Mehraban Hamavandy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x400/1e293b/fbbf24?text=MH";
                  }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-10 -left-4 md:-left-12 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl animate-bounce-slow flex items-center gap-3">
                <div className="bg-amber-500/20 p-2 rounded-lg">
                  <GraduationCap className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Degree
                  </p>
                  <p className="font-bold text-white">PhD TESL</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-10 -right-4 md:-right-12 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-xl animate-bounce-slow animation-delay-2000 flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <Globe className="text-blue-500" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="font-bold text-white">17+ Years</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 md:order-1 flex-1 text-center md:text-left space-y-8">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold tracking-wide uppercase">
                  <Sparkles size={14} /> Available for Hire
                </div>
              </div>

              <h1
                className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Mehraban <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                  Hamavandy
                </span>
              </h1>

              <p
                className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                A highly qualified education professional blending
                doctoral-level expertise in assessment with hands-on EAL, SEND,
                and translation support.
              </p>

              <div
                className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollTo("experience")}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Resume
                </button>
              </div>

              <div
                className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-500 font-medium animate-fade-in-up"
                style={{ animationDelay: "500ms" }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-amber-500" /> London, UK
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-500" /> UK Work
                  Auth (No Sponsorship)
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section id="about" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Professional Profile"
            subtitle="Bridging the gap between academic theory and practical classroom support."
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Narrative */}
            <div className="space-y-8">
              <GlassCard className="border-l-4 border-l-amber-500">
                <Quote className="text-amber-500 mb-4 opacity-50" size={40} />
                <p className="text-lg text-slate-300 italic leading-relaxed">
                  "With a PhD in TESL and recent UK qualifications in
                  Safeguarding and Behaviour, I offer a unique blend of
                  high-level academic insight and compassionate, grassroots
                  support. My goal is to build academic resilience in vulnerable
                  learners."
                </p>
              </GlassCard>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Star className="text-amber-500" /> Specialist Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill label="EAL & ESOL Support" icon={Languages} />
                  <SkillPill label="SEND & Inclusion" icon={Heart} />
                  <SkillPill label="Behaviour Management" icon={Brain} />
                  <SkillPill label="Safeguarding (L2)" icon={CheckCircle} />
                  <SkillPill label="Translation (Farsi/Eng)" icon={Globe} />
                  <SkillPill label="Academic Assessment" icon={FileText} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Music className="text-amber-500" /> Personal Interests
                </h3>
                <p className="text-slate-400">
                  Passionate about culture and history. I play the{" "}
                  <strong>Santoor</strong> (traditional Persian instrument) and
                  stay active through football and swimming.
                </p>
              </div>
            </div>

            {/* Right: Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Education & Certifications
              </h3>
              {[
                {
                  title: "PhD in TESL",
                  org: "Tarbiat Modares University (UK ENIC Level 8)",
                  date: "2014",
                  active: true,
                },
                {
                  title: "MA in TESL",
                  org: "Tarbiat Modares University (UK ENIC Level 7)",
                  date: "2010",
                  active: true,
                },
                {
                  title: "L2 Safeguarding & Prevent",
                  org: "NCFE CACHE Certified",
                  date: "June 2025",
                  active: false,
                },
                {
                  title: "L2 Behaviour Support",
                  org: "NCFE CACHE Certified",
                  date: "June 2025",
                  active: false,
                },
                {
                  title: "IELTS Score 8.0",
                  org: "Listening: 9.0, Reading: 8.5",
                  date: "Current",
                  active: false,
                },
              ].map((edu, i) => (
                <GlassCard
                  key={i}
                  className="py-4 px-6 flex items-center gap-4 !rounded-xl"
                  delay={i * 100}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      edu.active
                        ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                        : "bg-slate-600"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold">{edu.title}</h4>
                    <p className="text-sm text-slate-400">{edu.org}</p>
                  </div>
                  <span className="text-xs font-mono text-amber-500/80 border border-amber-500/20 px-2 py-1 rounded">
                    {edu.date}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeader title="Career Journey" />

          <div className="max-w-5xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800"></div>

            {[
              {
                role: "Freelance Interpreter",
                org: "Absolute Translation & Interpretation LLC",
                date: "May 2025 – Present",
                desc: "Providing professional and confidential interpretation services to support effective communication across various professional settings.",
                icon: Globe,
                color: "text-emerald-400",
              },
              {
                role: "Translator / Interpreter",
                org: "Napier Friends Charity",
                date: "2024 – Present",
                desc: "Vital Farsi-English interpretation for asylum seekers during medical and legal appointments. Collaborating to improve accessibility of service materials.",
                icon: Heart,
                color: "text-rose-400",
              },
              {
                role: "Freelance ESOL Tutor",
                org: "Private Tuition (UK)",
                date: "2023 – Present",
                desc: "Tailored one-to-one tuition for migrants and asylum seekers, focusing on functional skills and integration.",
                icon: Users,
                color: "text-blue-400",
              },
              {
                role: "Manager & Director of Studies",
                org: "Language Academy of Yazd University",
                date: "2017 – 2020",
                desc: "Led the establishment of a university language centre. Recruited and trained staff, designed ESP curricula, and managed operations.",
                icon: Briefcase,
                color: "text-amber-400",
              },
              {
                role: "Assistant Professor",
                org: "Yazd University",
                date: "2015 – 2023",
                desc: "Lectured on Second Language Acquisition and Testing. Supervised postgraduate research and provided pastoral support.",
                icon: GraduationCap,
                color: "text-purple-400",
              },
            ].map((job, index) => {
              const [ref, isVisible] = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative mb-16 md:flex ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center justify-between group`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-900 border-4 border-slate-800 rounded-full z-10 flex items-center justify-center group-hover:border-amber-500 transition-colors duration-300">
                    <job.icon size={16} className={job.color} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[45%] transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                      <span
                        className={`text-xs font-bold tracking-widest uppercase ${job.color} mb-2 block`}
                      >
                        {job.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {job.role}
                      </h3>
                      <p className="text-slate-400 text-sm font-medium mb-3">
                        {job.org}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {job.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS / SCHOLAR */}
      <section
        id="publications"
        className="py-24 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            title="Research & Publications"
            subtitle="Contributions to Linguistics and Test Validation"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "IELTS Preparation Guide", type: "Book", sub: "Author" },
              {
                title: "Language Test Validation",
                type: "Article",
                sub: "Journal of Language Testing",
              },
              {
                title: "Pedagogical Grammar",
                type: "Article",
                sub: "Applied Linguistics Review",
              },
            ].map((pub, i) => (
              <a
                key={i}
                href={CONFIG.contact.scholar}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <GlassCard
                  hoverEffect={true}
                  delay={i * 150}
                  className="h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-500 text-xs font-bold uppercase tracking-wider border border-slate-700">
                        {pub.type}
                      </span>
                      <ExternalLink
                        size={16}
                        className="text-slate-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{pub.sub}</p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={CONFIG.contact.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-1"
            >
              View full profile on Google Scholar <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & REFERENCES */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Let's Connect
              </h2>
              <p className="text-slate-400 mb-12 text-lg">
                I am currently open to opportunities in Education, Translation,
                and Academic Management.
              </p>

              <div className="space-y-6">
                <button
                  onClick={() => copyToClipboard(CONFIG.contact.email)}
                  className="w-full group flex items-center gap-6 bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-amber-500 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <p className="text-white font-medium text-lg truncate">
                      {CONFIG.contact.email}
                    </p>
                  </div>
                  <Copy
                    size={20}
                    className="text-slate-600 group-hover:text-white"
                  />
                </button>

                <button
                  onClick={() => copyToClipboard(CONFIG.contact.phone)}
                  className="w-full group flex items-center gap-6 bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500 transition-all text-left"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-white font-medium text-lg">
                      {CONFIG.contact.phone}
                    </p>
                  </div>
                  <Copy
                    size={20}
                    className="text-slate-600 group-hover:text-white"
                  />
                </button>

                <a
                  href={CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full group flex items-center gap-6 bg-slate-900/50 p-5 rounded-2xl border border-slate-800 hover:border-[#0077b5] transition-all text-left"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                      LinkedIn
                    </p>
                    <p className="text-white font-medium text-lg">
                      Professional Profile
                    </p>
                  </div>
                  <ExternalLink
                    size={20}
                    className="text-slate-600 group-hover:text-white"
                  />
                </a>
              </div>
            </div>

            {/* References Section */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Users className="text-amber-500" /> References
              </h3>

              <div className="space-y-8">
                <div className="border-l-2 border-slate-700 pl-6 hover:border-amber-500 transition-colors">
                  <h4 className="text-white font-bold text-lg">Farah Malik</h4>
                  <p className="text-amber-500 text-sm mb-2">
                    Online Tutor, Aspire Education Academy
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Tutor for NCFE CACHE Level 2 Certificates.
                    <br />
                    <span className="text-slate-500">
                      Farah.Malik@aspireeducationacademy.co.uk | 01706 392650
                    </span>
                  </p>
                </div>

                <div className="border-l-2 border-slate-700 pl-6 hover:border-amber-500 transition-colors">
                  <h4 className="text-white font-bold text-lg">
                    Rostam Farrahi
                  </h4>
                  <p className="text-amber-500 text-sm mb-2">
                    Director of Studies, Language Academy of Yazd University
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Former Line Manager.
                    <br />
                    <span className="text-slate-500">
                      ceo@layu.ir | (+98) 902 7777126
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800 text-center">
                <p className="text-slate-500 italic">
                  "Education is the passport to the future."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-slate-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 font-serif text-2xl font-bold text-white">
          <span className="bg-amber-600 text-black px-2 rounded">M</span>{" "}
          Hamavandy
        </div>
        <p className="text-slate-600 text-sm mb-6">
          &copy; 2025 Mehraban Hamavandy. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={CONFIG.contact.linkedin}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${CONFIG.contact.email}`}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </footer>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { opacity: 0; animation: fade-in-up 0.8s ease-out forwards; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse-slower { animation: spin-slow 30s linear infinite reverse; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
}
