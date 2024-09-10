import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddNewItem = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const vid = location.state.data._id;

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            name: productName,
            price: productPrice,
            image: productImage,
        };

        try {
            const response = await axios.post(
                ` http://localhost:5000/product/add/${vid}`,
                newItem
            );
            if (response.status === 200) {
                alert("Product added successfully!");
                navigate("/vendor/home");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add the product.");
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Buttons Section */}
            <div className="flex justify-center gap-9 mb-8">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Product Status
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Request Item
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    View Product
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                    LogOut
                </button>
            </div>

            {/* Form Section */}
            <div className="w-[300px] bg-blue-400 p-4 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Product Image URL"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                        Add the product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;
