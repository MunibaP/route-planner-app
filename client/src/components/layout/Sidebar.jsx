import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartLine,
  faRoute,
  faClockRotateLeft,
  faGear
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { name: "Dashboard", path: "/", icon: faChartLine },
  { name: "Route Planner", path: "/route-planner", icon: faRoute },
  { name: "History", path: "/history", icon: faClockRotateLeft },
  { name: "Settings", path: "/settings", icon: faGear }
];

function Sidebar() {
    return (
        <div 
            style={{
                width: "240px",
                background: "#0B1F3A",
                color: "#F4F6F8",
                minHeight: "100vh",
                padding: "20px 10px",
                borderRight: "1px solid #1F6FEB"
            }}
        >
            {/* Section Title */}

            <div 
                style={{
                    color: "#F4F6F8",
                    minHeight: "100vh",
                    padding: "20px 10px",
                    borderRight: "1px solid #1F6FEB"
                }}  
            >
                RouteNova
            </div>

            <div 
                style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    color: "#9FB3C8",
                    marginBottom: "15px",
                    paddingLeft: "10px"
                }}
            >
                NAVIGATION
            </div>

            {/* Menu Items */}

            {menuItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    style={{ textDecoration: "none"}}
                >
                    {({ isActive }) => (
                        <motion.div
                            whileHover={{ x:6 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 4px",
                                marginBottom: "8px",
                                borderRadius: "8px",
                                background: isActive ? "#1F6FEB" : "transparent",
                                color: "#F4F6F8",
                                cursor: "pointer",
                                transition: "0.2s"
                            }}
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                style={{
                                    marginRight: "12px",
                                    fontSize: "16px"
                                }}
                            />
                            <span style={{ fontSize: "15px" }}>{item.name}</span>
                        </motion.div>
                    )}
                </NavLink>
            ))}
        </div>
    );
}

export default Sidebar;