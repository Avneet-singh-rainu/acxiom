import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 h-1/2 flex flex-col mt-24 gap-[100px] bg-gray-300 p-6">
                <h1 className="mx-auto">Event Management System</h1>
                <div className="flex gap-7 mx-auto">
                    <div>
                        <Link to="/admin/login">Admin</Link>
                    </div>
                    <div>
                        <Link to="/user/login">User</Link>
                    </div>
                    <div>
                        <Link to="/vendor/login">Vendor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
