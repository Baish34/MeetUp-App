import React from "react";

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary rounded">
          <div className="container-fluid">
            <a className="navbar-brand text-primary fs-4 fw-bold">Meetup</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <form className="d-flex ms-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
