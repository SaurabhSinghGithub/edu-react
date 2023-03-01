import React from 'react'
import Common from '../components/Common';

const About = () => {
  const data = {
    name: "Diploma University",
    btn: "/service",
    image: require("../images/hero2.png"),
    btnName: "Our Services"
  }

  return (
    <Common {...data}/>
  )
}

export default About