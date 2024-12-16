import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "./constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    // const nameValue = name.current?.value || ""; // Empty string if ref is null
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";

    // Validate form data
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    // Sign In/Sign Up logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current?.value, photoURL: USER_AVATAR
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(`${error.code}: ${error.message}`);
            });

        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User Signed In:", user);
          navigate('/browse');
          setErrorMessage(null); // Clear errors on success
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Reset error message when toggling
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/158a0e2a-cca4-40f5-86b8-11ea2a281b06/web_tall_panel/IN-en-20241202-TRIFECTA-perspective_052fb757-35ce-4655-946e-3c9ffac95fd0_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/4 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Name Field (Only for Sign-Up) */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-md"
          />
        )}

        {/* Email Field */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />

        {/* Password Field */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-md"
        />

        {/* Error Message */}
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        {/* Submit Button */}
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle Sign-In/Sign-Up */}
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix-GPT? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
