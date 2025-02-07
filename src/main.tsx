import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";
import "./index.css";
import Header from "./layout/Header";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Header />}>
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
