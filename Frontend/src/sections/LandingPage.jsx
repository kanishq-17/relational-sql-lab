import { useEffect, useState } from "react";

const LandingPage = ({ onFinish }) => {
  const [counter, setCounter] = useState(12);
  const [exit, setExit] = useState(false);

  // Counter logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          setTimeout(() => setExit(true), 300); // small pause
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(intervalId);
  }, []);

  // After exit animation completes → load home
  useEffect(() => {
    if (exit) {
      setTimeout(() => {
        onFinish();
      }, 700); // animation duration
    }
  }, [exit, onFinish]);

  return (
    <main
      className={`
        fixed inset-0 z-[999]
        bg-[#0c0c13]
        flex justify-center items-center
        transition-transform duration-700 ease-in-out
        ${exit ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="text-center relative">
        <p className="text-neutral-400 absolute right-0 -top-2">
          {counter}
        </p>

        <h2 className="leading-[4.5rem] text-6xl text-white font-medium">
          learn. <br />
          write. <br />
          analyze. <br />
          run.
        </h2>
      </div>

      <p className="text-neutral-300/80 absolute w-1/3 bottom-8 left-8 text-sm">
        RelationalSQL Lab is an interactive platform to learn SQL using real
        queries, examples, and structured explanations.
      </p>
    </main>
  );
};

export default LandingPage;
