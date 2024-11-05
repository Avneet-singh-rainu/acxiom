import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const UserCart = () => {
    const location = useLocation();
    const userId = location?.state?.userId || localStorage?.getItem("user");
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCart = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/useritems/${userId}/items`
            );
            setCartItems(response.data);
            setLoading(false);
        } catch (err) {
            setError("Error loading cart");
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userId) fetchCart();
    }, [userId]);

    // const fetchCart = async () => {
    //     try {
    //         const response = await axios.get(
    //             `http://localhost:5000/useritems/${userId}/items`
    //         );
    //         setCartItems(response.data);
    //     } catch (err) {
    //         console.error("Failed to refresh cart", err);
    //     }
    // };

    const updateQuantity = async (itemId, quantity) => {
        try {
            await axios.put(
                `http://localhost:5000/useritems/${userId}/items/${itemId}`,
                { quantity: quantity }
            );
            // Re-fetch cart items to get updated data
            await fetchCart();
        } catch (err) {
            console.error("Failed to update quantity");
        }
    };

    const removeItem = async (itemId) => {
        try {
            await axios.delete(
                `http://localhost:5000/useritems/${userId}/items/${itemId}`
            );
            // Re-fetch cart items to get updated data
            await fetchCart();
        } catch (err) {
            console.error("Failed to remove item", err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
                        >
                            <div>
                                <p className="font-semibold">
                                    Name: {item.itemName}
                                </p>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    min="1"
                                    type="number"
                                    value={item.Quantity}
                                    onChange={(e) =>
                                        updateQuantity(item._id, e.target.value)
                                    }
                                    className="w-16 p-1 border border-gray-300 rounded"
                                />
                                <button
                                    onClick={() => removeItem(item._id)}
                                    className="text-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserCart;
