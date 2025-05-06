import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Pricing from "./Pages/Pricing";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
import BlogDetails from "./Pages/BlogDetails";
import MembershipDetails from "./Pages/MembershipDetails";
import PersonalDetails from "./Pages/PersonalDetails";
import Payment from "./Pages/Payment";
import PaymentSuccessful from "./Pages/PaymentSuccessful";
import WhyUs from "./Pages/WhyUs";
import FAQ from "./Pages/FAQ";
import InnerServices from "./Pages/InnerServices";
import Data from "./Pages/Data";
import Details from "./Pages/Details";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Gallery from "./Pages/Gallery";
import PaymentData from "./Pages/PaymentData";
// import Abc from "./Pages/Abc";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/innerServices" element={<InnerServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/membershipDetails" element={<MembershipDetails />} />
        <Route path="/personalDetails" element={<PersonalDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
        <Route path="/data" element={<Data />} />
        <Route path="/details" element={<Details />} />
        <Route path="/terms&Conditions" element={<TermsConditions />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paymentData" element={<PaymentData />} />
        {/* <Route path="/abc" element={<Abc />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
