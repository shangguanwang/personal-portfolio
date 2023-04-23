import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
