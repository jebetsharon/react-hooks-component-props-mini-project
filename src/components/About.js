import React from 'react';
const defaultImage = "https://via.placeholder.com/215";

const About = ({ image = defaultImage, about }) => {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;