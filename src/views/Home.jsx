import React from 'react';
import { Navbar, About, Projects, Footer} from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home