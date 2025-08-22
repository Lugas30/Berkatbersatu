import "./assets/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ConstructionProcessFS } from "./pages/Construction-Floating-Solar";
import { ConstructionProcessTJS } from "./pages/Construction-TJS";
import { WhyUs } from "./pages/WhyUs";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/Construction-Floating-Solar"
          element={<ConstructionProcessFS />}
        />
        <Route path="/Construction-TJS" element={<ConstructionProcessTJS />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
