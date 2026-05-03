import { Link } from "react-router-dom";
import VideoCameraIcon from "../../assets/HomePageIcons/VideoCamera.png";
import ClockIcon from "../../assets/HomePageIcons/Clock.png";
import GroupIcon from "../../assets/HomePageIcons/GroupOfPeople.png";
import StarIcon from "../../assets/HomePageIcons/Star.png";
import StudentIcon from "../../assets/HomePageIcons/student.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1E3A8A_0%,#1E3A8A_35%,#3B82F6_70%)]"></div>

      {/* Glow circles */}
      <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-white">
            {/* badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              AI-Powered Education Platform
            </div>

            {/* heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Learn Smarter with
              <span className="block text-blue-200">
                Intelligent AI Tutoring
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg text-blue-100">
              Experience personalized, real-time education with AI that adapts
              to your learning style, monitors progress, and fills knowledge
              gaps intelligently.
            </p>

            {/* buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/login"
                className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 shadow-xl transition hover:bg-blue-50"
              >
                <img src={VideoCameraIcon} className="h-6" />
                Start Live AI Tutor Session →
              </Link>

              <Link
                to="/analytics"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                Watch Demo
              </Link>
            </div>

            {/* stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <img src={ClockIcon} className="h-10 w-10" />
                <div>
                  <div className="text-xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Available</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <img src={GroupIcon} className="h-10 w-10" />
                <div>
                  <div className="text-xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Active Learners</div>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <img src={StarIcon} className="h-10 w-10" />
                <div>
                  <div className="text-xl font-bold">4.9/5</div>
                  <div className="text-blue-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Student mascot */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={StudentIcon}
              alt="Cognixel AI mascot"
              className="w-[420px] lg:w-[500px] drop-shadow-2xl select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
