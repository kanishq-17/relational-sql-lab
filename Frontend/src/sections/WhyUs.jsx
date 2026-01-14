import RotatingText from "@/components/UI/RotatingText";
import { useEffect, useState } from "react";

const WhyUs = () => {
  const tabs = [
    { id: 0, title: "Clarity", bg: "bg-sky-300" },
    { id: 1, title: "Practice", bg: "bg-pink-300" },
    { id: 2, title: "Structure", bg: "bg-green-300" },
    { id: 3, title: "Insight", bg: "bg-yellow-300" },
    { id: 4, title: "Progress", bg: "bg-indigo-300" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  // 🔁 Auto rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen bg-[#0c0c13] px-6">
      {/* Heading */}
      <div className="text-center flex justify-center gap-3 pt-20">
        <h2 className="text-[#CED4DA] font-medium text-5xl">
          Customize the Way You Learn
        </h2>
        <RotatingText
          texts={["SQL", "Queries", "Mongo", "Databases"]}
          mainClassName="px-2  bg-cyan-300 text-black overflow-hidden  justify-center rounded-lg w-fi text-5xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <p className="text-[#6C757D] mt-4 w-1/3 mx-auto text-sm text-center">
        Learn concepts step-by-step with clarity, structure, and real examples.
      </p>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-3 w-fit mx-auto mt-16 rounded-xl bg-[#1a1a23] p-2">
        {tabs.map((tab, index) => (
          <p
            key={tab.id}
            className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-300
              ${
                index === activeTab
                  ? "bg-white text-black scale-105"
                  : "text-[#ADB5BD]"
              }`}
          >
            {tab.title}
          </p>
        ))}
      </div>

      {/* Active Tab Content */}
      <div
        className={`w-[80%] h-84 mx-auto mt-10 rounded-xl flex items-center justify-center text-black text-xl font-medium transition-all duration-500 ${tabs[activeTab].bg}`}
      >
        {tabs[activeTab].title} Content Goes Here
      </div>
    </section>
  );
};

export default WhyUs;
