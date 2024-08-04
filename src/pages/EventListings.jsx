import React from "react";
import EventList from "../components/EventList";
import useFetch from "../hooks/useFetch";

const EventListings = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch(
    "https://909e5e78-dc7d-41db-8b2e-be6121a8e4d7-00-uzqr87n90omq.riker.replit.dev/events",
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
