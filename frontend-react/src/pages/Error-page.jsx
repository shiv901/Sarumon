import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, This page does not exists.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/sarudex" className="btn btn-warning d-flex align-items-center justify-content-center gap-2 mt-3">
        <FaHome />
        Go to SaruDex
      </Link>
    </div>
  );
}