import { NavLink } from "react-router-dom";
import { MdWbSunny } from "react-icons/md"
import { GiMoon } from "react-icons/gi"
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, setTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-${isDark ? 'dark' : 'light'}`}>
      <div className="container align-items-center flex-column flex-md-row">
        <div className="logo d-flex align-items-center gap-3 fw-bolder">
          <img src="https://nokiamon.com/assets/logo/favicon-32x32.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          <h1 className="display-6">Sarumon</h1>
        </div>
        <div className="nav-sides d-flex gap-md-3 flex-column flex-md-row">
          <ul className="nav-items d-flex mb-0">
            <li className="nav-link"><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li className="nav-link"><NavLink to="/sarudex" className={({ isActive }) => (isActive ? 'active' : '')}>SaruDex</NavLink></li>
            <li className="nav-link"><NavLink to="/game" className={({ isActive }) => (isActive ? 'active' : '')}>Game</NavLink></li>
          </ul>
          <div className="switch my-2">
            <div className="form-check form-switch d-flex">
              <label htmlFor="themeBtn" className={isDark ? 'dark' : 'light'} title="Change Theme">{isDark ? <MdWbSunny /> : <GiMoon style={{ transform: 'translate(0px)' }} />}</label>
              <input className="form-check-input d-none" value={isDark} defaultChecked={isDark} onChange={setTheme} type="checkbox" id="themeBtn" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;