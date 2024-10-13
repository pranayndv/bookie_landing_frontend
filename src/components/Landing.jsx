import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Info from "./Info";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton CSS
import "./styles/style.css"; // Your custom styles

const Landing = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state for skeleton view

  // Simulate loading time (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://43.204.150.69:5000/api/emails", {
        email,
      });
      setMessage(res.data.message);
      setEmail("");

      // Notify the user of success
      toast("Confirmed! We'll keep you posted with the latest buzz.", {
        icon: "",
        style: {
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
          backdropFilter: "blur(10px)", // Apply blur effect
          color: "black", // White text
          padding: "16px", // Optional: for better spacing
        },
      });
    } catch (error) {
      setMessage("Error: Email could not be saved.");

      // Notify the user of failure
      toast.error("Error: Email could not be saved.");
    }
  };

  // Prevent right-click on image
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 workSans">
      <motion.div
        className="flex flex-col xl:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 bg-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        {/* Left Section (Image with Skeleton) */}
        <div className="w-full h-auto lg:w-[30rem] lg:h-[30rem] rounded-full hover14 bg-gray-200 flex justify-center items-center">
          {loading ? (
            <Skeleton
              circle
              height={250} // Adjust the size for mobile, tablet, and desktop
              width={250}
              className="skeleton-loader" // Apply custom CSS if needed
            />
          ) : (
            <figure className="w-full h-full">
              <img
                src="/assets/smart.png"
                className="duration-500 ease-in-out hover:scale-105 select-none drop-shadow-2xl w-full h-full object-cover"
                onContextMenu={handleContextMenu}
                draggable="false"
                alt="Smart Image"
              />
            </figure>
          )}
        </div>

        {/* Right Section (Form with Skeleton) */}
        <div className="mt-10 lg:mt-0 text-center md:text-left z-[3] max-w-full">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold chrome text-black">
            {loading ? <Skeleton width={300} /> : "Get Early Notification"}
          </h1>

          {loading ? (
            <div className="mt-5">
              <Skeleton width="100%" height={30} />
              <Skeleton width="60%" height={30} style={{ marginTop: "1rem" }} />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-6 flex flex-col justify-center items-center w-full"
            >
              <div className="inputGroup w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30rem]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                  className="w-full"
                />
                <label htmlFor="email">Enter your email</label>
              </div>

              <button type="submit" className="button w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30rem]">
                <span className="relative z-10 text-white">Notify</span>
              </button>
              <Toaster position="bottom-center" reverseOrder={false} />
            </form>
          )}
        </div>
      </motion.div>

      <Info />
    </div>
  );
};

export default Landing;
