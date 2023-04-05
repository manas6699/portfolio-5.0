import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import myimg from "../../Images/myimg2.png";

const About = () => {
  return (
    <section className="section">
      <div className="container2">
        <div className="content-section">
          <div className="title">
            <Typography variant="h3">ABOUT ME</Typography>
          </div>

          <div className="content">
            <p>
              I am a passionate web developer(MERN-STACK) and passionate about
              technology. I love coding. And currently I’m looking for
              internships in WEB-DEVELOPER role. My hobby is photography.
            </p>

            <div className="information">
              <p>
                ➡️ <b> Birthday : </b>13 th jan , 1999
              </p>

              <p>
                ➡️ <b> Address : </b>Uttar Enayetpur, Tentultala , Palpara ,{" "}
                <br /> Chakdah ,Nadia. PIN : 741248{" "}
              </p>

              <p>
                ➡️ <b> Age: </b>23
              </p>

              <p>
                ➡️ <b> Email : </b>manasbaroi6699@gmail.com
              </p>
            </div>

            <div className="paragraph2">
              <p>
                Currently I am a undergraduate student at Government College Of
                Engineering and Textile Technology, Berhampore.Currently I am
                looking for internship opportunities. I am a full stack
                developer. And have 2 years of experiance in web development .
                You can contact me for hiring.
              </p>

              <a href="/contact#contact">
                <button type="submit" className="btn">
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="image-section">
        <img src={myimg} alt="myimg" />
      </div>
      </div>

      
      
    </section>
  );
};

export default About;
