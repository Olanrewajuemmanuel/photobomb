import React from "react";

function Navbar() {
  return (
    <div className="photobomb__navbar">
      <nav>
        <a href="/">
          <p style={{ fontFamily: "cursive" }}>Photobomb</p>
        </a>
        <ul className="nav__items">
          <li>
            <a href="#">find work</a>
          </li>
          <li>
            <a href="#">find Artists</a>
          </li>
          <li>
            <form>
              <input
                type="text"
                name="Search"
                id="search"
                placeholder="Search for 'photographer'..."
              />
            </form>
          </li>
          <div className="button-grp">
            <button className="login">Log in</button>
            <button className="signup">Sign up</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
