import React, { useState, useEffect } from "react";
import "./header.css";
import Perfil from "../../img/silvio.png";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      //se a tela for maior ou igual a 480 o menu irá aparecer lado a lado, caso contrário irá apresentar a caixa de seleção
      if (window.innerWidth >= 480) {
        setMenuOpen(true);
      }
    });
  }, []);

  return (
    <header>
      <div className="h">
        <div className="header_logo_container">
          <img src={Perfil} alt="" />
          <FiMenu
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
        {menuOpen && (
          <nav>
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT ME</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
