import {
  ArrowRight,
  Heart,
  Shield,
  Brain,
  BarChart3,
  Users,
  Lock,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <iframe 
            className="w-full h-full object-cover scale-150 opacity-20"
            src="https://www.youtube.com/embed/qNLAeejUosw?si=MH22VLA0rbWTRzkJ&controls=0&autoplay=1&mute=1&loop=1&playlist=qNLAeejUosw&showinfo=0&rel=0&modestbranding=1"
            title="Background video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-blue-50/80 to-cyan-100/80 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2.5 bg-purple-100 rounded-full border border-purple-200 animate-fade-in">
                <span className="text-sm font-semibold text-purple-700">
                  🏥 Diagnostic Support Platform
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight animate-fade-in animation-delay-100">
                Women's Health,{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Clearly Explained
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in animation-delay-200">
                AI-powered awareness, diagnosis support, and research
                collaboration for PCOD, endometriosis, and women's health
                disorders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
                <Link
                  to="/symptom-checker"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Start Symptom Check{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#features"
                  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-3xl blur-3xl opacity-30 -z-10 animate-pulse" />
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl p-1 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                <div className="bg-white rounded-xl p-8">
                  <div className="space-y-4">
                    {[
                      {
                        icon: Brain,
                        label: "AI-Powered Triage",
                        desc: "Personalized guidance",
                      },
                      {
                        icon: Shield,
                        label: "Safety First",
                        desc: "Evidence-backed approach",
                      },
                      {
                        icon: Lock,
                        label: "Privacy Assured",
                        desc: "Anonymous data sharing",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-cyan-100 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">
                            {item.label}
                          </p>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              The Problem
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Women face significant gaps in diagnosis and support for
              reproductive health disorders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "6-13%",
                title: "PCOD Prevalence",
                desc: "Affects 6–13% of reproductive-aged women worldwide, yet up to 70% remain undiagnosed. — WHO",
              },
              {
                stat: "6-8 yrs",
                title: "Diagnostic Delay",
                desc: "Endometriosis diagnosis takes median 6–8 years. Many patients endure years of pain before recognition. — PMC+1",
              },
              {
                stat: "⚠️",
                title: "Research Gaps",
                desc: "Women's health is underfunded relative to disease burden, creating evidence gaps and sparse research. — Nature",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <p className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </p>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Our Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              An intelligent platform that bridges the gap between awareness,
              diagnosis, and research
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Awareness & Education",
                desc: "Accessible information about PCOD, endometriosis, and other menstrual disorders designed for understanding, not diagnosis",
                color: "from-purple-50 to-purple-100",
                border: "border-purple-200",
              },
              {
                icon: Heart,
                title: "Safe Triage System",
                desc: "AI-powered symptom checker that suggests next steps (self-care, GP visit, specialist consultation, emergency care)",
                color: "from-cyan-50 to-cyan-100",
                border: "border-cyan-200",
              },
              {
                icon: Shield,
                title: "Evidence Transparency",
                desc: "Clear labeling of what's evidence-based vs. limited evidence, with questions to ask your clinician",
                color: "from-purple-50 to-purple-100",
                border: "border-purple-200",
              },
              {
                icon: BarChart3,
                title: "Research Collaboration",
                desc: "Anonymous data sharing to help researchers identify knowledge gaps and improve future diagnostic tools",
                color: "from-cyan-50 to-cyan-100",
                border: "border-cyan-200",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border ${item.border} hover:shadow-xl transition-all duration-300 group`}
              >
                <item.icon className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need for informed health decisions
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                icon: "📋",
                title: "Symptom Intake Form",
                desc: "Structured questionnaire covering age, cycle patterns, pain, fertility concerns, acne, weight changes, family history, and medications. Free-text descriptions parsed by NLP to map to medical concepts.",
                items: [
                  "Age, cycle length, regularity",
                  "Pain patterns & severity",
                  "Fertility & lifestyle impacts",
                  "Medical history & medications",
                ],
              },
              {
                icon: "⚠️",
                title: "Safety Triage Rules",
                desc: "Rule-based system with three triage levels to help you understand when to seek care",
                items: [
                  "🟢 Low Risk: Monitor and educate",
                  "🟡 Moderate Risk: Doctor referral",
                  "🔴 Red Flags: Immediate care",
                ],
              },
              {
                icon: "🤖",
                title: "AI Risk Scoring",
                desc: "Explainable machine learning model with clear confidence intervals",
                items: [
                  "PCOD/PCOS",
                  "Endometriosis",
                  "Thyroid disorders",
                  "Dysmenorrhea & Fibroids",
                ],
              },
              {
                icon: "📚",
                title: "Education & Resources",
                desc: "Plain-language explanations with evidence-based citations and local resources",
                items: [
                  "Risk score explanations",
                  "Questions for clinicians",
                  "Vetted educational links",
                  "Limited evidence labels",
                ],
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  {feature.icon} {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Who We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Primary Users",
                color: "from-purple-500 to-purple-600",
                desc: "People who menstruate aged 15–45 experiencing symptoms or seeking information about menstrual and reproductive health",
                items: [
                  "Individuals with undiagnosed symptoms",
                  "Those seeking early awareness",
                  "People with family history",
                ],
              },
              {
                icon: Shield,
                title: "Secondary Users",
                color: "from-cyan-500 to-cyan-600",
                desc: "Healthcare professionals, educators, NGOs, and researchers supporting women's health",
                items: [
                  "Primary care clinicians",
                  "Health educators and NGOs",
                  "Researchers improving diagnosis",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className={`bg-gradient-to-br ${group.color} rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300`}
              >
                <group.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{group.title}</h3>
                <p className="mb-6 text-white/90">{group.desc}</p>
                <ul className="space-y-2 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-xl">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Our Unique Approach
            </h2>
            <p className="text-xl text-slate-600">
              What sets us apart in women's health diagnostics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧠",
                title: "AI-Powered Awareness",
                desc: "Educates on underdiagnosed conditions with intelligent triage",
              },
              {
                emoji: "📊",
                title: "Transparent Evidence",
                desc: "Shows evidence-based vs. limited research with clear citations",
              },
              {
                emoji: "🌍",
                title: "Localized Care",
                desc: "Tailored for diverse users with cultural sensitivity",
              },
              {
                emoji: "🤝",
                title: "Clinician-in-Loop",
                desc: "Ensures medical accuracy and safety with professional feedback",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                  {item.emoji}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Consent */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Your Privacy Matters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                title: "Privacy Policy",
                color: "from-purple-50 to-purple-100",
                border: "border-purple-200",
                items: [
                  "Only symptom data is collected, encrypted and stored securely",
                  "No identifiable data (name, contact, address) is collected",
                  "We do not share or sell personal data to third parties",
                  "Aggregated, anonymized trends may be published for research",
                  "Withdraw consent anytime by contacting support",
                ],
              },
              {
                icon: Shield,
                title: "Consent & Usage",
                color: "from-cyan-50 to-cyan-100",
                border: "border-cyan-200",
                items: [
                  "Your responses are stored anonymously for research and improvement",
                  "This tool does NOT replace a doctor's diagnosis",
                  "Must be 18+ to share data for research",
                  "You can request data deletion anytime",
                  "Optional participation in research program",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className={`bg-gradient-to-br ${section.color} rounded-2xl p-8 border ${section.border}`}
              >
                <section.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-purple-600 font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
              Research & Resources
            </h2>
            <p className="text-xl text-slate-600">
              Evidence-based information from trusted sources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "PCOD / PCOS",
                desc: "WHO Fact Sheet: Comprehensive overview of polycystic ovary syndrome prevalence and management",
                link: "/diseases/pcod"
              },
              {
                title: "Endometriosis",
                desc: "NIH Research: In-depth research on endometriosis pathology, diagnosis, and treatment options",
                link: "/diseases/endometriosis"
              },
              {
                title: "Women's Health Gap",
                desc: "Nature (2023): The gender gap in healthcare research and its impact on women's health outcomes",
                link: "/diseases/womens-health-gap"
              },
              {
                title: "Diagnostic Delays",
                desc: "BMJ: The long wait for endometriosis diagnosis and barriers to early detection",
                link: "/diseases/endometriosis"
              },
              {
                title: "Menstrual Health",
                desc: "UNFPA: Global research on menstrual health, equity, and access to care",
                link: "/diseases/womens-health-gap"
              },
              {
                title: "Research Collaboration",
                desc: "Partner with us to improve diagnostic tools through anonymized data contribution",
                link: "/symptom-checker"
              },
            ].map((resource) => (
              <Link
                key={resource.title}
                to={resource.link}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-sm text-slate-600 mb-3">{resource.desc}</p>
                <span className="text-purple-600 font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get personalized symptom guidance, learn about your condition, and
            help advance research for women's health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/symptom-checker"
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Start Symptom Check{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#resources"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Learn More About Research
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
