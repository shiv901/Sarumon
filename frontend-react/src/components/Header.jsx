import { FaFilter } from 'react-icons/fa'

const Header = ({ isDark, count, search, setSearch }) => {

  function openModal() {
    console.log("Modal Opening")
  }

  return (
    <div className="header my-4 d-flex align-items-end justify-content-between">
      <p className="dexNums">Showing <em className="fw-bold">{count}</em> of <em>{count}</em> entries</p>
      <div className="filters d-flex align-items-end">
        <div className="input-group searchBox">
          <input type="text" className={`form-control ${isDark ? 'bg-dark text-white' : ''}`} placeholder="Type Name or Number..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="btn-group">
          <input type="checkbox" className="btn-check" id="showOwned" />
          <label className="btn btn-outline-secondary shadow-none" htmlFor="showOwned">Show Only Owned</label>
        </div>
        <div className={`filterDD ${isDark ? 'dark' : ''}`} onClick={openModal}>
          <FaFilter />
        </div>
      </div>
    </div>
  );
}

export default Header;