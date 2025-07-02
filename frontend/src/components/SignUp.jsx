import React, { useState } from "react";
import axios from "axios";

const SignUP = ({ setIndex }) => {
  const [data, setData] = useState({
    userName: "admin124",

    email: "admin1234@gmail.com",
    password: "admin@1234",
    role: "admin",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting signup data:", data);

      const response = await axios.post(
        "https://helpdesk-n4di.onrender.com/api/v1/auth/signUp",
        data
      );

      if (response.status === 201 || response.status === 200) {
        console.log("Signup success:", response.data);
        setIndex(0);
      } else {
        console.error("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-[#EFEDED80] shadow-2xl px-10 md:px-[100px] lg:px-[220px] py-20">
      <h1 className="pt-5 text-[20px] lg:text-[48px] font-bold italic text-center font-['Roboto']">
        Helpdesk System
      </h1>
      <p className="py-2 text-[20px] text-center font-['Roboto']">
        Sign up here
      </p>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={data.userName}
          onChange={handleFormChange}
          required
          className="py-[5px] px-2 border bg-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleFormChange}
          required
          className="py-[5px] px-2 border bg-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleFormChange}
          required
          className="py-[5px] px-2 border bg-white"
        />
        <input
          type="text"
          name="role"
          placeholder="Role (e.g., user/admin)"
          value={data.role}
          onChange={handleFormChange}
          required
          className="py-[5px] px-2 border bg-white"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#296EF2] text-white px-6 py-2 rounded-2xl">
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex justify-between my-3.5">
        <button className="text-red-400">Forgot password</button>
        <button onClick={() => setIndex(0)}>Sign In</button>
      </div>
    </div>
  );
};

export default SignUP;
