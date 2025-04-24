import React from "react";
import { useNavigate } from "react-router-dom";
import Done from "../assets/done.png";

function PaymentSuccessful() {
  const navigate = useNavigate();
  return (
    <div className="main px-5">
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-5 m-auto bg-light py-5 text-center">
            <div className="paymentSuccessful-box m-auto my-3">
              <img className="paymentSuccessful-img" src={Done} alt="" />
            </div>
            <p className="paymentSuccessful-title">Thank You</p>
            <p className="paymentSuccessful-text">Payment Done successfully</p>
            <button
              type="button"
              className="btn paymentSuccessful-btn btn-dark px-4 py-2 rounded-0 btn-lg"
              onClick={() => navigate("/")}>
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
