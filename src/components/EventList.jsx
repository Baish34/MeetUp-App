import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div className="row">
      {events.map((event) => (
        <div className="col-md-4" key={event._id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
