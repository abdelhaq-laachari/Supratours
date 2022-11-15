import { useState, useEffect } from "react";
import SignInGif from "../assets/animated/signIn.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "./Home";
import "../styles/SignIn.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logIn, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner/Spinner";
// import "react-toastify/dist/ReactToastify.css";

const Sign = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const idTrip = localStorage.getItem("idTrip");

  useEffect(() => {
    // check for error and show toast alert
    if (isError) {
      toast.error(message);
    }
    // if user logged in redirect him to home
    if (isSuccess) {
      if(idTrip){
        // navigate(`/booking/${idTrip}`);
        navigate("/booking");
      }
      else{
        navigate("/");
      }
    }
    // we need to reset everything
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginFunction = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    dispatch(logIn(formData));
  };
  // check for loading
  if (isLoading && email && password) {
    return <Spinner />;     
  }
  // validate function for form errors
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  return (
    <div className="section flex flex-col h-screen justify-around items-center bg-slate-800 md:flex-row ">
      <div className=" bg-transparent md:w-1/3 w-screen ">
        <div className="md:flex hidden">
          <Lottie animationData={SignInGif} width={400} />
        </div>
      </div>
      <section className=" dark:bg-gray-900 md:w-1/3 w-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full flex flex-col justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-4" onSubmit={loginFunction}>
                {/* email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    // if an error exists, add the error class
                    className={`w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-500 border rounded-md dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                    ${formErrors.email && "border-red-500"}`}
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <p
                  className={`text-red-500 text-xs italic ${
                    formErrors.email && "block"
                  }`}
                >
                  {formErrors.email}
                </p>
                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={onChange}
                  />
                </div>
                <p
                  className={`text-red-500 text-xs italic ${
                    formErrors.password && "block"
                  }`}
                >
                  {formErrors.password}
                </p>
                <button
                  type="submit"
                  className="w-full text-white border bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link to="/signUp" element={<SignUp />}>
                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </span>
                  </Link>
                </p>
                <Link to="/" element={<Home />}>
                  <span className="font-medium text-center text-primary-600  hover:underline dark:text-primary-500">
                    Go Home
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sign;
