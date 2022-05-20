import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Assets/one.JPG"
import img2 from "../Assets/two.JPG";
import img3 from "../Assets/three.JPG";

export const Home = () => {
    const imageClick = () => {
        console.log('Click');
      }
      const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide"  onClick={() => { openInNewTab("https://www.amazon.in/") }} />
        <Carousel.Caption>
          <h3>Bucky 1</h3>
          <p>Bucky of 1 month</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" onClick={() => { openInNewTab("https://classroom.google.com/u/0/c/NDYyOTIzMjcwNjA1/a/NDk0ODgxMzk3NjU4/details") }}/>

        <Carousel.Caption>
          <h3>Bucky 2</h3>
          <p>Bucky of 2 Month</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" onClick={() => { openInNewTab("https://classroom.google.com/u/0/c/NDYyOTIzMjcwNjA1/a/NDk0ODgxMzk3NjU4/details") }}/>

        <Carousel.Caption>
          <h3>Bucky 3</h3>
          <p>Bucky of 3 month</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Home;
