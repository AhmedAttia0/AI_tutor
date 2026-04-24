import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/HomePageHero/Hero";
import LearningModes from "../../components/LearningModes/LearningModes";
import DashboardGrid from "../../components/DashboardGrid/DashboardGrid";

import Footer from "../../components/Footer/Footer";

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
