import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleLogout = () => {
        navigate("/");
    };

    const handleMaintainUser = () => {
        navigate("/admin/maintain-user");
    };

    const handleMaintainVendor = () => {
        navigate("/admin/maintain-vendor");
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="bg-gray-100 shadow-md p-6 rounded-lg mt-12 w-3/4 text-center flex flex-col gap-8">
                <h1 className="text-2xl font-bold mb-6">Admin Home</h1>
                <div className="flex justify-around gap-4">
                    <button
                        onClick={handleHomeClick}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Home
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
                <div className="flex justify-around gap-4">
                    <button
                        onClick={handleMaintainUser}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                        Maintain User
                    </button>
                    <button
                        onClick={handleMaintainVendor}
                        className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                    >
                        Maintain Vendor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
