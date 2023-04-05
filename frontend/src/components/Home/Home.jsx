import React, { useEffect } from "react";
import "./Home.css";
import { Button } from "@mui/material";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/bg13.jpg";
import * as THREE from "three";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

const Home = ({ timelines }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);


    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 8, 5);
    pointLight2.position.set(-8, -8, -5);

    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(venus);
    scene.background = spaceTexture;

    venus.position.set(8, 5, 5);
    camera.position.set(4, 4, 8);

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotateY += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.003;
      camera.rotation.y = window.scrollY * 0.003;
    });
  }, []);


  const buttonContent = `View My Project < / >`;
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        {/* <div className="homeCanvasBox"> */}
        <section className="section hero-section">
          <div className="container grid grid-two-columns">
            <div className="section-left-hero-data">
              <p className="hero-top-data"> Hello I'm</p>
              <h1 className="hero-heading">Manas Baroi</h1>
              <p className="hero-para">Full Stack web-developer(MERN Stack)</p>

              <a href="/projects">
              <button  className="btn" >
                {buttonContent}
              </button>
              </a>

            </div>
          </div>
        </section>

        {/* </div> */}
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
};

export default Home;
