import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";
import {motion} from "framer-motion";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faRoute,
  faClockRotateLeft,
  faGear
} from "@fortawesome/free-solid-svg-icons";

// import Lottie from "lottie-react";
// import routeAnimation from "../../assets/route-animation.json";

function RouteNovaNavbar() {
    return (
        <Navbar 
            expand="lg"
            style={{
                backgroundColor: "#0B1F3A",
                borderBottom: "1px solid #1F6FEB",
                padding: "10px 0"
            }}
        >
            <Container>
                {/* Logo + brand */}
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="d-flex align-items-center"
                >
                    {/* <div style={{ width:40 }}>
                        <Lottie
                            animationData={routeAnimation}
                            loop={true}
                        />
                    </div> */}

                    <span
                        style={{
                            color: "#F4F6F8",
                            fontWeight: "600",
                            fontSize: "20px",
                            marginLeft: "8px"
                        }}
                    >
                        RouteNova
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="nav-menu" />

                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto align-items-center">

                        <motion.div whileHover={{ scale: 1.08}}>
                            <Nav.Link
                                as={Link}
                                to= "/"
                                style={{ color: "#F4F6F8", marginRight: "18px"}}
                            >
                                <FontAwesomeIcon icon={faChartLine} /> Dashboard
                            </Nav.Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.08}}>
                            <Nav.Link
                                as={Link}
                                to= "/route-planner"
                                style={{color: "#F4F6F8", marginRight: "18px"}}
                            >
                                <FontAwesomeIcon icon={faRoute} /> Route Planner
                            </Nav.Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.08 }}>
                            <Nav.Link
                                as={Link}
                                to="/history"
                                style={{ color: "#F4F6F8", marginRight: "18px" }}
                            >
                                <FontAwesomeIcon icon={faClockRotateLeft} /> History
                            </Nav.Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.08 }}>
                            <Nav.Link
                                as={Link}
                                to="/settings"
                                style={{ color: "#F4F6F8" }}
                            >
                                <FontAwesomeIcon icon={faGear} /> Settings
                            </Nav.Link>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RouteNovaNavbar;