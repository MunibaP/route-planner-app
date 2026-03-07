import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileDrawer from "./MobileDrawer";

function AppLayout() {
    return (
        <>
            <Navbar />

            <div style={{ display: "flex", minHeight: "100vh" }}>

                {/* Desktop sidebar */}

                <Sidebar />

                {/* Mobile Drawer */}

                <MobileDrawer />

                {/* Page Content */}

                <main style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </main>

            </div>
        
        </>
    );
}

export default AppLayout;