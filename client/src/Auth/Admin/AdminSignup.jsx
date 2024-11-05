import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:5000/admin/signup", // User signup endpoint
                { userId, password }
            );
            
            if (response.status === 201) {
                alert("Signup successful!");
                navigate("/admin/login"); // Redirect to login page
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-1/2 h-auto flex flex-col mt-24 gap-6 bg-gray-300 p-6 rounded-lg shadow-md">
                <h1 className="mx-auto text-xl font-bold">Admin Signup</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSignup}>
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
                    <div className="flex gap-4 items-center">
                        <label htmlFor="confirmPassword" className="w-1/4">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            className="flex-1 p-2 border border-gray-400 rounded-md"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-around">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-500 text-white rounded-md mt-4"
                        >
                            Signup
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
                            onClick={() => {
                                setUserId("");
                                setPassword("");
                                setConfirmPassword("");
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminSignup;
