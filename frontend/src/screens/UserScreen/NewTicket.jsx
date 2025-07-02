import React from "react";

const NewTicket = () => {
  return (
    <div className="px-10  pb-8 md:px-20">
      <h1 className="font-[Sanchez] text-center text-[36px] font-[400] py-10">
        Create New Ticket
      </h1>

      <form className="space-y-6">
        {/* Top fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="ticketNo" className="text-[20px] font-[Sanchez]">
              Ticket No.
            </label>
            <input
              id="ticketNo"
              type="text"
              className="bg-[#C4C4C4A1] p-2 rounded-md"
              placeholder="Enter ticket number"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-[20px] font-[Sanchez]">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="bg-[#C4C4C4A1] p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-[20px] font-[Sanchez]">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-[#C4C4C4A1] p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="department" className="text-[20px] font-[Sanchez]">
              Department
            </label>
            <input
              id="department"
              type="text"
              className="bg-[#C4C4C4A1] p-2 rounded-md"
              placeholder="Enter department"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-[20px] font-[Sanchez]">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="bg-[#C4C4C4A1] p-2 rounded-md w-full"
            placeholder="Enter subject"
          />
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="category" className="text-[20px] font-[Sanchez]">
                Category
              </label>
              <input
                id="category"
                type="text"
                className="bg-[#C4C4C4A1] p-2 rounded-md"
                placeholder="Enter category"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="type" className="text-[20px] font-[Sanchez]">
                Type
              </label>
              <input
                id="type"
                type="text"
                className="bg-[#C4C4C4A1] p-2 rounded-md"
                placeholder="Enter type"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="priority" className="text-[20px] font-[Sanchez]">
                Priority
              </label>
              <input
                id="priority"
                type="text"
                className="bg-[#C4C4C4A1] p-2 rounded-md"
                placeholder="Enter priority"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-[20px] font-[Sanchez]">
              Description
            </label>
            <textarea
              id="description"
              rows="7"
              className="bg-[#C4C4C4A1] p-3 rounded-md resize-none"
              placeholder="Describe the issue..."></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            className="bg-[#55D6C2] text-white font-semibold px-8 py-2 rounded hover:bg-[#40b8a7] transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
