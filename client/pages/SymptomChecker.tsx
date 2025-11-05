import { useState } from "react";
import { ArrowLeft, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface SymptomData {
  age: string;
  cycleLength: string;
  periodRegular: string;
  pelvicPain: boolean;
  heavyBleeding: boolean;
  painIntercourse: boolean;
  difficulty_conceiving: boolean;
  acne_hirsutism_weight: boolean;
  knownConditions: string[];
  familyHistory: boolean;
  symptomDescription: string;
  symptomDuration: string;
  medications: string;
  affectingDailyLife: boolean;
  severePain: boolean;
  fainting: boolean;
  vomiting: boolean;
}

interface TriageResult {
  level: "low" | "moderate" | "high" | "emergency";
  title: string;
  description: string;
  recommendations: string[];
  icon: React.ReactNode;
  colorClasses: string;
}

const triageModel = (symptoms: SymptomData): TriageResult => {
  let riskScore = 0;
  const conditions: string[] = [];

  if (
    symptoms.severePain ||
    symptoms.fainting ||
    symptoms.heavyBleeding ||
    symptoms.vomiting
  ) {
    return {
      level: "emergency",
      title: "🚨 Seek Immediate Medical Care",
      description:
        "Your symptoms require urgent medical evaluation. Please visit an emergency department or call emergency services.",
      recommendations: [
        "Go to the nearest emergency department",
        "Call emergency services if experiencing severe symptoms",
        "Inform medical staff about sudden pain, fainting, or heavy bleeding",
      ],
      icon: <AlertCircle className="w-12 h-12 text-red-600" />,
      colorClasses: "bg-red-50 border-red-300",
    };
  }

  const hasIrregularCycle = symptoms.periodRegular === "no";
  const hasHormonalSigns =
    symptoms.acne_hirsutism_weight || symptoms.difficulty_conceiving;
  const hasPCODHistory = symptoms.familyHistory && hasIrregularCycle;

  if (hasIrregularCycle) riskScore += 2;
  if (hasHormonalSigns) riskScore += 2;
  if (hasPCODHistory) riskScore += 3;
  if (symptoms.difficulty_conceiving) riskScore += 2;

  if (hasIrregularCycle && hasHormonalSigns) {
    conditions.push("Possible PCOD/PCOS");
  }

  const hasPelvicPain = symptoms.pelvicPain && symptoms.symptomDuration !== "weeks";
  const hasPainIntercourse = symptoms.painIntercourse;
  const hasLongDuration = parseInt(symptoms.symptomDuration || "0") > 6;

  if (hasPelvicPain && hasPainIntercourse) riskScore += 3;
  if (hasPelvicPain && hasLongDuration) riskScore += 2;
  if (hasPainIntercourse) riskScore += 1;

  if ((hasPelvicPain || hasPainIntercourse) && hasLongDuration) {
    conditions.push("Possible Endometriosis");
  }

  if (symptoms.heavyBleeding) {
    riskScore += 2;
    conditions.push("Possible Bleeding Disorder or Fibroids");
  }

  if (symptoms.knownConditions?.includes("thyroid")) {
    riskScore += 2;
    conditions.push("Known Thyroid Condition");
  }

  if (symptoms.pelvicPain && !hasPainIntercourse) {
    riskScore += 1;
    if (!conditions.includes("Possible Endometriosis")) {
      conditions.push("Possible Dysmenorrhea");
    }
  }

  if (riskScore >= 6 || (riskScore >= 4 && hasLongDuration)) {
    return {
      level: "high",
      title: "🟠 Moderate-High Risk - Doctor Referral Recommended",
      description:
        "Your symptoms suggest you may benefit from specialist evaluation. Please schedule a consultation with a gynecologist.",
      recommendations: [
        "Schedule an appointment with a gynecologist within 2-4 weeks",
        "Keep a symptom diary noting pain patterns, cycle dates, and triggers",
        "Ask your doctor about: ultrasound screening, hormone tests, and family history implications",
        "Discuss your fertility goals if applicable",
        "Track symptoms affecting daily activities to share with your doctor",
      ],
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      colorClasses: "bg-orange-50 border-orange-300",
    };
  } else if (riskScore >= 3 || (symptoms.difficulty_conceiving && symptoms.periodRegular === "no")) {
    return {
      level: "moderate",
      title: "🟡 Moderate Risk - Schedule Doctor Visit",
      description:
        "Your symptoms warrant professional medical evaluation. Consider scheduling an appointment with your primary care physician or gynecologist.",
      recommendations: [
        "Schedule an appointment with your doctor within 4-8 weeks",
        "Document your menstrual cycle (use a tracking app or diary)",
        "Note any patterns in symptoms, pain, or bleeding",
        "Prepare questions about your symptoms to ask your doctor",
        "If symptoms worsen, seek earlier evaluation",
      ],
      icon: <CheckCircle className="w-12 h-12 text-yellow-600" />,
      colorClasses: "bg-yellow-50 border-yellow-300",
    };
  } else {
    return {
      level: "low",
      title: "🟢 Low Risk - Monitor & Maintain Health",
      description:
        "Your current symptoms appear mild. Continue monitoring and maintain a healthy lifestyle.",
      recommendations: [
        "Track your menstrual cycle for 2-3 months to identify patterns",
        "Maintain a symptom diary if you notice any changes",
        "Practice stress management and regular exercise",
        "Contact a doctor if symptoms worsen or new symptoms appear",
        "Schedule regular check-ups with your healthcare provider",
      ],
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      colorClasses: "bg-green-50 border-green-300",
    };
  }
};

export default function SymptomChecker() {
  const [step, setStep] = useState<"form" | "results">("form");
  const [formData, setFormData] = useState<SymptomData>({
    age: "",
    cycleLength: "",
    periodRegular: "",
    pelvicPain: false,
    heavyBleeding: false,
    painIntercourse: false,
    difficulty_conceiving: false,
    acne_hirsutism_weight: false,
    knownConditions: [],
    familyHistory: false,
    symptomDescription: "",
    symptomDuration: "",
    medications: "",
    affectingDailyLife: false,
    severePain: false,
    fainting: false,
    vomiting: false,
  });
  const [triageResult, setTriageResult] = useState<TriageResult | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const input = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: input.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      knownConditions: checked
        ? [...prev.knownConditions, condition]
        : prev.knownConditions.filter((c) => c !== condition),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = triageModel(formData);
    setTriageResult(result);
    setStep("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === "results" && triageResult) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => {
              setStep("form");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-purple-600 transition-colors font-medium mb-8 hover:bg-slate-100 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" /> Start New Assessment
          </button>

          <div className={`border-l-8 rounded-2xl p-8 mb-8 ${triageResult.colorClasses}`}>
            <div className="flex gap-6 items-start">
              {triageResult.icon}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-slate-900 mb-3">
                  {triageResult.title}
                </h1>
                <p className="text-lg text-slate-700">
                  {triageResult.description}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Recommended Next Steps
            </h2>
            <ul className="space-y-4">
              {triageResult.recommendations.map((rec, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-slate-700 leading-relaxed">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              📊 Assessment Summary
            </h3>
            <div className="space-y-3 text-slate-700">
              <p>
                <strong>Age:</strong> {formData.age || "Not provided"}
              </p>
              <p>
                <strong>Cycle Length:</strong> {formData.cycleLength || "Not provided"} days
              </p>
              <p>
                <strong>Cycle Regularity:</strong> {formData.periodRegular || "Not specified"}
              </p>
              <p>
                <strong>Symptom Duration:</strong> {formData.symptomDuration ? `${formData.symptomDuration} months` : "Not specified"}
              </p>
              <div>
                <strong>Symptoms Present:</strong>
                <ul className="mt-2 ml-4 list-disc space-y-1 text-slate-700">
                  {formData.pelvicPain && <li>Pelvic pain</li>}
                  {formData.heavyBleeding && <li>Heavy bleeding</li>}
                  {formData.painIntercourse && <li>Pain during intercourse</li>}
                  {formData.difficulty_conceiving && <li>Difficulty conceiving</li>}
                  {formData.acne_hirsutism_weight && <li>Acne/hirsutism/weight changes</li>}
                  {!formData.pelvicPain &&
                    !formData.heavyBleeding &&
                    !formData.painIntercourse &&
                    !formData.difficulty_conceiving &&
                    !formData.acne_hirsutism_weight && <li>None reported</li>}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-8">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>⚠️ Disclaimer:</strong> This tool provides educational information and suggested triage guidance based on your responses. It does NOT replace professional medical diagnosis or treatment. Always consult a qualified healthcare provider for proper evaluation and care.
            </p>
          </div>

          <Link
            to="/symptom-checker"
            onClick={() => setStep("form")}
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-block text-center"
          >
            Start New Assessment
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
            Symptom Checker
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Answer questions about your symptoms to get personalized guidance. This is not a diagnosis and does not replace professional medical advice.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Demographics */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Menstrual Cycle Length (days)
                </label>
                <input
                  type="number"
                  name="cycleLength"
                  value={formData.cycleLength}
                  onChange={handleInputChange}
                  placeholder="e.g., 28"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Are your periods regular?
              </label>
              <div className="space-y-2">
                {["yes", "no", "unsure"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white transition">
                    <input
                      type="radio"
                      name="periodRegular"
                      value={option}
                      checked={formData.periodRegular === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 cursor-pointer"
                    />
                    <span className="text-slate-700 capitalize font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Symptoms */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Symptoms</h2>
            <div className="space-y-3">
              {[
                { name: "pelvicPain", label: "Pelvic pain before or during periods?" },
                { name: "heavyBleeding", label: "Heavy bleeding or clots?" },
                { name: "painIntercourse", label: "Pain during intercourse?" },
                { name: "difficulty_conceiving", label: "Difficulty conceiving?" },
                { name: "acne_hirsutism_weight", label: "Acne, facial hair growth, or weight gain?" },
                { name: "affectingDailyLife", label: "Are symptoms affecting daily activities?" },
              ].map((symptom) => (
                <label key={symptom.name} className="flex items-center gap-3 cursor-pointer p-3 rounded hover:bg-white transition">
                  <input
                    type="checkbox"
                    name={symptom.name}
                    checked={formData[symptom.name as keyof SymptomData] as boolean}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-purple-600 rounded cursor-pointer"
                  />
                  <span className="text-slate-700 font-medium">{symptom.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Red Flags */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">⚠️ Urgent Symptoms</h2>
            <p className="text-slate-700 mb-4 font-medium">
              If you experience any of the following, seek immediate medical care:
            </p>
            <div className="space-y-3">
              {[
                { name: "severePain", label: "Sudden severe abdominal pain?" },
                { name: "fainting", label: "Fainting or dizziness with bleeding?" },
                { name: "vomiting", label: "Fever or vomiting with pain?" },
              ].map((symptom) => (
                <label key={symptom.name} className="flex items-center gap-3 cursor-pointer p-3 rounded hover:bg-red-100 transition">
                  <input
                    type="checkbox"
                    name={symptom.name}
                    checked={formData[symptom.name as keyof SymptomData] as boolean}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 rounded cursor-pointer"
                  />
                  <span className="text-slate-700 font-semibold">{symptom.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Medical History */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Medical History</h2>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Any known conditions?
              </label>
              <div className="space-y-2">
                {["PCOD", "endometriosis", "thyroid", "anemia", "weight"].map(
                  (condition) => (
                    <label key={condition} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white transition">
                      <input
                        type="checkbox"
                        checked={formData.knownConditions.includes(condition)}
                        onChange={(e) =>
                          handleConditionChange(condition, e.target.checked)
                        }
                        className="w-5 h-5 text-purple-600 rounded cursor-pointer"
                      />
                      <span className="text-slate-700 capitalize font-medium">{condition}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white transition mb-6">
              <input
                type="checkbox"
                name="familyHistory"
                checked={formData.familyHistory}
                onChange={handleInputChange}
                className="w-5 h-5 text-purple-600 rounded cursor-pointer"
              />
              <span className="text-slate-700 font-medium">
                Family history of hormonal or reproductive issues?
              </span>
            </label>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                How long have you had these symptoms?
              </label>
              <select
                name="symptomDuration"
                value={formData.symptomDuration}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              >
                <option value="">Select duration...</option>
                <option value="weeks">Less than 1 month</option>
                <option value="1">1 month</option>
                <option value="3">2-3 months</option>
                <option value="6">3-6 months</option>
                <option value="12">6-12 months</option>
                <option value="24">1-2 years</option>
                <option value="60">More than 2 years</option>
              </select>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Information</h2>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Any medications or treatments?
              </label>
              <textarea
                name="medications"
                value={formData.medications}
                onChange={handleInputChange}
                placeholder="List any medications, supplements, or treatments..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Describe your symptoms in your own words
              </label>
              <textarea
                name="symptomDescription"
                value={formData.symptomDescription}
                onChange={handleInputChange}
                placeholder="Please describe your symptoms, when they started, and any patterns you've noticed..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Consent */}
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Privacy & Usage</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Your responses are provided for educational purposes only and do not constitute medical advice. This tool is not a substitute for professional medical evaluation.
            </p>
            <p className="text-sm text-slate-600">
              💡 <strong>Tip:</strong> Share your results and symptom notes with your doctor for a comprehensive evaluation.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Your Triage Assessment
          </button>

          <Link
            to="/"
            className="block text-center text-slate-600 hover:text-purple-600 transition font-medium py-3 hover:bg-slate-50 rounded-lg"
          >
            ← Back to Home
          </Link>
        </form>
      </div>
    </Layout>
  );
}
