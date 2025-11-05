import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, AlertTriangle, Users } from "lucide-react";

export default function WomensHealthGap() {
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
            The Women's Health Research Gap
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Understanding the Problem</h2>
            <p className="text-slate-600 mb-6">
              Women's health has been historically underfunded and under-researched, creating significant gaps 
              in our understanding of conditions that primarily affect women. This has led to delayed diagnoses, 
              inadequate treatments, and poorer health outcomes.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <BarChart3 className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-red-800 mb-2">Research Funding</h3>
                <p className="text-red-700 text-sm">
                  Only 4% of healthcare research funding is dedicated to women-only studies, 
                  despite women making up 51% of the population.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-semibold text-amber-800 mb-2">Clinical Trials</h3>
                <p className="text-amber-700 text-sm">
                  Women were largely excluded from clinical trials until 1993, 
                  leading to treatments based primarily on male physiology.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Impact on Women's Health</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li><strong>Delayed Diagnoses:</strong> Conditions like endometriosis take 6-8 years to diagnose</li>
              <li><strong>Misunderstood Symptoms:</strong> Heart disease symptoms differ in women but are often missed</li>
              <li><strong>Limited Treatment Options:</strong> Fewer targeted therapies for women-specific conditions</li>
              <li><strong>Pain Dismissal:</strong> Women's pain is often minimized or attributed to emotional causes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Conditions Most Affected</h2>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800">Reproductive Health</h4>
                <p className="text-slate-600 text-sm">PCOS, endometriosis, fibroids - often underdiagnosed and undertreated</p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-slate-800">Autoimmune Diseases</h4>
                <p className="text-slate-600 text-sm">75% of autoimmune patients are women, yet research remains limited</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800">Mental Health</h4>
                <p className="text-slate-600 text-sm">Hormonal impacts on mood and cognition are poorly understood</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Moving Forward</h2>
            <p className="text-slate-600 mb-4">
              Addressing the women's health gap requires:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6">
              <li>Increased funding for women's health research</li>
              <li>Better representation in clinical trials</li>
              <li>Education for healthcare providers about gender differences</li>
              <li>Patient advocacy and awareness</li>
              <li>Data collection to identify research priorities</li>
            </ul>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Be Part of the Solution
              </h3>
              <p className="text-purple-700 mb-4">
                By sharing your health experiences anonymously, you can help researchers identify gaps 
                and improve care for future generations of women.
              </p>
              <Link
                to="/symptom-checker"
                className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Contribute to Research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}