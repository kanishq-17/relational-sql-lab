import RotatingText from "@/components/UI/RotatingText";
import { useState } from "react";

const WhyUs = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Clarity",
    },
    {
      id: 1,
      title: "Practice",
    },
    {
      id: 1,
      title: "Structure",
    },
    {
      id: 1,
      title: "Insight",
    },
    {
      id: 1,
      title: "Progress",
    },
  ]);

  return (
    <section className="w-full h-screen bg-[#0c0c13] px-6">
      <div>
        <h2 className="text-center text-[#CED4DA] font-medium text-5xl pt-22 flex items-center gap-3">
          Customize the Way You Learn{" "}
          <RotatingText
            texts={["SQL", "Queries", "Mongo", "Databases"]}
            mainClassName="px-2  bg-cyan-300 text-black overflow-hidden  justify-center rounded-lg w-fit"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>
        <p className="text-[#6C757D] mt-4 w-1/3 text-sm">
          From basic queries to advanced concepts, RelationalSQL Lab helps you
          learn SQL in a way that actually makes sense.
        </p>
      </div>

      <div className="flex items-center justify-around w-1/2 m-auto mt-20 rounded-xl bg-[#37393b] text-[#6c757d] py-1">
        {tabs.map((t) => (
          <p className="rounded-lg p-1.5 px-2 hover:bg-[#ADB5BD] hover:text-slate-900 transition-all duration-200 ease-linear cursor-default">
            {t.title}
          </p>
        ))}
      </div>

      <div className="w-[80%] m-auto rounded-xl bg-[#ADB5BD] mt-5 h-82"></div>
    </section>
  );
};

export default WhyUs;
