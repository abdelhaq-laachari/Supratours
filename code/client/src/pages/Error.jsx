import "../styles/Error.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Lottie from "lottie-react";
import ErrorGif from '../assets/animated/404.json';
import Button from "../components/Buttons/Button";

function Error() {

  return (
    <section className="page_404">
      <div className="col-sm-10 col-sm-offset-1 flex flex-col justify-center items-center h-screen text-center">
        <div className="md:w-1/3">
          {/* <Lottie isClickToPauseDisabled={true} options={loadAnimation} width={400} /> */}
          <Lottie
            animationData={ErrorGif}
            loop={true}
          />
        </div>
        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <Link to="/home" element={<Home />}>
            <Button name="Go Home" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error;
