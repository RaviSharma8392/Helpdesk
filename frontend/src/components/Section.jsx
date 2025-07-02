import React from "react";

const Section = () => {
  return (
    <div className="flex flex-wrap gap-30   p-6">
      {/* Left Image Section */}
      <div className="bg-[#55D6C2] p-5 py-30 rounded-2xl shadow-lg">
        <img
          src="/image.png"
          alt="Main Visual"
          className="w-80 h-50 object-contain"
        />
      </div>

      {/* Right Info Section */}
      <div className="flex flex-col gap-10 justify-between">
        <div className="flex gap-30 px-20 py-10 bg-[#55D6C2] shadow-md justify-center">
          <img
            src="/image1.png"
            alt="Image 1"
            className="w-30 h-40 object-contain"
          />
          <img
            src="/image2.png"
            alt="Image 2"
            className="w-30 h-40 object-contain"
          />
        </div>

        {/* Feedback section */}
        <div className="flex flex-col gap-2 px-10 py-10 bg-[#55D6C2] rounded-2xl shadow-md">
          <h1 className="text-xl font-semibold text-white">
            Customer Feedback
          </h1>
          <p className="text-lg text-white">★★★★★</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
