import { useState } from 'react';
import Navbar from './components/Navbar';
import Dex from './components/Dex';
import Header from './components/Header';

function App() {
  const [isDark, setTheme] = useState(true)

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <Navbar isDark={isDark} setTheme={setTheme} />
      <div className="container">
        <Header isDark={isDark} />
        <Dex isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
