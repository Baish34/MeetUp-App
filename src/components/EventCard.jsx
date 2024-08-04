import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/event/${event._id}`);
  };

  return (
    <div
      className="card mb-3"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={event.thumbnail}
        className="card-img-top"
        alt={event.title}
        style={{ width: "100%", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">
          Date: {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="card-text">Type: {event.type}</p>
      </div>
    </div>
  );
};

export default EventCard;
