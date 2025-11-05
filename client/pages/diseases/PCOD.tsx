import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, AlertTriangle, CheckCircle } from "lucide-react";

export default function PCOD() {
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
            PCOD / PCOS: Polycystic Ovary Syndrome
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">What is PCOD/PCOS?</h2>
            <p className="text-slate-600 mb-6">
              Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting 6-13% of women of reproductive age. 
              It's characterized by irregular periods, excess androgen levels, and polycystic ovaries.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Common Symptoms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Irregular or missed periods",
                "Excess hair growth (hirsutism)",
                "Acne and oily skin",
                "Weight gain or difficulty losing weight",
                "Hair thinning or male-pattern baldness",
                "Difficulty getting pregnant",
                "Mood changes and depression",
                "Sleep problems"
              ].map((symptom) => (
                <div key={symptom} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{symptom}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Causes & Risk Factors</h2>
            <p className="text-slate-600 mb-4">
              The exact cause is unknown, but factors include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Insulin resistance</li>
              <li>Genetics and family history</li>
              <li>Inflammation</li>
              <li>Hormonal imbalances</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
                  <p className="text-amber-700 text-sm">
                    Up to 70% of women with PCOS remain undiagnosed. If you experience these symptoms, 
                    consult with a healthcare provider for proper evaluation.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Management & Treatment</h2>
            <p className="text-slate-600 mb-4">
              While there's no cure, PCOS can be effectively managed through:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Lifestyle changes (diet and exercise)</li>
              <li>Hormonal birth control</li>
              <li>Insulin-sensitizing medications</li>
              <li>Fertility treatments if needed</li>
              <li>Treatment for specific symptoms (acne, hair growth)</li>
            </ul>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Take Action
              </h3>
              <p className="text-purple-700 mb-4">
                If you suspect you might have PCOS, consider using our symptom checker or consulting with a healthcare provider.
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