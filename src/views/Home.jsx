import React from 'react';
import { Hero, Navbar, Projects, Footer} from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home