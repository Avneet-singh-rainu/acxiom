import React from "react";
import { useLocation, useNavigate } from "react-router";
const VendorHome = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const vendorName = location?.state?.data?.user?.userId;
    const user = location?.state?.data?.user;

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex w-1/2 h-1/2 flex-col items-center justify-evenly bg-blue-500">
                <h1 className="bg-white text-black px-5 ">
                    Welcome {vendorName}
                </h1>
                <div className="flex items-center justify-around gap-8">
                    <button
                        onClick={() =>
                            navigate("/youritems", {
                                state: { data: user },
                            })
                        }
                        className=" bg-white text-black px-5 rounded-2xl"
                    >
                        Your item
                    </button>
                    <button
                        onClick={() =>
                            navigate("/addnewitem", {
                                state: { data: user },
                            })
                        }
                        className=" bg-white text-black px-5 rounded-2xl"
                    >
                        Add New Item
                    </button>
                    <button className=" bg-white text-black px-5 rounded-2xl">
                        Transaction
                    </button>
                    <button className=" bg-white text-black px-5 rounded-2xl">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VendorHome;
