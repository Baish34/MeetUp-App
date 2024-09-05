import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `meet-up-app-backend-p5xxtvs56.vercel.app/events/id/${id}`,
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
          <div className="row">
            <div className="col-md-8">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="img-fluid mb-4"
                style={{ width: "100%", height: "350px", objectFit: "cover" }}
              />
              <h4>Details:</h4>
              <p>{event.description}</p>
              <h5>Additional Information:</h5>
              <p>
                <strong>Dress Code:</strong> {event.dressCode}
              </p>
              <p>
                <strong>Age Restrictions:</strong> {event.ageRestrictions}
              </p>
              <h5>Event Tags:</h5>
              <div>
                {event.tags &&
                  event.tags.map((tag, index) => (
                    <span key={index} className="badge bg-secondary me-2">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <h5>Date & Time:</h5>
                <p>
                  {event.date ? new Date(event.date).toLocaleString() : "N/A"}
                </p>
              </div>
              <div className="mb-3">
                <h5>Venue:</h5>
                <p>{event.venue?.address}</p>
              </div>
              <div className="mb-3">
                <h5>Price:</h5>
                <p>₹ {event.pricing}</p>
              </div>
              <div className="mb-3">
                <h5>Speakers:</h5>
                {Array.isArray(event.speakers) &&
                  event.speakers.map((speaker, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="rounded-circle me-2"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0">{speaker.name}</h6>
                        <small>{speaker.bio}</small>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
