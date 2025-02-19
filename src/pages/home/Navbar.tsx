import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { LOCALES_TEXT, navLinks } from "../../constants";
import { Link } from "react-router";
import { alwaysScrollTop } from "../../utils/utilityFunction";

const NavItems = ({ isSmall }: { isSmall?: boolean }) => {
  const navlists = isSmall? [{id:100,href:"https://short.fnikolabs.com/resume", name:LOCALES_TEXT.hereIsMyCV, newTab:true}, ...navLinks] : navLinks
  return (
    <ul className="nav-ul">
      {navlists.map(({  href, name, newTab },index) => (
        <li key={index} className="nav-li">
          <a href={href} className="nav-li_a" target={newTab?"_blank":"_self"}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleBar = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0  bg-black/90 z-[100]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link
            to={"/"}
            className="text-neutral-400 text-xl hover:text-white transition-colors"
            onClick={alwaysScrollTop}
          >
            Fernando Nikolas
          </Link>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toogle Menu"
            onClick={toogleBar}
          >
            <FontAwesomeIcon icon={isOpen ? faX : faBars} className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <NavItems isSmall />
      </div>
    </header>
  );
}
