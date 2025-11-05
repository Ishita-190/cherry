import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, AlertTriangle, CheckCircle } from "lucide-react";

export default function Endometriosis() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Endometriosis: Understanding the Condition
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">What is Endometriosis?</h2>
            <p className="text-slate-600 mb-6">
              Endometriosis is a condition where tissue similar to the uterine lining grows outside the uterus. 
              It affects about 10% of women of reproductive age and can cause significant pain and fertility issues.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Common Symptoms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Severe menstrual cramps",
                "Chronic pelvic pain",
                "Pain during intercourse",
                "Heavy menstrual bleeding",
                "Pain during bowel movements",
                "Difficulty getting pregnant",
                "Fatigue and exhaustion",
                "Digestive issues during periods"
              ].map((symptom) => (
                <div key={symptom} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{symptom}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Types of Endometriosis</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li><strong>Superficial peritoneal endometriosis:</strong> Most common, affects pelvic lining</li>
              <li><strong>Ovarian endometriomas:</strong> Cysts on ovaries (chocolate cysts)</li>
              <li><strong>Deep infiltrating endometriosis:</strong> Grows into organs like bowel or bladder</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Diagnostic Delay</h3>
                  <p className="text-red-700 text-sm">
                    Endometriosis diagnosis takes an average of 6-8 years. Many women are told their pain is "normal" 
                    when it's actually a treatable condition.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Diagnosis & Treatment</h2>
            <p className="text-slate-600 mb-4">
              Diagnosis typically involves:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Detailed medical history and pelvic exam</li>
              <li>Ultrasound or MRI imaging</li>
              <li>Laparoscopy (definitive diagnosis)</li>
            </ul>

            <p className="text-slate-600 mb-4">
              Treatment options include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Pain management medications</li>
              <li>Hormonal therapies</li>
              <li>Surgical removal of endometrial tissue</li>
              <li>Fertility treatments if needed</li>
            </ul>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Seek Help
              </h3>
              <p className="text-purple-700 mb-4">
                Severe period pain is not normal. If you experience debilitating cramps or chronic pelvic pain, 
                speak with a healthcare provider about endometriosis.
              </p>
              <Link
                to="/symptom-checker"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Check Your Symptoms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}