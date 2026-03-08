import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MobileDrawer from "./MobileDrawer";

function AppLayout() {
    return (
        <>
            <Navbar />

            <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>

                {/* Desktop sidebar */}

                <Sidebar />

                {/* Mobile Drawer */}

                {/* <MobileDrawer /> */}

                {/* Page Content */}

                <main 
                    style={{ 
                        flex: 1, 
                        padding: "20px",
                        background: "#F4F6F8",
                        minHeight: "100vh"
                    }}
                >
                    <Outlet />
                </main>

            </div>
        
        </>
    );
}

export default AppLayout;