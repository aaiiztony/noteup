import React from "react";

const About = () => {
  return (
    <div
      className="container w-50 m-auto"
      style={{
      height: "73vh",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "center",
    alignContent:"center"}}
    >
      <h2>Just the player adding some skill attribute!</h2>
      <p>- I just don't like boring stuff, I love them.<br /> - Hate coding,
        Hate writing paragraphs about myself! (Ironic ik)<br />- Love food,
        good music and bit of laugh on my weird jokes
      </p>
      <div className="contact-btn text-center">
      <a href="http://www.linkedin.com/in/aaiztony">
        <i class="fa-brands fa-linkedin mx-1 text-white fa-xl"></i>
      </a>
      <a href="mailto:aaiiztony@gmail.com">
      <i class="fa-solid fa-envelope mx-1 text-white fa-xl"></i>
      </a>
      </div>
    </div>
  );
};

export default About;
