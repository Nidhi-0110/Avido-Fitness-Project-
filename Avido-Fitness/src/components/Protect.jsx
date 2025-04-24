import React from "react";
import { SignIn, useUser } from "@clerk/clerk-react";
function Protect({ children }) {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <h1>Lodding....</h1>;
  console.log("hello");
  if (!isSignedIn) {
    return (
      <>
        <div className=" main my-5 py-5">
          <h1 className="my-5 p-5">Please signin</h1>
        </div>
      </>
    );
  }
  return { children };
}

export default Protect;
