import { ArrowRight, Heart, Shield, Brain, BarChart3, Users, Lock } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              AIML4Women
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition">
              Features
            </a>
            <a href="#resources" className="text-sm font-medium text-slate-700 hover:text-purple-600 transition">
              Resources
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
                <span className="text-sm font-semibold text-purple-700">🏥 Diagnostic Support Platform</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Women's Health,{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Clearly Explained
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                AIML-powered awareness, diagnosis support, and research collaboration for PCOD, endometriosis, and women's health disorders
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2">
                  Start Symptom Check <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl blur-3xl opacity-30 -z-10" />
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl p-1 overflow-hidden">
                <div className="bg-white rounded-xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">AI-Powered Triage</p>
                        <p className="text-sm text-slate-600">Personalized guidance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Safety First</p>
                        <p className="text-sm text-slate-600">Evidence-backed approach</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Privacy Assured</p>
                        <p className="text-sm text-slate-600">Anonymous data sharing</p>
                      </div>
                    </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-xl text-slate-600">
              Women face significant gaps in diagnosis and support for reproductive health disorders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                6-13%
              </div>
              <p className="font-semibold text-slate-900 mb-2">PCOD Prevalence</p>
              <p className="text-slate-600">
                Affects 6–13% of reproductive-aged women worldwide, yet up to 70% remain undiagnosed. <em className="text-sm">— WHO</em>
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                6-8 yrs
              </div>
              <p className="font-semibold text-slate-900 mb-2">Diagnostic Delay</p>
              <p className="text-slate-600">
                Endometriosis diagnosis takes median 6–8 years. Many patients endure years of pain before recognition. <em className="text-sm">— PMC+1</em>
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                ⚠️
              </div>
              <p className="font-semibold text-slate-900 mb-2">Research Gaps</p>
              <p className="text-slate-600">
                Women's health is underfunded relative to disease burden, creating evidence gaps and sparse research. <em className="text-sm">— Nature</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Solution</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              An intelligent platform that bridges the gap between awareness, diagnosis, and research
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <Brain className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Awareness & Education</h3>
              <p className="text-slate-700">
                Accessible information about PCOD, endometriosis, and other menstrual disorders designed for understanding, not diagnosis
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border border-cyan-200">
              <Heart className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Safe Triage System</h3>
              <p className="text-slate-700">
                AI-powered symptom checker that suggests next steps (self-care, GP visit, specialist consultation, emergency care)
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <Shield className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Evidence Transparency</h3>
              <p className="text-slate-700">
                Clear labeling of what's evidence-based vs. limited evidence, with questions to ask your clinician
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border border-cyan-200">
              <BarChart3 className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Research Collaboration</h3>
              <p className="text-slate-700">
                Anonymous data sharing to help researchers identify knowledge gaps and improve future diagnostic tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Core Features</h2>
            <p className="text-xl text-slate-600">
              Everything you need for informed health decisions
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📋 Symptom Intake Form</h3>
              <p className="text-slate-600 mb-4">
                Structured questionnaire covering age, cycle patterns, pain, fertility concerns, acne, weight changes, family history, and medications. Free-text descriptions parsed by NLP to map to medical concepts.
              </p>
              <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700">
                <strong>Questions include:</strong> age, cycle length, regularity, pelvic pain, bleeding patterns, pain during intercourse, conception difficulty, acne/hirsutism, medical history, family history, medications
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Safety Triage Rules</h3>
              <p className="text-slate-600 mb-6">
                Rule-based system with three triage levels
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 rounded p-4">
                  <p className="font-semibold text-green-900 mb-1">��� Low Risk (Monitor & Educate)</p>
                  <p className="text-sm text-green-800">Mild cycle irregularities only, no severe pain → Track your cycle for 2 months and see a doctor if symptoms worsen</p>
                </div>
                <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded p-4">
                  <p className="font-semibold text-yellow-900 mb-1">🟡 Moderate Risk (Doctor Referral)</p>
                  <p className="text-sm text-yellow-800">Recurring pelvic pain (&gt;6 months), pain during intercourse, conception difficulty, or irregular periods with hormonal signs → Consult a gynecologist</p>
                </div>
                <div className="border-l-4 border-red-500 bg-red-50 rounded p-4">
                  <p className="font-semibold text-red-900 mb-1">🔴 Red Flags (Immediate Care)</p>
                  <p className="text-sm text-red-800">Sudden severe abdominal pain, fainting with bleeding, heavy bleeding (&gt;1 pad/hour), fever/vomiting with pain → Seek emergency care</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🤖 AI Risk Scoring</h3>
              <p className="text-slate-600 mb-4">
                Explainable machine learning model that outputs risk buckets (Low / Moderate / High) for PCOD, endometriosis, and other conditions with clear confidence intervals and transparency
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded p-4">
                  <p className="font-semibold text-slate-900 mb-2">Conditions Assessed</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ PCOD/PCOS</li>
                    <li>✓ Endometriosis</li>
                    <li>✓ Dysmenorrhea</li>
                    <li>✓ Fibroids</li>
                    <li>✓ Thyroid Disorders</li>
                    <li>✓ Bleeding Disorders</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <p className="font-semibold text-slate-900 mb-2">Model Features</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ SHAP/LIME explanations</li>
                    <li>✓ Confidence intervals</li>
                    <li>✓ Missing data flagging</li>
                    <li>✓ Evidence-based citations</li>
                    <li>✓ Prevalence calibration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📚 Education & Resources</h3>
              <p className="text-slate-600 mb-4">
                Plain-language summaries of risk scores, symptoms that weighed most, suggested questions for clinicians, links to vetted educational pages, and local resources
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-cyan-100 rounded p-4 text-sm text-slate-700">
                Evidence-based content with <strong>"Limited Evidence"</strong> labels where research is sparse, helping you make informed decisions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Who We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white">
              <Users className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Primary Users</h3>
              <p className="mb-4">
                People who menstruate aged 15–45 experiencing symptoms or seeking information about menstrual and reproductive health
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Individuals with undiagnosed symptoms</li>
                <li>✓ Those seeking early awareness</li>
                <li>✓ People with family history of these conditions</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-8 text-white">
              <Shield className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Secondary Users</h3>
              <p className="mb-4">
                Healthcare professionals, educators, NGOs, and researchers supporting women's health
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Primary care clinicians</li>
                <li>✓ Health educators and NGOs</li>
                <li>✓ Researchers improving diagnosis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Unique Approach</h2>
            <p className="text-xl text-slate-600">
              What sets us apart in women's health diagnostics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="font-bold text-slate-900 mb-2">AI-Powered Awareness</h4>
              <p className="text-sm text-slate-600">
                Educates on underdiagnosed conditions like PCOD & endometriosis with intelligent triage
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-slate-900 mb-2">Transparent Evidence</h4>
              <p className="text-sm text-slate-600">
                Shows which advice is evidence-based vs. limited research with clear citations
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="font-bold text-slate-900 mb-2">Localized Care</h4>
              <p className="text-sm text-slate-600">
                Tailored for diverse users with cultural sensitivity and local resource links
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-slate-900 mb-2">Clinician-in-Loop</h4>
              <p className="text-sm text-slate-600">
                Ensures medical accuracy and safety with professional feedback integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Consent */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Your Privacy Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <Lock className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Only symptom data is collected, encrypted and stored securely</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>No identifiable data (name, contact, address) is collected</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>We do not share or sell personal data to third parties</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Aggregated, anonymized trends may be published for research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Withdraw consent anytime by contacting support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border border-cyan-200">
              <Shield className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consent & Usage</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Your responses are stored anonymously for research and improvement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>This tool does NOT replace a doctor's diagnosis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Must be 18+ to share data for research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>You can request data deletion anytime</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span>Optional participation in research program</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Research & Resources</h2>
            <p className="text-xl text-slate-600">
              Evidence-based information from trusted sources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">PCOD / PCOS</h4>
              <p className="text-sm text-slate-600 mb-3">
                WHO Fact Sheet: Comprehensive overview of polycystic ovary syndrome prevalence and management
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">Endometriosis</h4>
              <p className="text-sm text-slate-600 mb-3">
                NIH Research: In-depth research on endometriosis pathology, diagnosis, and treatment options
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">Women's Health Gap</h4>
              <p className="text-sm text-slate-600 mb-3">
                Nature (2023): The gender gap in healthcare research and its impact on women's health outcomes
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">Diagnostic Delays</h4>
              <p className="text-sm text-slate-600 mb-3">
                BMJ: The long wait for endometriosis diagnosis and barriers to early detection
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">Menstrual Health</h4>
              <p className="text-sm text-slate-600 mb-3">
                UNFPA: Global research on menstrual health, equity, and access to care
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Learn more →
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition">
              <h4 className="font-bold text-slate-900 mb-2">Research Collaboration</h4>
              <p className="text-sm text-slate-600 mb-3">
                Partner with us to improve diagnostic tools through anonymized data contribution
              </p>
              <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                Get involved →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get personalized symptom guidance, learn about your condition, and help advance research for women's health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Start Symptom Check <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Learn More About Research
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">AIML4Women</span>
              </div>
              <p className="text-sm">
                AI-powered awareness, triage, and diagnostic support for women's health
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Symptom Checker</a></li>
                <li><a href="#" className="hover:text-white transition">Education</a></li>
                <li><a href="#resources" className="hover:text-white transition">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition">Research Partners</a></li>
                <li><a href="#" className="hover:text-white transition">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>
              ⚠️ <strong>Disclaimer:</strong> This tool provides educational information and suggested triage guidance. It does not replace professional medical diagnosis or treatment. Always consult a healthcare provider.
            </p>
            <p className="mt-4 text-slate-500">
              © 2024 AIML4Women. All rights reserved. Built with care for women's health.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
