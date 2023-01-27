
const Navbar = ({ isDark, setTheme }) => {
  return (
    <nav className={`navbar navbar-${isDark ? 'dark' : 'light'}`}>
      <div className="container align-items-center">
        <div className="logo d-flex align-items-center gap-3 fw-bolder">
          <img src="https://nokiamon.com/assets/logo/favicon-32x32.png" width="30" height="30" className="d-inline-block align-top" alt="" />
          <h1 className="display-6">Sarumon</h1>
        </div>
        <div className="switch">
          <div className="form-check form-switch d-flex">
            <label htmlFor="themeBtn" className="">Theme</label>
            <input className="form-check-input" value={isDark} defaultChecked={isDark} onChange={() => setTheme(prev => !prev)} type="checkbox" id="themeBtn" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;