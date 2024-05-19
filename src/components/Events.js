import React from 'react';
import './Events.css';
import events from './eventsData';

const Events = () => {
  return (
    <div className="events">
      <div className="events-background" />
      <div className="events-content">
        <h2>Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.date}</strong> - {event.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;
