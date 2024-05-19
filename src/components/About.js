// src/components/About.js
import React from 'react';
import FeatureCard from './FeatureCard';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about_background" />
      <div className="about_content">
        <FeatureCard 
          title="Kerry Beheler Flowers for Bees and Butterflies" 
          content="A little about my business: I started in 2015. I sell at local farmers markets including Belleville, Blanchardville, New Glarus, the Farley Center in Verona and a November 'Santa in the Greenhouse' event. I sell native perennial flower transplant 'plugs' in the spring, annual and perennial flower seeds in the fall, and cut flower bouquets composed of annual and native perennial flowers. All flowers in the bouquets can be dried and their seeds dispersed for self-seeding." 
        />
        <FeatureCard 
          title="Products" 
          content="I also make and sell fresh home-made jams from locally produced fruits, and home canned products from local produce including marinara, pickles and relishes, canned applesauce, pears, and peaches. I use locally grown fresh produce to make the final canned product. A flower bouquet is free with every canned product, to teach people about the importance of pollinators." 
        />
        <FeatureCard 
          title="Contact" 
          content="Kerry Beheler
                  Flowers for Bees and Butterflies
                  Mount Horeb
                  Landline phone: 608-437-XXXX
                  Cell phone: 608-207-XXXX" 
        />
      </div>
    </div>
  );
}

export default About;
