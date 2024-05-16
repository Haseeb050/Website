import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientCarousel.css";
import team from "../../../public/team.jpg";
import team1 from "../../../public/team1.jpg";
import team2 from "../../../public/team2.jpg";

const testimonials = [
  {
    name: "Stanley Tate",
    role: "Web Developer",
    image: team,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    rating: 5,
  },
  {
    name: "Lana Shelton",
    role: "Architect",
    image: team1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    rating: 5,
  },
  {
    name: "Mario Houston",
    role: "Social Worker",
    image: team2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
    rating: 5,
  },
  // Add more testimonials if needed
];

const ClientCarousel = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content" data-aos="zoom-in" data-aos-delay="500">
        Our Client Say
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}>
            <div className="testimonial-content">
              {renderStars(testimonial.rating)}
              <p>{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
