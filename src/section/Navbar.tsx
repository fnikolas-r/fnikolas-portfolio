import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const toogleBar = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 text-xl hover:text-white transition-colors"
          >
            Fernando Nikolas
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toogle Menu"
            onClick={toogleBar}
          >
            <FontAwesomeIcon icon={isOpen ? faX : faBars} className="w-6 h-6"/>
          </button>
            <nav className="sm:flex hidden">
                <NavItems/>
            </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen? 'max-h-screen' : 'max-h-0'}` }>
        <NavItems/>
      </div>
    </header>
  );
}
