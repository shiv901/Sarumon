import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterModal from './FilterModal';

const Header = ({ props }) => {
  const { isDark, count, totalCount, search, setSearch, showOwned, setShowOwned, filters, setFilters } = props

  const [showFilter, setShowFilter] = useState(false)

  function handleFilterClick(e) {
    setShowFilter(prev => !prev)
  }

  return (
    <div className="header my-4 d-flex flex-column-reverse flex-md-row gap-2 align-items-end justify-content-between">
      <p className="dexNums">Showing <em className="fw-bold">{count}</em> of <em>{totalCount}</em> entries</p>
      <div className="filters d-flex flex-wrap flex-md-nowrap align-items-center gap-3 ">
        <div className="input-group searchBox">
          <input type="text" className={`form-control ${isDark ? 'bg-dark text-white' : ''}`} placeholder="Type Name or Number..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="btn-group">
          <input type="checkbox" className="btn-check" id="showOwned" defaultChecked={showOwned} onClick={() => setShowOwned((prev) => !prev)} />
          <label className="btn btn-outline-secondary shadow-none" htmlFor="showOwned">Show Only Owned</label>
        </div>
        <div className={`filterDD ${isDark ? 'dark' : ''}`} onClick={handleFilterClick}>
          <FaFilter />
          {showFilter ? <FilterModal filters={filters} setFilters={setFilters} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default Header;