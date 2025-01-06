// EventListings.js

import React from "react";
import EventList from "../components/EventList";
import useFetch from "../hooks/useFetch";

const EventListings = ({ searchQuery, sortBy }) => {
  const {
    data: events,
    loading,
    error,
  } = useFetch("https://meet-up-app-backend.vercel.app/events", []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort events based on the sortBy option
  const sortedEvents = filteredEvents.filter((event) => {
    if (sortBy === "Online") {
      return event.type.toLowerCase() === "online";
    } else if (sortBy === "Offline") {
      return event.type.toLowerCase() === "offline";
    }
    return true;  // If no sortBy option is selected, return all events
  });

  return (
    <div className="event-listings">
      <EventList events={sortedEvents} />  {/* Pass sorted events */}
    </div>
  );
};

export default EventListings;

