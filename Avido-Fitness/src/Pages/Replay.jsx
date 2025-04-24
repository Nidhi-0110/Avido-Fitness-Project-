// import React, { useEffect, useState } from "react";
// import { getContactUser } from "../server";
// function Replay() {
//   const [allReplay, setAllReplay] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getContactUser();
//       setAllReplay(response);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-7 m-auto">
//             <h1>All Replay</h1>
//             <table className="table table-danger table-hover">
//               <thead>
//                 <tr>
//                   <th>UserName</th>
//                   <th>Mobile</th>
//                   <th>Email</th>
//                   <th>Message</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allReplay &&
//                   allReplay.map((element) => (
//                     <tr key={element.id}>
//                       <td>{element.userName}</td>
//                       <td>{element.mobile}</td>
//                       <td>{element.email}</td>
//                       <td>{element.message}</td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Replay;
