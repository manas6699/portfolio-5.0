import meter1 from "../../Images/c.svg"
import meter2 from "../../Images/html.svg";
import meter3 from "../../Images/css.svg";
import meter4 from "../../Images/js.svg";
import meter5 from "../../Images/react.svg";
import meter6 from "../../Images/node.svg";
import meter7 from "../../Images/scss.svg";
import meter8 from "../../Images/figma.svg";
import meter9 from "../../Images/firebase.svg";
import meter10 from "../../Images/ps.svg";
import meter11 from "../../Images/next.svg";
import meter12 from "../../Images/materialui.svg";
import meter13 from "../../Images/expressjs.svg";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";

import colorSharp from "../../Images/color-sharp.png";

import "./Skills.css"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
      <section className="skill" id="skills">
        <div className="container2">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                
                <Typography variant="h3">MY SKILLS</Typography>
                
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Html-5</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter4} alt="Image" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter5} alt="Image" />
                    <h5>React</h5>
                  </div>
                </Carousel>
                
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter6} alt="Image" />
                    <h5>Node js</h5>
                  </div>
                  <div className="item">
                    <img src={meter7} alt="Image" />
                    <h5>SCSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter8} alt="Image" />
                    <h5>Figma</h5>
                  </div>
                  <div className="item">
                    <img src={meter9} alt="Image" />
                    <h5>Firebase</h5>
                  </div>
                </Carousel>
                
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter10} alt="Image" />
                    <h5>Photoshop</h5>
                  </div>
                  <div className="item">
                    <img src={meter11} alt="Image" />
                    <h5>Next Js</h5>
                  </div>
                  <div className="item">
                    <img src={meter12} alt="Image" />
                    <h5>Material- ui</h5>
                  </div>
                  <div className="item">
                    <img src={meter13} alt="Image" />
                    <h5>Express Js</h5>
                  </div>
                  
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    
  );
};

export default Skills;
