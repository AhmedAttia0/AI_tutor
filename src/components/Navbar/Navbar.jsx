import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ImageDiv from "../../assets/image.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] shadow-sm">
            <img src={ImageDiv} alt="Cognixel.AI logo" className="" />
          </div>
          <span className="text-lg font-inter font-bold leading-8 text-[#1E3A8A]">
            Cognixel.AI
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#1E3A8A] transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="navbar-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/exam" className="navbar-link">
                My Sessions
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="navbar-link">
                Progress
              </Link>
            </li>
            <li>
              <Link to="/stuck_point" className="navbar-link">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[#1E3A8A] transition hover:bg-slate-200"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C13.1046 22 14 21.1046 14 20H10C10 21.1046 10.8954 22 12 22Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 16.5V11C18 7.68629 16.2091 4.86188 13.25 3.80415V3C13.25 2.30964 12.6904 1.75 12 1.75C11.3096 1.75 10.75 2.30964 10.75 3V3.80415C7.79086 4.86188 6 7.68629 6 11V16.5L4.25 18.25V19H19.75V18.25L18 16.5Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <FaUserCircle className="h-11 w-11 text-slate-400" />
        </div>
      </div>

      <div
        className={`${mobileOpen ? "block" : "hidden"} md:hidden border-t border-slate-200 bg-white px-4 py-3`}
      >
        <ul className="space-y-3">
          <li>
            <Link to="/" className="navbar-link block">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/exam" className="navbar-link block">
              My Sessions
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="navbar-link block">
              Progress
            </Link>
          </li>
          <li>
            <Link to="/stuck_point" className="navbar-link block">
              Resources
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
