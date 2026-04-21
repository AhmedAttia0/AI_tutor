import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import BlueBrain from "../../assets/BlueBrain.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] shadow-sm">
                <img
                  src={BlueBrain}
                  alt="Cognixel.AI logo"
                  className="h-[28px] w-[20px]"
                />
              </div>
              <span className="text-xl font-bold">Cognixel.AI</span>
            </div>
            <p className="mb-6 text-slate-300">
              Revolutionizing education with intelligent AI tutoring. Learn
              smarter, faster, and more effectively with personalized AI-powered
              education.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 transition hover:text-white"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition hover:text-white"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 transition hover:text-white"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  AI Tutor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Study Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Progress Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 transition hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-slate-400">
              © 2024 Cognixel.AI. All rights reserved.
            </p>
            <p className="text-slate-400">Made with ❤️ for better education</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
