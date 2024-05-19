import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="background" />
      <div className="content">
        <h2>Contact Me!</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
