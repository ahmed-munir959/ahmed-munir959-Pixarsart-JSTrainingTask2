import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// BrowserRouter  : Wraps the app to enable routing
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Button></Button>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
