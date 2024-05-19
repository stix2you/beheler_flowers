import React from 'react';
import FeatureCard from './FeatureCard';
import './MainView.css';
import events from './eventsData'; // Assuming you have an eventsData file or module

const MainView = () => {
  // Combine all event information into a single string
  const eventDetails = events.map(event => `${event.date}: ${event.name}`).join('\n');

  return (
    <div className="main-view">
      <div className="main-view-background" />
      <div className="main-view-content">
        <div className="feature-photos">
          <div className="photo photo1">Photo 1 Placeholder</div>
          <div className="photo photo2">Photo 2 Placeholder</div>
          <div className="photo photo3">Photo 3 Placeholder</div>
        </div>
        <div className="intro-info">
          <FeatureCard 
            title="Welcome to Flowers for Bees and Butterflies"
            content="Info paragraph about you.  Can be in first person instead?  Kerry Beheler started this business in 2015. She sells at local farmers markets including Belleville, Blanchardville, New Glarus, the Farley Center in Verona and a November 'Santa in the Greenhouse' event. She sells native perennial flower transplant 'plugs' in the spring, annual and perennial flower seeds in the fall, and cut flower bouquets composed of annual and native perennial flowers. All flowers in the bouquets can be dried and their seeds dispersed for self-seeding."
          />
        </div>
        <div className="events-info">
          <FeatureCard 
            title="Meet me at these Events!"
            content={eventDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default MainView;
