import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import BlueBrain from "../../assets/BlueBrain.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Logo + Description */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                <img
                  src={BlueBrain}
                  alt="Cognixel.AI logo"
                  className="h-[21px] w-[21px]"
                />
              </div>
              <span className="text-lg font-bold">Cognixel.AI</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-200">
              Empowering learners with intelligent AI-powered education.
            </p>
          </div>

          {/* Col 2 — Platform */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 transition hover:text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Connect */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition hover:bg-white/25"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-10 border-t border-white/15" />

        {/* ── Copyright ── */}
        <p className="mt-8 text-center text-sm text-blue-200">
          © 2024 Cognixel.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
