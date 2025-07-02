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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);

    try {
      const response = await axios.post(
        "https://helpdesk-n4di.onrender.com/api/v1/auth/signIn",
        loginData
      );
      login(response.data);
      console.log("Login successful:", response.data.role);
      if (response.data.role === "admin") {
        navigate("/admin");
      } else if (response.data.role === "user") {
        navigate("/user");
      } else if (response.data.role === "technicalSupport") {
        navigate("/technicalsupport");
      } else if (response.data.role === "operationTeam") {
        navigate("/operation");
      }

      // Save token to localStorage/cookies or redirect if needed
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials or server error.");
    }
  };

  return (
    <div className="bg-[#EFEDED80] shadow-2xl px-10 md:px-[100px] lg:px-[220px] py-20">
      <h1 className="py-5 text-[20px] lg:text-[48px] font-bold italic text-center font-['Roboto']">
        Helpdesk System
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
            className="bg-[#03CC17] text-white px-15 py-2 rounded-2xl">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-between my-3.5">
        <button className="text-red-400">Forgot password</button>
        <button onClick={() => setIndex(1)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
