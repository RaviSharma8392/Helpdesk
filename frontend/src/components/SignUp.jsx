import React, { useState } from "react";
import axios from "axios";

const SignUP = ({ setIndex }) => {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (data.password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      return;
    }

    if (!data.role) {
      setErrorMsg("Please select a role.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://helpdesk-n4di.onrender.com/api/v1/auth/signUp",
        data
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Signup success:", response.data);
        setIndex(0); // go to login
      } else {
        setErrorMsg("Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
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

      {errorMsg && (
        <p className="text-red-500 text-center font-medium">{errorMsg}</p>
      )}

      <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
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

        <select
          name="role"
          value={data.role}
          onChange={handleFormChange}
          required
          className="py-[5px] px-2 border bg-white">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="technicalSupport">Technical Support</option>
          <option value="operationTeam">Operation Team</option>
          <option value="user">User</option>
        </select>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#296EF2] text-white px-6 py-2 rounded-2xl transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="flex justify-between my-3.5">
        <button className="text-red-400" disabled={loading}>
          Forgot password
        </button>
        <button onClick={() => setIndex(0)} disabled={loading}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUP;
