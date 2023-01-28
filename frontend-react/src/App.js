import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dex from './components/Dex';
import Header from './components/Header';
import { SERVER_URL } from './components/constants';

function App() {
  const [isDark, setTheme] = useState(true)
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(SERVER_URL + 'dex')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(data => {
        setCount(data.length + 1)
        data.sort((a, b) => a.number - b.number)
        if (search !== '') {
          data = data.filter(mon => {
            if ((/^\d*$/).test(search)) {
              return +search === +mon.number
            } else {
              const name = mon.nfts.metadata.name
              if (!name) return null
              let regEx = new RegExp(search, 'ig')
              return regEx.test(name)
            }
          })
        }
        setData(data)
      })
  }, [search]);

  // useEffect(() => {
  //   if (data) {
  //     let result = data.filter(mon => {
  //       let name = mon.nfts.metadata.name
  //       let regEx = new RegExp(search, 'ig')
  //       return regEx.test(name)
  //     })
  //     setData(result)
  //   }

  // }, [search]);

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <Navbar isDark={isDark} setTheme={setTheme} />
      <div className="container">
        <Header isDark={isDark} count={count} search={search} setSearch={setSearch} />
        <Dex isDark={isDark} data={data} />
      </div>
    </div>
  );
}

export default App;
