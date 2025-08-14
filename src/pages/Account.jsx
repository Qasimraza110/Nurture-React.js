import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Account = () => {
  const [tab, setTab] = useState("login");
  const {
    register: loginRegister,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
  } = useForm();
  const {
    register: regRegister,
    handleSubmit: handleRegister,
    formState: { errors: regErrors },
  } = useForm();

  const onLogin = (data) => {
    // handle login
    alert(`Login Success!\nUsername: ${data.username}`);
  };

  const onRegister = (data) => {
    // handle register
    alert(`Register Success!\nUsername: ${data.username}\nEmail: ${data.email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 py-8 px-2">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden animate-fade-in">
        <div className="md:w-1/2 flex items-center justify-center bg-green-50 p-6">
          <img
            src="/pexels-minan1398-793012.jpg"
            alt="Account"
            className="rounded-xl w-full h-auto object-cover shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex mb-8 relative">
            <button
              className={`flex-1 py-2 text-lg font-semibold transition-all duration-300 ${
                tab === "login"
                  ? "text-green-700 border-b-4 border-green-500"
                  : "text-gray-400"
              }`}
              onClick={() => setTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-lg font-semibold transition-all duration-300 ${
                tab === "register"
                  ? "text-green-700 border-b-4 border-green-500"
                  : "text-gray-400"
              }`}
              onClick={() => setTab("register")}
            >
              Register
            </button>
          </div>
          {/* Login Form */}
          <form
            className={`space-y-5 transition-all duration-500 ${
              tab === "login" ? "block animate-slide-in" : "hidden"
            }`}
            onSubmit={handleLogin(onLogin)}
            autoComplete="off"
          >
            <input
              {...loginRegister("username", { required: "Username required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Username"
            />
            {loginErrors.username && (
              <p className="text-red-500 text-sm">{loginErrors.username.message}</p>
            )}
            <input
              type="password"
              {...loginRegister("password", { required: "Password required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Password"
            />
            {loginErrors.password && (
              <p className="text-red-500 text-sm">{loginErrors.password.message}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Login
            </button>
            <div className="text-right">
              <a href="#" className="text-green-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </form>
          {/* Register Form */}
          <form
            className={`space-y-5 transition-all duration-500 ${
              tab === "register" ? "block animate-slide-in" : "hidden"
            }`}
            onSubmit={handleRegister(onRegister)}
            autoComplete="off"
          >
            <input
              {...regRegister("username", { required: "Username required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Username"
            />
            {regErrors.username && (
              <p className="text-red-500 text-sm">{regErrors.username.message}</p>
            )}
            <input
              type="email"
              {...regRegister("email", {
                required: "Email required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Email"
            />
            {regErrors.email && (
              <p className="text-red-500 text-sm">{regErrors.email.message}</p>
            )}
            <input
              type="password"
              {...regRegister("password", { required: "Password required" })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Password"
            />
            {regErrors.password && (
              <p className="text-red-500 text-sm">{regErrors.password.message}</p>
            )}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.7s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-slide-in {
            animation: slideIn 0.5s;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}
      </style>
    </div>
  );
};
export default Account;