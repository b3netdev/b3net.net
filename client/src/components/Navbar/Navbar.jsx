import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "../../assets/images/B3net-Technologies-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleNavClick = (sectionId) => {
    setOpen(false);

    if (isHome) {
      // react-scroll will handle it (same page)
      return;
    }

    // other pages -> go home with hash
    navigate(`/#${sectionId}`);
  };

  const menuItems = [
    ["home", "Home"],
    ["about", "About Us"],
    ["services", "Services"],
    ["works", "Works"],
    ["expertise", "Expertise"],
    ["contact", "Contact"],
  ];

  return (
    <header className="top-header">
      <nav className="custom-navbar">
        <div className="container-nav">
          <a className="navbar-brand" href="/">
            <img src={Logo} className="logo-img" alt="logo" />
          </a>

          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            {!open ? <Menu /> : <X />}
          </div>

          <ul className={`nav-menu ${open ? "open" : ""}`}>
            {menuItems.map(([to, label]) => (
              <li key={to}>
                {isHome ? (
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={300}
                    offset={-75}
                    spy={true}
                    activeClass="active"
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </ScrollLink>
                ) : (
                  <a
                    href={`/#${to}`}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(to);
                    }}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}

            {isHome ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={300}
                offset={-75}
                onClick={() => setOpen(false)}
                spy={false}
                className="btn button-gradient-1 d-lg-block"
              >
                Get Started Today <ArrowRight size={16} />
              </ScrollLink>
            ) : (
              <a
                href="/#contact"
                className="btn button-gradient-1 d-lg-block"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                Get Started Today <ArrowRight size={16} />
              </a>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
