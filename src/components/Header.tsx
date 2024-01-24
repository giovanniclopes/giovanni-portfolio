import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  X,
} from "phosphor-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../assets/icons/Logo";

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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  window.addEventListener("scroll", setFixed);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <header>
      <nav
        className={
          fix
            ? "z-50 flex items-center justify-between fixed top-0 w-full h-22 py-4 px-8 mx-auto bg-gray-500 text-white text-md font-semibold transition-all md:items-center mbl:px-4 mbl:py-7"
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
              onClick={handleLinkClick}
              href="#about"
              aria-label="jump to 'about' section"
            >
              Sobre mim
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={handleLinkClick}
              href="#skills"
              aria-label="jump to 'skills' section"
            >
              Skills
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={handleLinkClick}
              href="#projects"
              aria-label="go to 'projects' section"
            >
              Projetos
            </AnchorLink>
            <AnchorLink
              className="transition-all hover:text-red-500 mbl:w-full mbl:py-2 mbl:pl-4 mbl:rounded hover:mbl:bg-gray-500"
              onClick={handleLinkClick}
              href="#contact"
              aria-label="jump to 'contact' section"
            >
              Contato
            </AnchorLink>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="mr-3 hidden mbl:block">
            <Logo />
          </div>
          <NavLink
            to="https://linkedin.com/in/giovanni-lopes21"
            target="_blank"
            aria-label="visit Giovanni Lopes LinkedIn"
          >
            <LinkedinLogo
              className="w-7 h-7 transition-all hover:rotate-6 hover:text-red-500"
              weight="fill"
            />
          </NavLink>
          <NavLink
            to="https://github.com/giovanniclopes"
            target="_blank"
            aria-label="visit Giovanni Lopes GitHub"
          >
            <GithubLogo
              className="w-7 h-7 transition-all hover:rotate-6 hover:text-red-500"
              weight="fill"
            />
          </NavLink>
          <NavLink
            to="emailto:giovanniclopes@gmail.com"
            target="_blank"
            aria-label="Send a email to giovanni lopes"
          >
            <EnvelopeSimple
              className="w-7 h-7 transition-all hover:rotate-6 hover:text-red-500"
              weight="fill"
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
