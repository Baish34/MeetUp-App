import React from "react";
import EventList from "../components/EventList";
import useFetch from "../hooks/useFetch";

const EventListings = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch(
    "meet-up-app-backend-p5xxtvs56.vercel.app/events",
    [],
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="event-listings">
      <EventList events={events} />
    </div>
  );
};

export default EventListings;
