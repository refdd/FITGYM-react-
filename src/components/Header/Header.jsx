import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import LogoImg from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import close from "../../assets/svg-close-icon-4.jpg";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenueOPened] = useState(false);
  return (
    <div className="header">
      <img src={LogoImg} alt="" className="logo" />
      {menuOpened == false && mobile == true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem ",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setMenueOPened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <div className="close" style={{ cursor: "pointer" }}>
            <img
              onClick={() => setMenueOPened(false)}
              src={close}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem " }}
            />
          </div>
          <li>
            {" "}
            <Link
              onClick={() => setMenueOPened(false)}
              activeClass="active"
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenueOPened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenueOPened(false)}
              to="Roasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenueOPened(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              plans
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenueOPened(false)}
              to="Testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
