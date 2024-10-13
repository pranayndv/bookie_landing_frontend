import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Info = () => {
  // State to simulate loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2s loading time
    return () => clearTimeout(timer);
  }, []);

  // Right-click prevention
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  // Refs to track when sections come into view
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Check if each section is in view
  const isInView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
  const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });
  const isInView3 = useInView(ref3, { triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* First section */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 text-center md:text-start mt-10 gap-4 overflow-hidden">
        <motion.div
          ref={ref1}
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView1 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          {loading ? (
            <Skeleton width={"70%"} height={20} borderRadius={10} />
          ) : (
            <p className="text-gray-600 font-bold">WELCOME TO BOOKIE</p>
          )}

          {loading ? (
            <Skeleton width={"80%"} height={40} borderRadius={10} />
          ) : (
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              India’s largest Service Platform
            </h1>
          )}

          {loading ? (
            <Skeleton count={4} width={"90%"} borderRadius={10} />
          ) : (
            <p className="text-justify">
              &emsp;Bookie revolutionizes the way you access services by bringing
              them directly to your doorstep. Whether it's home cleaning, repairs,
              beauty services, or any other household need, Bookie connects you
              with trusted professionals who provide top-quality services right at
              your convenience. Say goodbye to the hassle of scheduling
              appointments and traveling to service providers – with
              bookie.services, your home becomes the ultimate destination for all
              your service needs.
            </p>
          )}
        </motion.div>

        <motion.img
          ref={ref1}
          className="w-full md:w-[400px] lg:w-[500px] mx-auto my-4 select-none"
          src="/assets/index/item.jpg"
          alt="item"
          onContextMenu={handleContextMenu}
          draggable="false"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView1 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
          style={loading ? { display: "none" } : {}} // Hide image during loading
        />
        {loading && <Skeleton width={"100%"} height={400} borderRadius={20} />} {/* Image Skeleton */}
      </div>

      {/* Second section */}
      <div className="container mx-auto px-4 md:grid md:grid-cols-2 flex flex-col-reverse text-center md:text-start gap-4">
        <motion.img
          ref={ref2}
          className="w-full md:w-[400px] lg:w-[500px] mx-auto my-4 select-none"
          src="/assets/index/item1.jpg"
          alt="item1"
          onContextMenu={handleContextMenu}
          draggable="false"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView2 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
          style={loading ? { display: "none" } : {}} // Hide image during loading
        />
        {loading && <Skeleton width={"100%"} height={300} borderRadius={20} />} {/* Image Skeleton */}

        <motion.div
          ref={ref2}
          className="flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView2 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          {loading ? (
            <Skeleton width={"80%"} height={40} borderRadius={10} />
          ) : (
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Customer Satisfaction
            </h1>
          )}

          {loading ? (
            <Skeleton count={3} width={"90%"} borderRadius={10} />
          ) : (
            <p className="text-justify">
              &emsp;At bookie.services, our ultimate goal is your satisfaction.
              We strive to exceed your expectations by delivering exceptional
              services right at your doorstep. Your satisfaction is our priority,
              and we are committed to providing you with convenient, reliable, and
              top-quality services that leave you delighted every time. Experience
              the joy of hassle-free service delivery and join the countless
              satisfied customers who trust bookie.services for all their home
              service needs.
            </p>
          )}
        </motion.div>
      </div>

      {/* Third section */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 text-center md:text-start gap-4">
        <motion.div
          ref={ref3}
          className="flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView3 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
        >
          {loading ? (
            <Skeleton width={"80%"} height={40} borderRadius={10} />
          ) : (
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Know us better
            </h1>
          )}

          {loading ? (
            <Skeleton count={3} width={"90%"} borderRadius={10} />
          ) : (
            <p className="text-justify">
              &emsp;We're not just a service provider—we're your trusted partner
              in bringing convenience and quality to your doorstep. Discover the
              difference with bookie.services and experience seamless, reliable
              home services tailored to your needs. Let's embark on a journey
              together towards convenience, satisfaction, and excellence.
            </p>
          )}
        </motion.div>

        <motion.img
          ref={ref3}
          className="w-full md:w-[400px] lg:w-[500px] mx-auto my-4 select-none"
          src="/assets/index/item3.jpg"
          alt="item3"
          onContextMenu={handleContextMenu}
          draggable="false"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView3 ? { x: 0, opacity: 1 } : {}}
          transition={{ ease: "easeIn", duration: 2 }}
          style={loading ? { display: "none" } : {}} // Hide image during loading
        />
        {loading && <Skeleton width={"100%"} height={400} borderRadius={20} />} {/* Image Skeleton */}
      </div>
    </>
  );
};

export default Info;
