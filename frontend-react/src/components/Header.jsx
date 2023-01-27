
const Header = ({ isDark }) => {
  return (
    <div className="header my-4 d-flex align-items-end justify-content-between">
      <p className="dexNums">Showing <em className="text-decoration-underline">108</em> of <em>108</em> dexs</p>
      <div className="filters d-flex align-items-end">
        <div className="input-group searchBox">
          <input type="text" className={`form-control ${isDark ? 'bg-dark text-white' : ''}`} placeholder="Search Sarumons..." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="btn-group">
          <input type="checkbox" className="btn-check" id="showOwned" autoComplete="off" />
          <label className="btn btn-outline-secondary shadow-none" htmlFor="showOwned">Show Only Owned</label>
        </div>
        <div className="btn-group" role="group">
          <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-duotone fa-filters"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;