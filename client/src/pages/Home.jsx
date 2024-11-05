import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md flex flex-col items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-blue-600">
                    Event Management System
                </h1>

                <div className="flex flex-col w-full gap-4">
                    <Link
                        to="/admin/login"
                        className="w-full text-center py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Admin
                    </Link>
                    <Link
                        to="/user/login"
                        className="w-full text-center py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
                    >
                        User
                    </Link>
                    <Link
                        to="/vendor/login"
                        className="w-full text-center py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
                    >
                        Vendor
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
