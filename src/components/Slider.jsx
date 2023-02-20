import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function CarouselSlider() {
  return (
    <MDBCarousel   showIndicators showControls fade>
      <MDBCarouselItem 
        
        className="h-75 d-inline-block mw-80"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
                className="h-75 d-inline-block"

        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
               className="h-75 d-inline-block"

        itemId={3}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}