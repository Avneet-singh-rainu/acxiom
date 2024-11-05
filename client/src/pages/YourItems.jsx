import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const YourItems = () => {
    const location = useLocation();
    const [items, setItems] = useState([]);
    const vendorId =
        location?.state?.data?._id || localStorage.getItem("vendor");

    const fetchItems = async () => {
        try {
            const resp = await axios.get(
                `http://localhost:5000/vendor/yourItem/${vendorId}`
            );
            setItems(resp.data.items);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };
    const handleDelete = async (item) => {
        try {
            const resp = await axios.delete(
                `http://localhost:5000/product/delete/${item._id}`
            );
            console.log(resp);
            await fetchItems();
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4">Your Items</h1>
            <div className="w-3/4 bg-gray-200 p-4 rounded-lg shadow-md">
                {items.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-4 shadow rounded-md"
                            >
                                <div className="flex justify-between">
                                    <h2 className="font-bold text-lg">
                                        {item.name}
                                    </h2>
                                    <button onClick={() => handleDelete(item)}>
                                        X
                                    </button>
                                </div>
                                <p className="text-gray-700">
                                    Price: ${item.price}
                                </p>
                                <p className="text-gray-600">
                                    Description: {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-red-500">No items available</p>
                )}
            </div>
        </div>
    );
};

export default YourItems;
