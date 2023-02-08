import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BiCalculator } from 'react-icons/bi'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main className={`Main ${isDark ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5">Welcome to the World of Sarumon!</h1>
        <p className="w-75 mx-auto mt-5 text-center">Go check the brand new SaruDex, a list of Sarumons with their details</p>
        <Link to="/sarudex" className="w-25  mx-auto btn btn-danger d-flex align-items-center justify-content-center gap-2 mt-3">
          <BiCalculator />
          Go to SaruDex
        </Link>

      </div>
    </main>
  );
}
