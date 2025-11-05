import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, BarChart3, Target, ArrowRight } from "lucide-react";

export default function OurMission() {
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h1>
          <p className="text-xl text-slate-600">Advancing women's health through research and awareness</p>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-slate-900">Our Goal</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We're on a mission to bridge the critical gap in women's health research. For too long, 
              women's health conditions have been underdiagnosed, under-researched, and misunderstood. 
              Our platform aims to change that by empowering women with knowledge and contributing 
              valuable data to advance medical research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Better Diagnosis</h3>
                <p className="text-sm text-slate-600">Reduce diagnostic delays from years to months</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Research Impact</h3>
                <p className="text-sm text-slate-600">Generate insights for better treatments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Community Support</h3>
                <p className="text-sm text-slate-600">Connect women with resources and care</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Research Gap We're Addressing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Current Challenges:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Only 4% of research funding goes to women-only studies</li>
                  <li>• Average 6-8 year delay for endometriosis diagnosis</li>
                  <li>• 70% of PCOS cases remain undiagnosed</li>
                  <li>• Limited understanding of hormonal health impacts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Our Solution:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Collect anonymous symptom data at scale</li>
                  <li>• Identify patterns in underdiagnosed conditions</li>
                  <li>• Share insights with medical researchers</li>
                  <li>• Improve diagnostic tools and awareness</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Your Data Helps</h2>
            <p className="text-slate-600 mb-6">
              When you share your health experiences with us, you're contributing to a larger movement 
              to improve women's healthcare. Your anonymous data helps researchers:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Identify Common Patterns</h4>
                  <p className="text-slate-600 text-sm">Discover symptom combinations that indicate specific conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-cyan-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Improve Diagnostic Tools</h4>
                  <p className="text-slate-600 text-sm">Develop better screening methods and risk assessments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Advance Treatment Research</h4>
                  <p className="text-slate-600 text-sm">Guide development of more effective therapies</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Ready to Make a Difference?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of women contributing to better healthcare research. 
                Your participation is completely anonymous and helps advance medical science.
              </p>
              <Link
                to="/symptom-checker"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contribute Your Data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}