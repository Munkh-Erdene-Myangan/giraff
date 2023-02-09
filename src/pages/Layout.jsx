import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className={`nav-elements `}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/About">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <div class="dropdown">
                <button class="dropbtn">
                  Giraffe Info's
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <li>
                    <Link to="/DietInformation">Diet Information</Link>
                  </li>
                  <li>
                    <Link to="/AnimalBehavior">Animal Behavior</Link>
                  </li>
                  <li>
                    <Link to="/ImageGallery">Image Gallery</Link>
                  </li>
                  <li>
                    <Link to="/ScientificNameAndClassification">
                      Scientific Name and Classification
                    </Link>
                  </li>
                  <li>
                    <Link to="/AnimalAnatomyAndBiology">
                      Animal Anatomy and Biology
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
