import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from 'framer-motion';

// Navbar items
const navigation = [
    { name: "Home", to: "/" },
    { name: "Offers", to: "/ComingSoon" },
    { name: "Bookings", to: "/ComingSoon" },
    { name: "Contact", to: "/ComingSoon" },
    { name: "About", to: "/About" },
    { name: "Help", to: "/ComingSoon" },
];

const Navbar = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2s loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button start */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full p-2 text-black hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                                {/* Mobile menu button end */}
                            </div>

                            {/* Navbar start */}
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <h1 className="brand text-3xl font-extrabold">Bookie</h1>
                                </div>
                                <div className="hidden sm:ml-6 sm:block font-bold">
                                    <div className="flex space-x-4">
                                        {loading
                                            ? [...Array(navigation.length)].map((_, index) => (
                                                <Skeleton key={index} width={100} height={30} borderRadius={10} />
                                            ))
                                            : navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                    className="hover:bg-gray-200 hover:scale-105 duration-500 rounded-3xl px-3 py-2 text-[1rem] workSan"
                                                    aria-current={item.current ? "page" : undefined}
                                                    onClick={() => {
                                                        // Close menu on link click for mobile
                                                        if (open) {
                                                            // You can trigger a re-render to close the menu
                                                            document.body.click();
                                                        }
                                                    }}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Navbar items end */}
                        </div>
                    </div>

                    {/* For responsive */}
                    <Disclosure.Panel className="sm:hidden">
                        <motion.div className="space-y-1 px-2 pb-3 pt-2 flex flex-col rounded-xl bg-gray-200"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}>
                            {loading
                                ? [...Array(navigation.length)].map((_, index) => (
                                    <Skeleton key={index} width={"100%"} height={40} borderRadius={10} />
                                ))
                                : navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="hover:bg-black hover:text-white rounded-3xl px-3 py-2 text-sm font-medium"
                                        aria-current={item.current ? "page" : undefined}
                                        onClick={() => {
                                            // Close menu on link click for mobile
                                            if (open) {
                                                // You can trigger a re-render to close the menu
                                                document.body.click();
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </motion.div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
