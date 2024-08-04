import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://909e5e78-dc7d-41db-8b2e-be6121a8e4d7-00-uzqr87n90omq.riker.replit.dev/events/id/${id}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch event details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <div className="container py-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{event.title}</h2>
          <img
            src={event.thumbnail}
            alt={event.title}
            className="card-img-top mb-4"
            style={{ width: "100%", height: "350px" }}
          />
          <p className="card-text">
            <strong>Date:</strong>{" "}
            {event.date ? new Date(event.date).toLocaleDateString() : "N/A"}
          </p>
          <p className="card-text">
            <strong>Type:</strong> {event.type}
          </p>
          <p className="card-text">
            <strong>Description:</strong> {event.description}
          </p>
          <p className="card-text">
            <strong>Session Timings:</strong> {event.sessionTimings}
          </p>
          <p className="card-text">
            <strong>Speakers:</strong>
          </p>
          <ul className="list-group mb-4">
            {Array.isArray(event.speakers) &&
              event.speakers.map((speaker, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={{
                      height: "50px",
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  />
                  <span>
                    {speaker.name} - {speaker.bio}
                  </span>
                </li>
              ))}
          </ul>
          <p className="card-text">
            <strong>Pricing:</strong> Rs.{event.pricing}
          </p>
          <p className="card-text">
            <strong>Venue:</strong> {event.venue?.address} -{" "}
            {event.venue?.additionalInfo}
          </p>
          <p className="card-text">
            <strong>Tags: </strong>
            {event.tags &&
              event.tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn btn-outline-primary btn-sm ml-2 me-2"
                >
                  {tag}
                </button>
              ))}
          </p>
          <p className="card-text">
            <strong>Dress Code:</strong> {event.dressCode}
          </p>
          <p className="card-text">
            <strong>Age Restrictions:</strong> {event.ageRestrictions}
          </p>
          <p className="card-text">
            <strong>Host:</strong> {event.host}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
