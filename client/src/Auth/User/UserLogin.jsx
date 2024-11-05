import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/user/login",
                { userId, password }
            );

            if (response.status === 200) {
                localStorage.setItem("user", userId);
                navigate("/user/portal", { state: { data: response.data } });
            }
        } catch (error) {
            console.error(error);
            alert("Invalid Credentials or Server Error");
        }
    };

    const handleBack = () => {
        console.log("Back button clicked");
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-1/2 h-auto flex flex-col mt-24 gap-6 bg-gray-300 p-6 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>
                    {/* <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                        onClick={handleBack}
                    >
                        Back
                    </button> */}
                </div>
                <h1 className="mx-auto text-xl font-bold">User Login</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <label htmlFor="userId" className="w-1/4">
                            UserId
                        </label>
                        <input
                            id="userId"
                            type="text"
                            className="flex-1 p-2 border border-gray-400 rounded-md"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="password" className="w-1/4">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="flex-1 p-2 border border-gray-400 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-around">
                        <button
                            onClick={handleLogin}
                            className="px-4 py-2 bg-green-500 text-white rounded-md mt-4"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
                            onClick={() => {
                                setUserId("");
                                setPassword("");
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
                            onClick={() => {
                                navigate("/user/signup");
                            }}
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
