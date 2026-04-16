import { useState } from "react";
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface SymptomData {
  // Basic & Demographic
  age: string;
  pregnant: string;
  genderAtBirth: string;
  breastfeeding: string;
  lastPeriod: string;
  
  // Menstrual & Cycle History
  periodsRegular: string;
  cycleLength: string;
  heavyBleeding: string;
  pelvicPain: string;
  painScale: string;
  bleedingBetween: string;
  missedPeriods: string;
  
  // Pain & Symptom Severity
  chronicPelvicPain: string;
  painInterference: string;
  painDuringActivities: string;
  symptomDuration: string;
  
  // PCOS & Hormonal Screening
  acneHairSkin: string;
  weightGain: string;
  hairThinning: string;
  diabetesHistory: string;
  
  // Endometriosis Screening
  bowelPain: string;
  radiatingPain: string;
  ovarianCysts: string;
  
  // Thyroid Screening
  fatigue: string;
  temperatureSensitivity: string;
  weightChanges: string;
  moodChanges: string;
  
  // UTI / Bladder Screening
  burningUrination: string;
  urinaryUrgency: string;
  urineChanges: string;
  
  // Breast Health
  breastLumps: string;
  nippleDischarge: string;
  breastSkinChanges: string;
  familyBreastCancer: string;
  
  // Fertility & Reproductive
  tryingConceive: string;
  conceivingDifficulty: string;
  pregnancyHistory: string;
  
  // Red-Flag / Emergency Symptoms
  severePain: string;
  feverVomiting: string;
  tamponSymptoms: string;
  
  // General Medical & Medication History
  knownConditions: string[];
  medications: string;
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
  // Emergency symptoms check
  if (
    symptoms.severePain === "yes" ||
    symptoms.feverVomiting === "yes" ||
    symptoms.tamponSymptoms === "yes"
  ) {
    return {
      level: "emergency",
      title: "🚨 Seek Immediate Medical Care",
      description: "Your symptoms require urgent medical evaluation. Please visit an emergency department or call emergency services.",
      recommendations: [
        "Please go to the nearest emergency department immediately",
        "Call emergency services if experiencing severe symptoms",
        "Inform medical staff about all symptoms reported",
      ],
      icon: <AlertCircle className="w-12 h-12 text-red-600" />,
      colorClasses: "bg-red-50 border-red-300",
    };
  }

  let riskScore = 0;
  const conditions: string[] = [];

  // PCOS risk factors
  if (symptoms.periodsRegular === "no") riskScore += 2;
  if (symptoms.acneHairSkin === "yes") riskScore += 2;
  if (symptoms.weightGain === "yes") riskScore += 1;
  if (symptoms.hairThinning === "yes") riskScore += 2;
  if (symptoms.diabetesHistory === "yes") riskScore += 2;
  
  if ((symptoms.periodsRegular === "no" && symptoms.acneHairSkin === "yes") || 
      (symptoms.weightGain === "yes" && symptoms.hairThinning === "yes")) {
    conditions.push("Possible PCOS");
  }

  // Endometriosis risk factors
  if (symptoms.pelvicPain === "yes" && parseInt(symptoms.painScale) >= 7) riskScore += 3;
  if (symptoms.chronicPelvicPain === "yes") riskScore += 2;
  if (symptoms.painDuringActivities === "yes") riskScore += 2;
  if (symptoms.bowelPain === "yes") riskScore += 2;
  if (symptoms.radiatingPain === "yes") riskScore += 1;
  if (symptoms.ovarianCysts === "yes") riskScore += 2;
  
  if ((symptoms.chronicPelvicPain === "yes" && symptoms.painDuringActivities === "yes") ||
      (symptoms.bowelPain === "yes" && symptoms.radiatingPain === "yes")) {
    conditions.push("Possible Endometriosis");
  }

  // Thyroid screening
  if (symptoms.fatigue === "yes") riskScore += 1;
  if (symptoms.temperatureSensitivity === "yes") riskScore += 1;
  if (symptoms.weightChanges === "yes") riskScore += 1;
  if (symptoms.moodChanges === "yes") riskScore += 1;
  
  if ([symptoms.fatigue, symptoms.temperatureSensitivity, symptoms.weightChanges, symptoms.moodChanges]
      .filter(s => s === "yes").length >= 3) {
    conditions.push("Possible Thyroid Disorder");
  }

  // Heavy bleeding/fibroids
  if (symptoms.heavyBleeding === "yes") {
    riskScore += 2;
    conditions.push("Possible Fibroids or Bleeding Disorder");
  }

  // UTI screening
  if (symptoms.burningUrination === "yes" || symptoms.urinaryUrgency === "yes" || symptoms.urineChanges === "yes") {
    conditions.push("Possible UTI");
    riskScore += 1;
  }

  // Breast health concerns
  if (symptoms.breastLumps === "yes" || symptoms.nippleDischarge === "yes" || symptoms.breastSkinChanges === "yes") {
    conditions.push("Breast Health Concern");
    riskScore += 2;
  }

  // Fertility concerns
  if (symptoms.conceivingDifficulty === "yes") {
    riskScore += 2;
    conditions.push("Fertility Concern");
  }

  // Determine triage level
  if (riskScore >= 8 || conditions.includes("Breast Health Concern")) {
    return {
      level: "high",
      title: "🟠 High Priority - Specialist Referral Recommended",
      description: "Your symptoms suggest you should see a specialist for evaluation.",
      recommendations: [
        "Schedule appointment with gynecologist within 1-2 weeks",
        "Keep detailed symptom diary",
        "Prepare list of questions for your doctor",
        "Consider bringing a support person to appointment",
      ],
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      colorClasses: "bg-orange-50 border-orange-300",
    };
  } else if (riskScore >= 4) {
    return {
      level: "moderate",
      title: "🟡 Moderate Priority - Doctor Visit Recommended",
      description: "Your symptoms warrant medical evaluation by your healthcare provider.",
      recommendations: [
        "Schedule appointment with your doctor within 2-4 weeks",
        "Track symptoms and menstrual cycle",
        "Note any patterns or triggers",
        "Prepare questions about your symptoms",
      ],
      icon: <CheckCircle className="w-12 h-12 text-yellow-600" />,
      colorClasses: "bg-yellow-50 border-yellow-300",
    };
  } else {
    return {
      level: "low",
      title: "🟢 Low Priority - Monitor and Self-Care",
      description: "Your symptoms appear manageable with monitoring and self-care.",
      recommendations: [
        "Continue tracking symptoms for patterns",
        "Maintain healthy lifestyle habits",
        "Contact doctor if symptoms worsen",
        "Schedule routine check-ups as recommended",
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
    pregnant: "",
    genderAtBirth: "",
    breastfeeding: "",
    lastPeriod: "",
    periodsRegular: "",
    cycleLength: "",
    heavyBleeding: "",
    pelvicPain: "",
    painScale: "",
    bleedingBetween: "",
    missedPeriods: "",
    chronicPelvicPain: "",
    painInterference: "",
    painDuringActivities: "",
    symptomDuration: "",
    acneHairSkin: "",
    weightGain: "",
    hairThinning: "",
    diabetesHistory: "",
    bowelPain: "",
    radiatingPain: "",
    ovarianCysts: "",
    fatigue: "",
    temperatureSensitivity: "",
    weightChanges: "",
    moodChanges: "",
    burningUrination: "",
    urinaryUrgency: "",
    urineChanges: "",
    breastLumps: "",
    nippleDischarge: "",
    breastSkinChanges: "",
    familyBreastCancer: "",
    tryingConceive: "",
    conceivingDifficulty: "",
    pregnancyHistory: "",
    severePain: "",
    feverVomiting: "",
    tamponSymptoms: "",
    knownConditions: [],
    medications: "",
  });
  const [triageResult, setTriageResult] = useState<TriageResult | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

          <div
            className={`border-l-8 rounded-2xl p-8 mb-8 ${triageResult.colorClasses}`}
          >
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
                <strong>Cycle Length:</strong>{" "}
                {formData.cycleLength || "Not provided"} days
              </p>
              <p>
                <strong>Cycle Regularity:</strong>{" "}
                {formData.periodRegular || "Not specified"}
              </p>
              <p>
                <strong>Symptom Duration:</strong>{" "}
                {formData.symptomDuration
                  ? `${formData.symptomDuration} months`
                  : "Not specified"}
              </p>
              <div>
                <strong>Symptoms Present:</strong>
                <ul className="mt-2 ml-4 list-disc space-y-1 text-slate-700">
                  {formData.pelvicPain && <li>Pelvic pain</li>}
                  {formData.heavyBleeding && <li>Heavy bleeding</li>}
                  {formData.painIntercourse && <li>Pain during intercourse</li>}
                  {formData.difficulty_conceiving && (
                    <li>Difficulty conceiving</li>
                  )}
                  {formData.acne_hirsutism_weight && (
                    <li>Acne/hirsutism/weight changes</li>
                  )}
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
              <strong>⚠️ Disclaimer:</strong> This tool provides educational
              information and suggested triage guidance based on your responses.
              It does NOT replace professional medical diagnosis or treatment.
              Always consult a qualified healthcare provider for proper
              evaluation and care.
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
            Answer questions about your symptoms to get personalized guidance.
            This is not a diagnosis and does not replace professional medical
            advice.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic & Demographic */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Basic & Demographic</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Are you currently pregnant or possibly pregnant?</label>
                <div className="space-y-2">
                  {["yes", "no", "unsure"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="pregnant"
                        value={option}
                        checked={formData.pregnant === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Gender assigned at birth</label>
                <div className="space-y-2">
                  {["female", "intersex", "other"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="genderAtBirth"
                        value={option}
                        checked={formData.genderAtBirth === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Are you currently breastfeeding?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="breastfeeding"
                        value={option}
                        checked={formData.breastfeeding === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">First day of last menstrual period</label>
                <input
                  type="date"
                  name="lastPeriod"
                  value={formData.lastPeriod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Menstrual & Cycle History */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Menstrual & Cycle History</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Are your periods regular?</label>
                <div className="space-y-2">
                  {["yes", "no", "don't get periods"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="periodsRegular"
                        value={option}
                        checked={formData.periodsRegular === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Average cycle length (days)</label>
                <input
                  type="number"
                  name="cycleLength"
                  value={formData.cycleLength}
                  onChange={handleInputChange}
                  placeholder="e.g., 28"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Do you experience heavy bleeding or pass large blood clots?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="heavyBleeding"
                        value={option}
                        checked={formData.heavyBleeding === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Do you experience pelvic or abdominal pain before or during periods?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="pelvicPain"
                        value={option}
                        checked={formData.pelvicPain === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.pelvicPain === "yes" && (
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Pain scale (0-10)</label>
                  <select
                    name="painScale"
                    value={formData.painScale}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select pain level</option>
                    {Array.from({length: 11}, (_, i) => (
                      <option key={i} value={i}>{i} - {i === 0 ? "No pain" : i <= 3 ? "Mild" : i <= 6 ? "Moderate" : "Severe"}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Do you bleed between periods or after sex?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="bleedingBetween"
                        value={option}
                        checked={formData.bleedingBetween === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you ever missed 3+ consecutive periods when not pregnant?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="missedPeriods"
                        value={option}
                        checked={formData.missedPeriods === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pain & Symptom Severity */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pain & Symptom Severity</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Do you have chronic pelvic pain outside of your period?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="chronicPelvicPain"
                        value={option}
                        checked={formData.chronicPelvicPain === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Does pain interfere with daily activities, work, or sleep?</label>
                <div className="space-y-2">
                  {["none", "mild", "moderate", "severe"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="painInterference"
                        value={option}
                        checked={formData.painInterference === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Does pain worsen during sex, bowel movements, or urination?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="painDuringActivities"
                        value={option}
                        checked={formData.painDuringActivities === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">How long have your symptoms been present?</label>
                <div className="space-y-2">
                  {["<1 week", "1-4 weeks", "1-6 months", ">6 months", "years"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="symptomDuration"
                        value={option}
                        checked={formData.symptomDuration === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PCOS & Hormonal Screening */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">PCOS & Hormonal Screening</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you noticed acne, excess facial/body hair, or dark patches of skin?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="acneHairSkin"
                        value={option}
                        checked={formData.acneHairSkin === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you experienced unexplained weight gain or difficulty losing weight?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="weightGain"
                        value={option}
                        checked={formData.weightGain === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Do you have hair thinning or hair loss on the scalp?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="hairThinning"
                        value={option}
                        checked={formData.hairThinning === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you ever been diagnosed with high insulin, prediabetes, or type 2 diabetes?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="diabetesHistory"
                        value={option}
                        checked={formData.diabetesHistory === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Red-Flag / Emergency Symptoms */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">⚠️ Red-Flag / Emergency Symptoms</h2>
            <p className="text-slate-700 mb-4 font-medium">If you experience any of the following, seek immediate medical care:</p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Sudden severe abdominal or pelvic pain?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="severePain"
                        value={option}
                        checked={formData.severePain === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Fever, vomiting, or dizziness with bleeding or pain?</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="feverVomiting"
                        value={option}
                        checked={formData.feverVomiting === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Using a tampon AND experiencing sudden fever, rash, confusion, or low blood pressure? (TSS screen)</label>
                <div className="space-y-2">
                  {["yes", "no"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="tamponSymptoms"
                        value={option}
                        checked={formData.tamponSymptoms === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* General Medical & Medication History */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">General Medical & Medication History</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Have you been diagnosed with any of the following?</label>
                <div className="space-y-2">
                  {["PCOS", "Endometriosis", "Thyroid disorder", "Anemia", "Diabetes", "None", "Other"].map((condition) => (
                    <label key={condition} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.knownConditions.includes(condition)}
                        onChange={(e) => handleConditionChange(condition, e.target.checked)}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span>{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">List medications or treatments (if any)</label>
                <textarea
                  name="medications"
                  value={formData.medications}
                  onChange={handleInputChange}
                  placeholder="List any medications, supplements, or treatments..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Additional screening sections would go here - Endometriosis, Thyroid, UTI, Breast Health, Fertility sections */}
          
          {/* Consent */}
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Privacy & Usage</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Your responses are provided for educational purposes only and do not constitute medical advice. 
              This tool is not a substitute for professional medical evaluation.
            </p>
            <p className="text-sm text-slate-600">
              💡 <strong>Tip:</strong> Share your results and symptom notes with your doctor for a comprehensive evaluation.
            </p>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Your Assessment
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
