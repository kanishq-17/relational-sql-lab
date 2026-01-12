import { useState } from "react";
// import Footer from "./components/common/Footer";
import ComparisonPage from "./sections/ComparisonPage";
import Home from "./sections/HomePage";
import HowItWorks from "./sections/HowItWorks";
import LandingPage from "./sections/LandingPage";
import WhyUs from "./sections/WhyUs";

const App = () => {
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
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default App;
