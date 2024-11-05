import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminMaintainVendor = () => {
    const [vendors, setVendors] = useState([]);
    const [newVendor, setNewVendor] = useState({
        vendorName: "",
        contactEmail: "",
        contactNumber: "",
    });
    const [message, setMessage] = useState("");

    // Fetch vendors from the backend
    const fetchVendors = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/vendor/vendors"
            );
            setVendors(response.data);
        } catch (error) {
            setMessage("Error fetching vendors");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchVendors();
    }, []);

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewVendor((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleAddVendor = async (e) => {
    //     e.preventDefault();
    //     if (
    //         newVendor.vendorName &&
    //         newVendor.contactEmail &&
    //         newVendor.contactNumber
    //     ) {
    //         try {
    //             const response = await axios.post(
    //                 "http://localhost:5000/api/vendors",
    //                 newVendor
    //             );
    //             setVendors((prev) => [...prev, response.data]);
    //             setMessage("Vendor added successfully!");
    //         } catch (error) {
    //             setMessage("Error adding vendor");
    //             console.error(error);
    //         }
    //         setNewVendor({
    //             vendorName: "",
    //             contactEmail: "",
    //             contactNumber: "",
    //         }); // Clear input fields
    //     } else {
    //         setMessage("All fields are required");
    //     }
    // };

    const handleDeleteVendor = async (vendorNameToDelete) => {
        try {
            await axios.delete(
                `http://localhost:5000/vendor/vendors/${vendorNameToDelete}`
            );
            await fetchVendors();
            // setVendors((prev) =>
            //     prev.filter((vendor) => vendor.userId !== vendorNameToDelete)
            // );
            setMessage("Vendor deleted successfully!");
        } catch (error) {
            setMessage("Error deleting vendor");
            console.error(error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Manage Vendors
            </h2>
            {message && (
                <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                    {message}
                </div>
            )}

            <h3 className="text-xl font-semibold text-gray-700 mt-6">
                Vendor List
            </h3>
            <ul className="space-y-2">
                {vendors.map((vendor, k) => (
                    <li
                        key={k}
                        className="flex justify-between items-center p-2 border border-gray-300 rounded bg-gray-50"
                    >
                        vendor name - {vendor.userId}
                        <button
                            className="ml-4 py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => handleDeleteVendor(vendor.userId)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminMaintainVendor;
