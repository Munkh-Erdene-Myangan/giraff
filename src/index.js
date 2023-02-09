import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AnimalAnatomyAndBiology from "./pages/AnimalAnatomyAndBiology";
import ScientificNameAndClassification from "./pages/ScientificNameAndClassification";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AnimalBehavior from "./pages/AnimalBehavior";
import NoPage from "./pages/NoPage";
import ImageGallery from "./pages/ImageGallery";
import DietInformation from "./pages/DietInformation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="AnimalAnatomyAndBiology"
            element={<AnimalAnatomyAndBiology />}
          />
          <Route path="AnimalBehavior" element={<AnimalBehavior />} />
          <Route
            path="ScientificNameAndClassification"
            element={<ScientificNameAndClassification />}
          />
          <Route
            path="ScientificNameAndClassification"
            element={<ScientificNameAndClassification />}
          />
          <Route path="DietInformation" element={<DietInformation />} />
          <Route path="ImageGallery" element={<ImageGallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
