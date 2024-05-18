import React from 'react';
import './Events.css';

const events = [
  { date: 'June 15, 2024', name: 'Farmers Market in Belleville' },
  { date: 'July 20, 2024', name: 'Farmers Market in Blanchardville' },
  // Add more events here
];

const Events = () => {
  return (
    <div className="events">
      <div className="background" />
      <div className="content">
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
