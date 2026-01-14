import { useState } from "react";

import LandingPage from "@/sections/LandingPage";
import Home from "@/sections/HomePage";
import WhyUs from "@/sections/WhyUs";
import HowItWorks from "@/sections/HowItWorks";
import ComparisonPage from "@/sections/ComparisonPage";
import Footer from "../common/Footer";

const MainLayout = () => {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding ? (
        <LandingPage onFinish={() => setShowLanding(false)} />
      ) : (
        <>
      <Home />
      <WhyUs />
      <HowItWorks />
      <ComparisonPage />
      <Footer />
      </>
      )}
    </>
  );
};

export default MainLayout;
