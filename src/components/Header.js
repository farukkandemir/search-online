import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {SiDarkreader} from "react-icons/si";

function Header() {
  return (
    <main className="top-section">
      <div className="logo-box">
        <Link to="/">
          <p>
            Search Online
            <span>
              <FaSearch fontSize="1rem" style={{marginLeft: "5px"}} />
            </span>
          </p>
        </Link>
      </div>

      <div>
        <button className="mode-btn">
          <span>
            <SiDarkreader fontSize="1.2rem" style={{marginRight: "5px"}} />
          </span>
          Dark Mode
        </button>
      </div>
    </main>
  );
}

export default Header;
