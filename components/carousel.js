import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Testimonials from "./testimonials";
import Image from "next/image";
import prevCarousel from "../public/prevCarousel.png";
import nextCarousel from "../public/nextCarousel.png";

export default class NextJsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://globaltechnologia.org/webAdmin/public/index.php/api/teamshow")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log("SSS", this.state);
  }

  render() {
    const { data } = this.state;

    console.log("data", data);

    const arrowStyles = {
      position: "absolute",
      top: "0",
      bottom: "auto",
      padding: ".4em",
      zIndex: 2,
      width: "55px",
      height: "100%",
    };
    return (
      <div>
        <Carousel
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow"
                style={{
                  ...arrowStyles,
                  left: "0",
                  backgroundColor: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                <Image src={prevCarousel} alt="quote" width={32} height={32} smooth />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="arrow"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 0,
                  background: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                <Image src={nextCarousel} alt="quote" width={32} height={32} />
              </button>
            )
          }
          showStatus={false}
          showThumbs={false}
          slidesToShow={2}
          slidesToScroll={2} 
          // centerSlidePercentage={50}
          // autoPlay={true}
          style={{ ...arrowStyles, left: 15 }}
          // itemWidth={50} // Add this line
        >
          {data?.map((child, index) => {
            return (
              <Testimonials
                review={child.discription}
                cname={child.company}
                key={index}
              />
              
            );
          })}
        </Carousel>
      </div>
    );
  }
}
