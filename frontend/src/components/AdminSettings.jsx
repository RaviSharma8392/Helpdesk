import React, { useState } from "react";

const AdminSettings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const Settings = [
    { section: "General", name: ["Language", "Data Backup"] },
    { section: "Connect To", name: ["GoDash", "SuperController"] },
    { section: "Email", name: ["Enable SMTP"] },
    {
      section: "Authorization",
      name: ["Edit authorization", "Authority Level"],
    },
    { section: "Notification", name: ["Enable Notification"] },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-5 px-8">
      <h1 className="  text-[36px] font-[Sanchez]   items-center">Settings</h1>
      {Settings.map((setting, index) => (
        <div key={index} className="flex flex-col">
          <div className="bg-[#55D6C2] py-1 px-3 text-[20px] font-[Sanchez] font-[400] flex gap-2 items-center">
            <h1>{setting.section}</h1>
            <button onClick={() => handleToggle(index)}>
              <svg
                width="28"
                height="12"
                viewBox="0 0 28 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.31635 0.251753C0.416375 0.171951 0.535201 0.108636 0.666021 0.0654361C0.796841 0.0222361 0.937086 0 1.07872 0C1.22036 0 1.3606 0.0222361 1.49142 0.0654361C1.62224 0.108636 1.74107 0.171951 1.84109 0.251753L14.0003 9.92985L26.1595 0.251753C26.2596 0.17208 26.3784 0.108879 26.5093 0.0657606C26.6401 0.0226417 26.7803 0.000448657 26.9218 0.000448657C27.0634 0.000448657 27.2036 0.0226417 27.3344 0.0657606C27.4652 0.108879 27.5841 0.17208 27.6842 0.251753C27.7843 0.331426 27.8637 0.426012 27.9179 0.53011C27.9721 0.634208 28 0.745781 28 0.858456C28 0.971131 27.9721 1.0827 27.9179 1.1868C27.8637 1.2909 27.7843 1.38548 27.6842 1.46516L14.7627 11.7482C14.6626 11.828 14.5438 11.8914 14.413 11.9346C14.2822 11.9778 14.1419 12 14.0003 12C13.8586 12 13.7184 11.9778 13.5876 11.9346C13.4568 11.8914 13.3379 11.828 13.2379 11.7482L0.31635 1.46516C0.216071 1.38556 0.136511 1.29099 0.082227 1.18689C0.0279426 1.08278 0 0.971171 0 0.858456C0 0.74574 0.0279426 0.634133 0.082227 0.530025C0.136511 0.425917 0.216071 0.331354 0.31635 0.251753Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {openIndex === index && (
            <div className="bg-[#C4C4C45E] py-2 px-12 ml-5 text-[18px] font-[Sanchez] text-gray-800">
              {setting.name.map((item) => (
                <h1 key={item.index}>{item}</h1>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminSettings;
