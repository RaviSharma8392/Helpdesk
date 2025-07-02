import { useAuth } from "../hooks/auth";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading user info...</p>; // Optional fallback

  return (
    <div className="mt-10">
      <div className="bg-[#55D6C2] m-4 md:m-20 p-4 md:p-10 flex flex-col md:flex-row gap-6">
        {/* Profile Section */}
        <div className="bg-white p-6 md:p-20 w-full md:w-1/2 flex flex-col items-center">
          <div className="rounded-full border bg-[#C4C4C4] p-4 flex items-center justify-center w-[100px] h-[100px] mb-6">
            <svg
              width="64"
              height="64"
              viewBox="0 0 94 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.83333 95C7.83333 95 0 95 0 87.0833C0 79.1667 7.83333 55.4167 47 55.4167C86.1667 55.4167 94 79.1667 94 87.0833C94 95 86.1667 95 86.1667 95H7.83333ZM47 47.5C53.2326 47.5 59.2099 44.9978 63.617 40.5438C68.0241 36.0898 70.5 30.0489 70.5 23.75C70.5 17.4511 68.0241 11.4102 63.617 6.95621C59.2099 2.50223 53.2326 0 47 0C40.7674 0 34.7901 2.50223 30.383 6.95621C25.9759 11.4102 23.5 17.4511 23.5 23.75C23.5 30.0489 25.9759 36.0898 30.383 40.5438C34.7901 44.9978 40.7674 47.5 47 47.5Z"
                fill="black"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-4 text-center">
            Welcome, {user.userName}
          </h1>
          <p className="font-[Sanchez] text-[18px] md:text-[24px] font-[400] text-center">
            <strong>UserName:</strong> {user.userName}
          </p>
          <p className="font-[Sanchez] text-[18px] md:text-[24px] font-[400] text-center">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="font-[Sanchez] text-[18px] md:text-[24px] font-[400] text-center">
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        {/* Feedback Section */}
        <div className="bg-white h-auto md:h-40 rounded-2xl w-full md:w-1/2 flex flex-col justify-center items-center gap-5 p-4">
          <p className="text-lg md:text-xl font-semibold">Give Your Feedback</p>
          <ul className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <li key={star} className="cursor-pointer">
                <svg
                  width="27"
                  height="22"
                  viewBox="0 0 27 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.5 0L16.5309 8.2918H26.3393L18.4042 13.4164L21.4351 21.7082L13.5 16.5836L5.5649 21.7082L8.59584 13.4164L0.660737 8.2918H10.4691L13.5 0Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </li>
            ))}
          </ul>
          <button className="font-[Sanchez] bg-[#55D6C2] text-white px-6 py-2 rounded-2xl text-[18px] md:text-[24px] font-[400]">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
