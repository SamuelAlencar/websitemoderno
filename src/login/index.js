import React, { useState } from "react";
import firebase from "../data/Firebase";
import "../css/tailwind.css";
import ReactDOM from "react-dom";
import Home from "../pages/home";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        ReactDOM.render(<Home />, document.getElementById("root"));
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error.message);
      })
      .finally(() => {
        setEmail("");
        setPass("");
        errorMessage("");
      });
  };

  const cadastro = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        setSuccessMessage("Successfully registered.");
        setErrorMessage("");
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error.message);
      })
      .finally(() => {
        setEmail("");
        setPass("");
      });
  };

  const activeButtons = () => {
    if (pass && email) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-0">
      <div className="container py-4 justify-center flex">
        <div className="w-full max-w-lg py-4">
          <h1 className="text-2xl	text-center	py-4">Login to continue</h1>

          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                E-mail
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Type your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="mb-6 text-center">
                <span className="text-red-700 text-base font-bold">{errorMessage}</span>
              </div>
            )}
            {successMessage &&(
              <div className="mb-6 text-center">
                <span className="text-green-700 text-base font-bold">{successMessage}</span>
              </div>
            )}

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-40 mx-1"
                type="button"
                onClick={login}
                disabled={activeButtons()}
              >
                LOGIN
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-40 mx-1"
                type="button"
                onClick={cadastro}
                disabled={activeButtons()}
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
