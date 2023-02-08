import { useContext } from "react";
import Navbar from "../components/Navbar";
import ThemeContext from "../context/ThemeContext";

export default function Game() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`Main ${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Coming Soon!</h1>

      </div>
    </main>
  );
}
