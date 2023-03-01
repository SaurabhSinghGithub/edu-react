import React from 'react'
import Common from '../components/Common';

const Home = () => {

  const data = {
    name: "Honors University",
    btn: "/contact",
    image: require("../images/hero1.png"),
    btnName: "Join Us"
  }

  return (
    <Common {...data} />
  )
}

export default Home;