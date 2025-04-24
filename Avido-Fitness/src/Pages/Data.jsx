import React, { useEffect, useState } from "react";
import { getContactUser } from "../server";
function Data() {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getContactUser();
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
                  <th>UserName</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {alldata &&
                  alldata.map((element) => (
                    <tr key={element.id}>
                      <td>{element.userName}</td>
                      <td>{element.mobile}</td>
                      <td>{element.email}</td>
                      <td>{element.message}</td>
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

export default Data;
