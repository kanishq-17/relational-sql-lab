import Button from "../components/common/Button";
import Navbar from "../components/layout/Navbar";
// import Table from "../components/layout/Table";
import LightRays from "../components/UI/LightRays";

const Home = () => {
  return (
    <div className="relative w-full bg-[#0c0c13] h-screen">
      {/* Background animation */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#bfbbbb"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        noiseAmount={0.1}
        distortion={0.05}
        fadeDistance={1.2}
        saturation={2.0}
        className=""
      />

      {/* Foreground content */}
      <div className="w-full absolute top-0 z-50">
        <Navbar />

        <div className="pt-14 flex flex-col items-center gap-7">
          <p className="font-light text-[.6rem] rounded-full w-fit px-2.5 py-0.5 m-auto bg-transparent backdrop-blur-2xl text-[#6C757D] outline outline-zinc/80 ">
            Built for students & developers
          </p>
          <h1 className="text-7xl font-semibold text-center text-[#E9ECEF] leading-22">
            Master SQL <br /> The Practical Way
          </h1>
          <p className="w-1/3 text-center text-[#6C757D]">
            RelationalSQL Lab helps you learn SQL using structured explanations,
            real examples, and interactive tables.
          </p>

          <Button
            width={40}
            height={12}
            textColor={"black"}
            bgColor={"white"}
            text={"Explore SQL"}
          />
        </div>

        

        {/* <Table /> */}
      </div>
    </div>
  );
};

export default Home;
