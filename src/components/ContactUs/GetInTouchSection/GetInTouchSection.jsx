// src/components/GetInTouchSection.js
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GetInTouchSection.css";

const GetInTouchSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here (e.g., send to a backend server or API)
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="get-in-touch-section">
      <div className="get-in-touch-container">
        <div
          className="get-in-touch-info"
          data-aos="fade-up"
          data-aos-duration="1500">
          <h3>Address:</h3>
          <p>4035 Heavens, Los Angeles, California</p>
          <h3>Phone:</h3>
          <p>
            +000 313 577 111
            <br />
            +000 313 577 222
          </p>
          <h3>Email:</h3>
          <p>
            info@example.com
            <br />
            support@example.com
          </p>
        </div>
        <div
          className="get-in-touch-form"
          data-aos="fade-up"
          data-aos-duration="700">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required></textarea>
            </div>
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="map-container" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19888.89403636491!2d-1.2580877405569263!3d51.7548165195557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a97880f69b%3A0x249d8109a51dd5b4!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2suk!4v1627916233200!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"></iframe>
      </div>
    </section>
  );
};

export default GetInTouchSection;
