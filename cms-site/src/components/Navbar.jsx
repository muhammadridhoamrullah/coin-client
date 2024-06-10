import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handlerLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={"/my-coins"}
                className="nav-link active"
                aria-current="page"
              >
                My Coins
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              onClick={handlerLogout}
              className="btn btn-danger"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
