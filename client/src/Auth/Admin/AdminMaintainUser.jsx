import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminMaintainUser = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(""); // State for feedback messages

    // Fetch users from the backend
    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/user/users"
            );
            setUsers(response.data);
        } catch (error) {
            setMessage("Error fetching users");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (newUser.username && newUser.email && newUser.password) {
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/users",
                    newUser
                );
                await fetchUsers();
                setUsers((prev) => [...prev, response.data]);
                setMessage("User added successfully!");
            } catch (error) {
                setMessage("Error adding user");
                console.error(error);
            }
            setNewUser({ username: "", email: "", password: "" }); // Clear input fields
        } else {
            setMessage("All fields are required");
        }
    };

    const handleDeleteUser = async (usernameToDelete) => {
        try {
            await axios.delete(
                `http://localhost:5000/user/users/${usernameToDelete}`
            );
            await fetchUsers();
            setUsers((prev) =>
                prev.filter((user) => user.username !== usernameToDelete)
            );
            setMessage("User deleted successfully!");
        } catch (error) {
            setMessage("Error deleting user");
            console.error(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Manage Users
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-6">
                User List
            </h3>
            <ul className="space-y-2">
                {users.map((user) => (
                    <li
                        key={user._id}
                        className="flex justify-between items-center p-2 border border-gray-300 rounded bg-gray-50"
                    >
                        username - {user.userId}
                        <button
                            className="ml-4 py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => handleDeleteUser(user.userId)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminMaintainUser;
