import { useRouter } from "next/router";
import React from "react";

const Failed = ({ Failure }) => {
  const router = useRouter();
  return (
    <>
      <div className="container failed-main d-flex justify-content-center">
        <div className="failed-container ">
          <div className="failed-header text-center">
            <img style={{ width: "100px" }} src="/resource/images/cross.svg" />
          </div>
          <div className="failed-details">
            <span>{Failure} </span>
          </div>
          <div className="failed-btn text-center mt-3">
            <button onClick={() => router.push("/")} className="retry-btn">
              Try Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Failed;
