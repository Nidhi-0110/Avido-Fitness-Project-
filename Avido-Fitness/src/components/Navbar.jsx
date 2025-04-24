import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "../App.css";

function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid py-3 px-5 bg-dark navbar-dark m-0">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav text-uppercase">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Pages
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item " to="/whyUs">
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pricing">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-navbar text-light">
                    Register
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
