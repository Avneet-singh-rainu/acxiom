import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const UserPortal = () => {
    const navigate = useNavigate();
    const data = useLocation();
    const userId = data?.state?.data?.user?.userId;
    const [vendor, setVendor] = useState();
    const [vendorItems, setVendorItems] = useState();
    console.log(vendor);

    const fetchVendor = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/vendor/item/${vendor}/`
            );
            setVendorItems(response.data.items);
        } catch (err) {
            console.error("Failed to refresh cart", err);
        }
    };

    const handleAddItem = async (item) => {
        console.log(item);
        const { name, price } = item;
        const resp = await axios.post(
            `http://localhost:5000/useritems/add/${userId}/`,
            { nsme: name, price: price, userId, userId }
        );

        console.log(resp);
    };

    useEffect(() => {
        fetchVendor();
    }, [vendor]);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-center mb-6">
                    Welcome, User!
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                    <select
                        name="vendor"
                        value={vendor}
                        id="vendor"
                        onChange={(e) => setVendor(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value=" ">choose vendor</option>
                        <option value="Catering">Catering</option>
                        <option value="Florist">Florist</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Lighting">Lighting</option>
                    </select>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                        onClick={() =>
                            navigate("/user/cart", { state: { userId } })
                        }
                    >
                        Cart
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600">
                        Guest List
                    </button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600">
                        Order Status
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600">
                        Log Out
                    </button>
                </div>
                <div className="space-y-4">
                    {vendorItems?.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500">
                                    Price: ${item.price}
                                </p>
                            </div>
                            <button
                                onClick={() => handleAddItem(item)}
                                className="px-3 py-1 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
                            >
                                Add Item
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPortal;
