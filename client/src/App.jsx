import AdminLogin from "./Auth/Admin/AdminLogin";
import UserLogin from "./Auth/User/UserLogin";
import VendorLogin from "./Auth/Vendor/VendorLogin";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import VendorHome from "./pages/VendorHome";
import YourItems from "./pages/YourItems";
import AddNewItem from "./pages/AddNewItem";

function App() {
    return (
        <>
            <div className="h-screen w-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/user/login" element={<UserLogin />} />
                    <Route path="/vendor/login" element={<VendorLogin />} />
                    <Route path="/vendor/home" element={<VendorHome />} />
                    <Route path="/youritems" element={<YourItems />} />
                    <Route path="/addnewitem" element={<AddNewItem />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
