// import React from "react";
// import { useNavigate } from "react-router-dom";

// function SignIn() {
//   const Navigate = useNavigate();
//   return (
//     <>
//       <div className="main text-light">
//         <div className="container-fluid px-5 py-5">
//           <div className="row">
//             <div className="col-5  py-5 px-3 m-auto">
//               <div className="signIn-box bg-dark p-4">
//                 <p className="signIn-title ps-5 pt-4">Welcome Back! </p>
//                 <form action="" className="px-5">
//                   <div className="email">
//                     <label
//                       for="exampleFormControlInput1"
//                       className="form-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control p-2 rounded-0"
//                       id="exampleFormControlInput1"
//                       placeholder="name@example.com"
//                       required
//                     />
//                   </div>
//                   <div className="password my-3">
//                     <label for="inputPassword5" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       id="inputPassword5"
//                       className="form-control p-2 rounded-0"
//                       aria-describedby="passwordHelpBlock"
//                       required
//                     />
//                   </div>
//                   <div className="check d-flex justify-content-between">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="flexCheckIndeterminate"
//                         required
//                       />
//                       <label
//                         className="form-check-label"
//                         for="flexCheckIndeterminate">
//                         Remember me
//                       </label>
//                     </div>
//                     <p className="signIn-text">Forgot Password?</p>
//                   </div>
//                   <button
//                     type="submit"
//                     className="btn sign-btn p-3 fs-6 mt-3"
//                     onClick={() => Navigate("/")}>
//                     Sign In
//                   </button>
//                   <hr />
//                   <div className="signIn-option d-flex justify-content-center">
//                     <p className="signIn-text1">
//                       <a href="">Don’t you Have an Account ?</a>
//                     </p>
//                     <p
//                       className="signIn-text ms-3 pb-3"
//                       onClick={() => Navigate("/signup")}>
//                       <a href="">Create New an Account </a>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignIn;
