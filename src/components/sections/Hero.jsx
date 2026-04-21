import { FaPlay } from "react-icons/fa";
import ClockIcon from "../../assets/HomePageIcons/Clock.png";
import GroupIcon from "../../assets/HomePageIcons/GroupOfPeople.png";
import StarIcon from "../../assets/HomePageIcons/Star.png";
import VideoCameraIcon from "../../assets/HomePageIcons/VideoCamera.png";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(135deg, #1E3A8A 0%, #1E3A8A 35.36%, #3B82F6 70.71%)",
      }}
      className="py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              AI-Powered Education Platform
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Learn Smarter with
              <span className="block text-blue-200">
                Intelligent AI Tutoring
              </span>
            </h1>

            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Experience personalized learning with our advanced AI tutor that
              adapts to your pace, explains complex concepts clearly, and helps
              you master any subject.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-lg transition hover:bg-blue-50 hover:shadow-xl">
                <img
                  src={VideoCameraIcon}
                  alt="Watch demo"
                  className="h-8 w-6 py-0.5 mr-2"
                />
                Start Live AI Tutor Session
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="flex items-center gap-3 rounded-3xl">
                <img src={ClockIcon} alt="24/7 support" className="h-14 w-14" />
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200">Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl">
                <img
                  src={GroupIcon}
                  alt="Active learners"
                  className="h-14 w-14"
                />
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-blue-200">Active Learners</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl">
                <img src={StarIcon} alt="Rating" className="h-14 w-14" />
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-blue-200">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="h-96 w-96 rounded-2xl bg-white/10 backdrop-blur-sm">
              {/* Placeholder for illustration */}
              <div className="flex h-full items-center justify-center text-white/50">
                Illustration Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
