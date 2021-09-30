import React, { useState } from "react";
function Navbar(){
    const [activeSection, setActiveSection] = useState("");
    
    return (
        <header style={{ position: "sticky", top: 0 }}>
      <div className="brandName" >
        Renuka.
      </div>
      <nav className="mobileMenuList">
        <ul>
          <a href="#about">
            <li className={activeSection === "#about" ? "activeSection" : null}
              onClick={() => setActiveSection("#about")}
              >
              About
            </li>
          </a>
          <a href="#skills">
            <li className={activeSection === "#skills" ? "activeSection" : null}
              onClick={() => setActiveSection("#skills")}
              >
              Skills
            </li>
          </a>
          <a href="#projects">
            <li  className={activeSection === "#projects" ? "activeSection" : null}
              onClick={() => setActiveSection("#projects")}
              >
              Projects
            </li>
          </a>
          
        </ul>
      </nav>
    </header>
    );
}
export default Navbar;