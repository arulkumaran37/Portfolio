import { useState } from "react";
import "./App.css";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";
import { IoReorderThreeSharp } from "react-icons/io5";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 ">
        <header className="sticky top-0 z-50 text-black p-4 w-full shadow-md bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-xl font-bold">
              <a href="#">Portfolio</a>
            </div>

            <ul className="hidden md:flex gap-12 font-semibold text-base">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-400 hover:border-b-3 transition-all cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-400 hover:border-b-3 transition-all cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-red-400 hover:border-b-3 transition-all cursor-pointer"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-400 hover:border-b-3 transition-all cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>

            <IoReorderThreeSharp
              className="size-8 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute md:hidden top-16 right-0 w-40 bg-white flex flex-col items-center gap-6 border-1 rounded-md font-semibold text-lg transition-transform ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
          >
            <li className="list-none w-full text-center p-4 hover:bg-red-400 hover:text-white transition-all cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-red-400 hover:text-white transition-all cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-red-400 hover:text-white transition-all cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-red-400 hover:text-white transition-all cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </div>
        </header>

        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;
