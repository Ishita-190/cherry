import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Plus, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function PeriodTracker() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateNextPeriod = () => {
    if (!lastPeriod) return null;
    const lastDate = new Date(lastPeriod);
    const nextDate = new Date(lastDate.getTime() + parseInt(cycleLength) * 24 * 60 * 60 * 1000);
    return nextDate.toLocaleDateString();
  };

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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Period Tracker</h1>
          <p className="text-xl text-slate-600">Track your menstrual cycle and predict your next period</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-600" />
              Track Your Cycle
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Period Start Date
                </label>
                <input
                  type="date"
                  value={lastPeriod}
                  onChange={(e) => setLastPeriod(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Cycle Length (days)
                </label>
                <select
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {Array.from({length: 15}, (_, i) => i + 21).map(days => (
                    <option key={days} value={days}>{days} days</option>
                  ))}
                </select>
              </div>

              {calculateNextPeriod() && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Predicted Next Period</h3>
                  <p className="text-purple-700 text-lg">{calculateNextPeriod()}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-cyan-600" />
              Cycle Insights
            </h2>

            <div className="space-y-4">
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-800 mb-2">Normal Cycle Range</h4>
                <p className="text-cyan-700 text-sm">21-35 days is considered normal for most women</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">Track Symptoms</h4>
                <p className="text-amber-700 text-sm">Note pain levels, flow, and other symptoms for better health insights</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Consult Healthcare Provider</h4>
                <p className="text-green-700 text-sm">If cycles are irregular or concerning symptoms persist</p>
              </div>
            </div>

            <Link
              to="/symptom-checker"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Check Symptoms
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}