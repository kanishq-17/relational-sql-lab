import { FaLocationArrow } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <section className="w-full bg-linear-to-b bg-[linear-gradient(180deg,hsl(240deg_23%_6%)_0%,hsl(242deg_24%_7%)_8%,hsl(243deg_25%_8%)_17%,hsl(242deg_27%_9%)_25%,hsl(241deg_28%_11%)_33%,hsl(240deg_30%_12%)_42%,hsl(240deg_31%_13%)_50%,hsl(240deg_27%_14%)_58%,hsl(240deg_24%_15%)_67%,hsl(240deg_21%_16%)_75%,hsl(240deg_19%_17%)_83%,hsl(240deg_16%_18%)_92%,hsl(240deg_14%_19%)_100%)] h-screen">
      <div className="flex flex-col items-center justify-around gap-7 pt-10">
        <p className="rounded-full outline w-fit m-auto p-1 px-2.5 text-[.6rem] text-[#6c757d]">
          How It Works
        </p>
        <h2 className="text-5xl font-medium">
          Learn With Clarity, Not Confusion
        </h2>
        <p className="w-1/2 text-center text-sm text-[#6c757d]">
          RelationalSQL Lab is designed to help you move from basic
          understanding to real confidence through a clear, structured learning
          process.
        </p>
      </div>

      <div className="w-[96%] m-auto flex justify-center gap-5 mt-10">
        {/* //? CARD 1 */}
        <div className="w-1/3 bg-[#edefef] rounded-lg shadow">
          <h4 className="text-center text-slate-900 pt-5 w-fit m-auto">
            Explore Structured Topics
          </h4>
          <div className="my-5 bg-white w-1/2 p-2 m-auto text-center flex flex-col gap-3 rounded-lg text-sm mb-2 shadow-xl">
            <p className="bg-neutral-300/80 rounded-md p-2 text-white h-4"></p>
            <p className="bg-neutral-300/80 rounded-md p-2 text-white h-4"></p>
            <p className="bg-neutral-950/90 rounded-md p-2 text-white">
              Aggregate
            </p>
          </div>
          <div className="w-2/3 flex items-center justify-around text-center m-auto my-7 text-sm font-medium text-[#6c757d] relative">
            <p className="rounded-md p-2 bg-white outline outline-zinc-200 shadow">
              Easy
            </p>
            <p className="rounded-md p-2 bg-orange-400 outline outline-zinc-200 text-white scale-105 shadow-xl">
              Medium
            </p>
            <p className="rounded-md p-2 bg-white outline outline-zinc-200 shadow">
              Hard
            </p>
            <div className="absolute bottom-0 left-5">
              <FaLocationArrow className="rotate-270 text-slate-900 text-lg absolute left-40 -bottom-2" />
              <p className="absolute bg-slate-900 rounded-full px-2.5 py-1.5 text-white text-[.6rem] left-42 -bottom-7">
                You
              </p>
            </div>
          </div>

          <p className="text-center px-3 text-sm mb-5 text-[#6c757d] mt-14">
            Start by choosing a topic that matches your current level
          </p>
        </div>

        {/* //? CARD 2 */}
        <div className="w-1/3 bg-[#edefef] rounded-lg shadow">
          <h4 className="text-center text-slate-900 pt-5 w-fit m-auto">
            Understand Through Real Queries
          </h4>

          {/* Queries Design */}
          <div className="my-5 w-[95%] m-auto relative flex items-center justify-center min-h-52">
            <div className="text-xs">
              <p className=" rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute top-5">
                {" "}
                where
              </p>
              <p className=" rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute bottom-3">
                {" "}
                order by desc
              </p>
              <p className=" rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute right-0">
                {" "}
                group by age
              </p>
              <p className=" rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute left-0">
                {" "}
                like "a%"
              </p>
              <p className=" rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute top-5 left-10">
                {" "}
                having
              </p>
            </div>
            <div>
              <p className="rounded-sm bg-white text-xl p-3 tracking-wider font-medium z-50">
                SELECT * FROM
              </p>
            </div>
            <div>
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute bottom-0 right-5">
                {" "}
                exists
              </p>{" "}
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute bottom-5 left-5">
                {" "}
                not exists
              </p>{" "}
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute top-2 right-3">
                {" "}
                between
              </p>{" "}
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute left-4 top-0">
                {" "}
                count(salary)
              </p>{" "}
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute top-8 right-18">
                {" "}
                delete
              </p>{" "}
              <p className="text-sm rounded-sm bg-neutral-300/50 text-[#6c757d] p-1.5 absolute top-25 left-14">
                {" "}
                update
              </p>
            </div>
          </div>

          <p className="text-center px-3 text-sm mb-5 text-[#6c757d]">
            You see how data behaves when those queries are applied
          </p>
        </div>

        {/* //? CARD 3 */}
        <div className="w-1/3 bg-[#edefef] rounded-lg shadow">
          <h4 className="text-center text-slate-900 pt-5 w-fit m-auto">
            See How Data Changes
          </h4>

          {/* tabular data */}
          <div className="my-5 w-[95%] m-auto min-h-45 flex items-center justify-center relative">
            {/* table 1 */}
            <div className="shadow rounded-md z-50">
              <p className="text-sm bg-blue-200/90 rounded-t-md px-10 py-2 text-left">
                Full Name
              </p>
              <div className="flex flex-col space-y-2  py-2 pl-3 bg-neutral-100/90 text-[#6c757d] rounded-b-md text-xs">
                <p className="border-b">Sahil Singh</p>
                <p className="border-b">Kanishq Sodhani</p>
                <p className="border-b">Rajat Sen</p>
                <p>Ritik Raj Singh</p>
              </div>
            </div>

            {/* table 2 */}
            <div className="shadow rounded-md absolute left-28 top-5 z-10 -rotate-5 scale-90 w-30">
              <p className="text-sm bg-zinc-200/70 rounded-t-md px-10 py-2 text-left h-6"></p>
              <div className="flex flex-col space-y-2 text-xs py-2 pl-3 bg-neutral-100/50 text-[#6c757d] h-30 rounded-b-md"></div>
            </div>

            {/* table 3 */}
            <div className="shadow rounded-md absolute right-28 top-5 z-10 rotate-5 scale-90 w-30">
              <p className="text-sm bg-zinc-200/70 rounded-t-md px-10 py-2 text-left h-6"></p>
              <div className="flex flex-col space-y-2 text-xs py-2 pl-3 bg-neutral-100/50 text-[#6c757d] h-30 rounded-b-md"></div>
            </div>
          </div>

          <p className="text-center px-3 text-sm mb-5 text-[#6c757d] mt-12">
            Highlights how data changes step by step
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
