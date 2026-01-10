import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-[#0c0c13] py-12">
      <div className="w-[96%]  m-auto">
        {/* Main Footer Content */}
        <div className="flex lg:flex-row gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:w-1/3">
            <div className="relative rounded-2xl bg-[linear-gradient(50deg,hsl(240,68%,21%)_0%,hsl(213,100%,27%)_20%,hsl(204,100%,36%)_43%,hsl(197,100%,42%)_68%,hsl(189,100%,47%)_87%,hsl(181,100%,50%)_100%)] p-8 overflow-hidden min-h-88 flex flex-col justify-between">
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              <div className="relative z-10">
                <h4 className="text-white text-4xl font-bold mb-2">
                  RelationalSQL Lab
                </h4>
                <p className="text-white/90 text-lg">
                  Learn SQL the right way.
                </p>
              </div>

              <div className="relative z-10">
                <p className="text-white/80 text-sm mb-4">Connect with us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  >
                    <BiLogoGmail className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg p-3 transition-all duration-300 hover:scale-110"
                  >
                    <FaXTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-2/3">
            <div className="rounded-2xl bg-linear-to-br from-neutral-100 to-neutral-200 p-8 min-h-70 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation */}
                <div>
                  <h5 className="text-gray-900 font-bold text-lg mb-4">
                    Navigation
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Why Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        SQL Lab
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        MongoDB View
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Databases
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h5 className="text-gray-900 font-bold text-lg mb-4">
                    Resources
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        SQL Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Examples & Tables
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Learning Roadmap
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Project */}
                <div>
                  <h5 className="text-gray-900 font-bold text-lg mb-4">
                    Project
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        DataSquare
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                      >
                        Contribute
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-gray-600 text-sm">
                  © 2026 RelationalSQL Lab — Built for students & developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
