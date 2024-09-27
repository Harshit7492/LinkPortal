import React, { useEffect, useState, useContext } from "react";
// import LinkBox from "@/components/LinkBox";
import UserHeader from "@/components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";

const BACKEND_URL = process.env.PORT || 'http://localhost:8080/'

const Dashboard = () => {
  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("LinkTreeToken");
    if (!token) {
        console.error("No token found in localStorage");  // Log if no token is found
        window.location.href = "/login";
        return;
    }

    console.log("Using token:", token);  // Log the token being sent

    fetch(`${BACKEND_URL}data/dashboard`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ tokenMail: token })
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.status === "error") {
            console.error("Error response:", data);  // Log the error response from the backend
            toast.error(data.error);
        } else {
            setData(data.userData);
            setUserData(data.userData);
            localStorage.setItem("userHandle", data.userData.handle);
            toast.success(data.message);
        }
    })
    .catch((err) => {
        console.error('Fetch error:', err);  // Log fetch error
        toast.error("An error occurred while fetching data");
    });
}, []);


  return (
    <>
      <div>
        <UserHeader />
        <main className="p-6 bg-gray-100 min-h-screen">
  {/* User Info Section */}
  <section className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center gap-6">
    <img
      src={data.avatar || "https://via.placeholder.com/150"}
      alt="User Avatar"
      className="w-16 h-16 rounded-full"
    />
    <div>
      <h2 className="text-xl font-semibold">{data.name || "User Name"}</h2>
      <p className="text-gray-500">{data.role || "User Role"}</p>
    </div>
  </section>

  {/* Stats Section */}
  <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-5">
    <LinkBox
      lbTitle="Total Links"
      lbNumber={data.links || 0}
      lbSvg="url"
      lbTheme="red"
    />
    <LinkBox
      lbTitle="Growth Rate"
      lbNumber="30%"
      lbSvg="growth"
      lbTheme="blue"
    />
    <LinkBox
      lbTitle="Emails Sent"
      lbNumber="12"
      lbSvg="email"
      lbTheme="red"
    />
    <LinkBox
      lbTitle="Instagram Growth"
      lbNumber="30%"
      lbSvg="ig"
      lbTheme="blue"
    />
  </section>

  {/* Additional Activities Section */}
  <section className="mt-8">
    <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
    <ul className="bg-white p-6 rounded-lg shadow-md">
      <li className="border-b pb-3 mb-3">
        <p>
          Link added:{" "}
          <a
            href="https://www.linkedin.com/in/harshit-singh8/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="text-sm text-gray-500">Date: 2024-09-20</p>
      </li>
      {/* Add more list items based on actual activities */}
    </ul>
  </section>
</main>

      </div>
    </>
  );
};

export default Dashboard;
