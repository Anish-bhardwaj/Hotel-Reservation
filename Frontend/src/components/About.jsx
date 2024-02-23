import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Sandwich Slinger, we're all about redefining the art of sandwich-making. From classic deli favorites to bold and inventive creations, our menu is a celebration of flavors, textures, and culinary innovation. Each sandwich is meticulously prepared using the freshest ingredients, locally sourced whenever possible, ensuring that every bite bursts with deliciousness.
              
            </p>
            <Link
          to={"menu"}
          spy={true}
          smooth={true}
          duration={500}
          >
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
