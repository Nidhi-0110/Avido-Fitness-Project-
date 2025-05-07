import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { postPaymentData } from "../server";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { membershipData } = location.state || {}; // Destructure membershipData from location.state
  const membershipPrice = membershipData?.price;

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  function handleChange(e) {
    setPaymentData((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postPaymentData(paymentData);
    console.log(paymentData);
    setPaymentData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    });
    alert("Your payment is successful");
  }

  return (
    <>
      <div className="main text-light px-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 p-2 bg-dark">
              <div className="logo d-flex">
                <div className="payment-box-logo m-2">
                  <img src="" alt="" />
                </div>
                <p className="my-3 mx-2">Avido Fitness</p>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button bg-dark text-light fs-4"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne">
                      Payable Now
                    </button>
                  </h3>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse bg-dark text-light"
                    data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body d-flex justify-content-between ">
                      <p>Sub Total</p>
                      <p>{membershipPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="back d-flex px-1">
                <i className="bi bi-chevron-left fs-6 py-2"></i>
                <p className="payment-text py-2">
                  {" "}
                  <Link
                    className="payment-text-back ms-2"
                    to="/personalDetails">
                    Back{" "}
                  </Link>
                </p>
              </div>
              <p className="payment-title text-uppercase p-2">
                Cards (Debit / Credit)
              </p>
              <div className="payment-box bg-dark px-5 py-3 mb-5 mx-2">
                <form action="" onSubmit={handleSubmit}>
                  <div className="col-12 card-no my-3">
                    <label for="inputText" className="form-label">
                      Card No.
                    </label>
                    <input
                      type="tel"
                      className="form-control p-3 rounded-0"
                      id="inputTel"
                      name="cardNumber"
                      aria-label="tel"
                      placeholder="Enter Card Number"
                      value={paymentData.cardNumber}
                      onChange={handleChange}
                      required
                    />
                    <div className="payment-icon">
                      {" "}
                      <i className="bi bi-credit-card-fill fs-4"></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 my-3">
                      <label for="inputEmail4" className="form-label">
                        Expiry
                      </label>
                      <input
                        type="text"
                        className="form-control p-3 rounded-0"
                        placeholder="MM/YY"
                        name="expiryDate"
                        aria-label="text"
                        value={paymentData.expiryDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-6 my-3">
                      <label for="inputEmail4" className="form-label">
                        CVV <i className="bi bi-question-circle ms-1"></i>
                      </label>
                      <input
                        type="tel"
                        className="form-control p-3 rounded-0"
                        placeholder="Enter CVV"
                        name="cvv"
                        aria-label="tel"
                        value={paymentData.cvv}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 my-3">
                      <label for="inputText" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="tel"
                        className="form-control p-3 rounded-0"
                        id="inputTel"
                        name="cardName"
                        placeholder="Enter name as on card"
                        value={paymentData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 mb-4 mt-2">
                      <button
                        type="button"
                        className="btn payment-btn py-3 rounded-0 btn-lg"
                         onClick={() => navigate("/paymentSuccessful")}>
                        Processed
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
