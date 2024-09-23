import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from 'gsap';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Calendar() {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="titleSection">
        <h2>
          Исторические <br /> даты
        </h2>
      </div>

      {/* Horizontal Line */}
      <div className="line horizontal"></div>

      {/* Vertical Lines */}
      <div className="line vertical start"></div>
      <div className="line vertical middle"></div>
      <div className="line vertical end"></div>

      {/* Main Circle */}
      <div className="circle"></div>

      {/* Year Section */}
      <div className="yearContainer">
        <div className="year left">1999</div>
        <div className="year right">2024</div>
      </div>

      {/* Circle Number in the middle */}
      <div className="circleNumber">
        <p>01</p>
      </div>

      {/* Small Circles Around Main Circle */}
      <div className="smallCircle smallCircle1">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>
      <div className="smallCircle smallCircle2">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>
      <div className="smallCircle smallCircle3">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>
      <div className="smallCircle smallCircle4">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>
      <div className="smallCircle smallCircle5">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>
      <div className="smallCircle smallCircle6">
        <img src="/Ellipse337.svg" alt="Small Circle" />
      </div>

      {/* Gradient Image (Top Left Corner) */}
      <div className="gradientImg">
        <img src="/Vector17.svg" alt="Gradient Image" />
      </div>

      {/* Content Section */}
      <div className="contentSection ">
        <Swiper
          slidesPerView={3.5} // Number of slides visible at a time
          pagination={{ clickable: true }} // Enable pagination dots
          navigation={true}
          modules={[Navigation]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="contentItem">
              <div className="date">July 2023</div>
              <p className="text">
                Something really important is going on spirit vs Navi.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="contentItem">
              <div className="date">August 2023</div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="contentItem">
              <div className="date">September 2023</div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="contentItem">
              <div className="date">July 2023</div>
              <p className="text">
                Something really important is going on spirit vs Navi.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentItem">
              <div className="date">August 2023</div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contentItem">
              <div className="date">September 2023</div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
