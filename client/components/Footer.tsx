import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Cherry</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI-powered awareness and diagnostic support for women's health
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/symptom-checker" className="text-slate-400 hover:text-white transition-colors">
                  Symptom Checker
                </a>
              </li>
              <li>
                <a href="/#features" className="text-slate-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#resources" className="text-slate-400 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#mission" className="text-slate-400 hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#research" className="text-slate-400 hover:text-white transition-colors">
                  Research Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Disclaimer */}
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            <strong className="text-slate-300">⚠️ Disclaimer:</strong> This tool provides educational information and suggested triage guidance. It does not replace professional medical diagnosis or treatment. Always consult a healthcare provider.
          </p>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; 2024 Cherry. All rights reserved. Built with care for women's health.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#github" className="hover:text-slate-300 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-slate-300 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
