import React from "react";
import EventListings from "../pages/EventListings";

const MainSection = () => {
  return (
    <main className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Meetup Events</h2>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Online
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Offline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <EventListings />
      </div>
    </main>
  );
};

export default MainSection;
