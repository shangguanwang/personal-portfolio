import "./App.css";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Home from "./views/Home";
import { Navbar } from "./components";
import {Experience} from "./views";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
      </Router>
  );
}

export default App;
