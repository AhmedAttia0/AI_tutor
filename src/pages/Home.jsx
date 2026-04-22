import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import LearningModes from "../components/sections/LearningModes";
import DashboardGrid from "../components/sections/DashboardGrid";

import Footer from "../components/sections/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <LearningModes />
      <DashboardGrid />
      <Footer />
    </div>
  );
};

export default Home;
