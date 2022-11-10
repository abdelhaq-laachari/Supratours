import React from "react";
import "./Spinner.css";
// import ClipLoader from "react-spinners/ClipLoader";
// import ClockLoader from "react-spinners/ClockLoader";
// import RingLoader from "react-spinners/RingLoader";
import FadeLoader from "react-spinners/FadeLoader";


export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <FadeLoader color="#36d7b7" />
    </div>
  );
}
