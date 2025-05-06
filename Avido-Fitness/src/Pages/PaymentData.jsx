import React, { useEffect, useState } from "react";
import { getPaymentData } from "../server";

function PaymentData() {
  const [allData, setAlldata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPaymentData();
      setAlldata(response);
    };
    fetchData();
  }, []);

  return (
    <div className="main text-light">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-7 m-auto mt-5 p-5">
            <h1 className="my-4">All Data</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>CardNumber</th>
                  <th>ExpiryDate</th>
                  <th>Cvv</th>
                  <th>CardName</th>
                </tr>
              </thead>
              <tbody>
                {allData &&
                  allData.map((element) => (
                    <tr key={element.id}>
                      <td>{element.CardNumber}</td>
                      <td>{element.expiryDate}</td>
                      <td>{element.cvv}</td>
                      <td>{element.cardName}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentData;
