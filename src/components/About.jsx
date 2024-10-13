import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const About = () => {
  // Right-click prevention
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate content loading
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="sm:flex items-center max-w-screen-xl mx-auto workSans">
        <div className="sm:w-1/2 p-10">
          {loading ? (
            <Skeleton height={300} />
          ) : (
            <motion.div
              className="image object-center text-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
            >
              <img
                className="select-none"
                src="/assets/about.jpg"
                onContextMenu={handleContextMenu}
                draggable="false"
                alt="about"
              />
            </motion.div>
          )}
        </div>

        <motion.div
          className="sm:w-1/2 p-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          <div className="text">
            {loading ? (
              <>
                <Skeleton height={40} width="80%" />
                <Skeleton count={4} height={20} className="mb-2" />
              </>
            ) : (
              <>
                <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                  About <span className="text-[#9d78ec]">Our Company</span>
                </h2>
                <p className="text-gray-700 text-justify">
                  <span className="mb-2">
                    &emsp;Bookie is a pioneering platform dedicated to transforming
                    the landscape of local services by bringing convenience right to
                    your doorstep. Our mission is to redefine the way people access
                    essential services, making them more accessible, reliable, and
                    hassle-free.
                  </span>
                  <span className="mb-2">
                    &emsp;With a commitment to innovation and customer satisfaction,
                    bookie.services offers a comprehensive range of home services,
                    spanning from household repairs and maintenance to beauty and
                    wellness, all conveniently accessible through our user-friendly
                    app or website.
                  </span>
                  <span className="mb-2">
                    &emsp; Our nationwide network of service providers ensures that
                    no matter where you are, you can rely on bookie.services to
                    deliver prompt and professional assistance. Whether it's fixing
                    a leaky faucet, getting a haircut, or arranging for a yoga
                    session, we've got you covered.
                  </span>
                  <span className="mb-2">
                    &emsp;At bookie.services, we believe in the power of technology
                    to simplify lives and empower communities. Join us in our
                    journey to make everyday tasks easier and more enjoyable for
                    everyone. Experience the convenience of doorstep services with
                    bookie.services today!
                  </span>
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
