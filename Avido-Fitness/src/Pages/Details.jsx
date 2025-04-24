import { useEffect, useState } from "react";
import { getPersonalDetails } from "../server";

function Details() {
  const [allDetails, setAllDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPersonalDetails();
      setAllDetails(response);
    };
    fetchData();
  }, []);

  return (
    <div className="main text-light">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-8 m-auto mt-5">
            <h1 className="mt-5 mb-4">All Replay</h1>
            <table className="table ">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Street Address</th>
                  <th>City</th>
                  <th>PinCode</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {allDetails &&
                  allDetails.map((element) => (
                    <tr key={element.id}>
                      <td>{element.firstName}</td>
                      <td>{element.lastName}</td>
                      <td>{element.mobile}</td>
                      <td>{element.email}</td>
                      <td>{element.address}</td>
                      <td>{element.address2}</td>
                      <td>{element.city}</td>
                      <td>{element.pinCode}</td>
                      <td>{element.state}</td>
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
export default Details;
