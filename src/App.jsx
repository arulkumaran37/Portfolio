import { useState } from "react";
import "./App.css";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import { IoReorderThreeSharp } from "react-icons/io5";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 ">
        <header className="fixed top-0 z-50 text-black p-4 w-full shadow-md bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-xl font-bold">
              <a href="#">Portfolio</a>
            </div>

            <ul className="hidden md:flex gap-12 font-semibold text-base">
              {["Home", "About", "Skills","Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-red-400 scroll-mt-20 hover:border-b-3 transition-all cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <IoReorderThreeSharp
              className="size-8 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 w-48 bg-white flex flex-col items-center gap-4 border shadow-md rounded-md p-4 md:hidden">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-semibold text-gray-700 hover:text-red-500 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}

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

        <div id="projects">
          <Projects />
        </div>
      </div>

          {/* <Footer /> */}
      <footer id="contact" className="w-full bg-red-600 py-6">
          <h1 className="text-2xl font-bold text-center">UserName</h1>
          <p className="text-m text-center">
            <span>github </span>|| instagram || gamil
            </p>
        </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default App;
