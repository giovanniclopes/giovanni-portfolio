import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../assets/icons/Logo";
import linkedinIconNormal from "../assets/icons/svg/linkedinIconNormal.svg";
import linkedinIconHover from "../assets/icons/svg/linkedinIconHover.svg";
import githubIconNormal from "../assets/icons/svg/githubIconNormal.svg";
import githubIconHover from "../assets/icons/svg/githubIconHover.svg";
import emailIconNormal from "../assets/icons/svg/emailIconNormal.svg";
import emailIconHover from "../assets/icons/svg/emailIconHover.svg";

export function Header() {
  const [togglerNav, setTogglerNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  
  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    // Remover o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const handleLinkClick = () => {
    setTogglerNav(false);
  };

  return (
    <header>
      <nav
        className={
          fix
            ? "z-50 flex items-center justify-between fixed top-0 w-full h-22 py-4 px-16 mx-auto bg-gray-500 text-white text-md font-semibold transition-all md:items-center mbl:px-4 mbl:py-7"
            : "z-50 flex items-center justify-between fixed top-0 w-full h-24 py-3 px-10 mx-auto backdrop-blur-0 bg-gray-600/20 text-lg font-medium text-white/50 transition-all brightness-75 md:items-center mbl:px-4"
        }
      >
        <div
          className={
            togglerNav
              ? "absolute left-0 top-0 w-screen mt-20 border-t border-red-500 p-6 flex items-left flex-col gap-4 text-gray-300 text-lg bg-gray-600 md:flex md:items-center"
              : "hidden gap-4 md:flex md:items-center"
          }
        >
          <div className="mr-3 mbl:hidden">
            <Logo />
          </div>

          <div className="flex items-center justify-center gap-5 py-5 mbl:flex-col mbl:items-start mbl:gap-4">
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={() => {
                clickHandler();
                handleLinkClick();
              }}
              href="#about"
              aria-label="jump to 'about' section"
            >
              Sobre mim
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={() => {
                clickHandler();
                handleLinkClick();
              }}
              href="#skills"
              aria-label="jump to 'skills' section"
            >
              Skills
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={() => {
                clickHandler();
                handleLinkClick();
              }}
              href="#projects"
              aria-label="go to 'projects' section"
            >
              Projetos
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={() => {
                clickHandler();
                handleLinkClick();
              }}
              href="#contact"
              aria-label="jump to 'contact' section"
            >
              Contato
            </AnchorLink>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="mr-3 hidden mbl:block">
            <Logo />
          </div>
          <NavLink
            to="https://linkedin.com/in/giovanni-lopes21"
            target="_blank"
            aria-label="visit Giovanni Lopes LinkedIn"
          >
            <img
              src={linkedinIconNormal}
              alt="Linkedin Icon"
              className="mbl:w-6 mbl:h-6 transition-all hover:rotate-6"
              onMouseOver={(e) => (e.currentTarget.src = linkedinIconHover)}
              onMouseOut={(e) => (e.currentTarget.src = linkedinIconNormal)}
            />
          </NavLink>
          <NavLink
            to="https://github.com/giovanniclopes"
            target="_blank"
            aria-label="visit Giovanni Lopes GitHub"
          >
            <img
              src={githubIconNormal}
              alt="Github Icon"
              className="mbl:w-6 mbl:h-6 transition-all hover:rotate-6"
              onMouseOver={(e) => (e.currentTarget.src = githubIconHover)}
              onMouseOut={(e) => (e.currentTarget.src = githubIconNormal)}
            />
          </NavLink>
          <NavLink
            to="emailto:giovanniclopes@gmail.com"
            target="_blank"
            aria-label="Send a email to giovanni lopes"
          >
            <img
              src={emailIconNormal}
              alt="Email Icon"
              className="mbl:w-6 mbl:h-6 transition-all hover:rotate-6"
              onMouseOver={(e) => (e.currentTarget.src = emailIconHover)}
              onMouseOut={(e) => (e.currentTarget.src = emailIconNormal)}
            />
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? (
            <X width={32} height={28} aria-label="close mobile menu" />
          ) : (
            <List width={28} height={28} aria-label="open mobile menu" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
