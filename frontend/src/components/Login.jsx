import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Login = ({ setIndex }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://helpdesk-n4di.onrender.com/api/v1/auth/signIn",
        loginData
      );

      login(response.data);

      const role = response.data.role;
      console.log("Login successful:", role);

      switch (role) {
        case "admin":
          navigate("/admin");
          break;
        case "user":
          navigate("/user");
          break;
        case "technicalSupport":
          navigate("/technicalsupport");
          break;
        case "operationTeam":
          navigate("/operation");
          break;
        default:
          setErrorMsg("Unknown user role.");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid credentials or server error.";
      setErrorMsg(message);
      console.error("Login failed:", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#EFEDED80] shadow-2xl px-10 md:px-[100px] lg:px-[220px] py-20">
      <h1 className="py-5 text-[20px] lg:text-[48px] font-bold italic text-center font-['Roboto']">
        Helpdesk System
      </h1>

      {errorMsg && (
        <p className="text-red-500 text-center font-medium">{errorMsg}</p>
      )}

      <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={loginData.userName}
          onChange={handleChange}
          required
          className="py-[5px] px-2 border bg-white text-start"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
          className="py-[5px] px-2 border bg-white"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#03CC17] text-white px-10 py-2 rounded-2xl transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>
      </form>

      <div className="flex justify-between my-3.5">
        <button className="text-red-400" disabled={loading}>
          Forgot password
        </button>
        <button onClick={() => setIndex(1)} disabled={loading}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
