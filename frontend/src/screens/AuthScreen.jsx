import React, { useState } from "react";
import Login from "../components/Login";
import SignUP from "../components/SignUp";

const AuthScreen = () => {
  const [index, setIndex] = useState(0);
  const Screens = [Login, SignUP];
  const CurrentScreen = Screens[index];
  return (
    <div className="container flex justify-center bg-[#55D6C2] w-full h-screen items-center">
      <CurrentScreen setIndex={setIndex} />
    </div>
  );
};

export default AuthScreen;
