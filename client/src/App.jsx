import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import RoutePlanner from "./pages/RoutePlanner";
import History from "./pages/History";
import Settings from "./pages/settings";

import AccessControl from "./components/common/AccessControl";
import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<AccessControl><AppLayout /></AccessControl>}>

        <Route path="/" element={<Dashboard />} />
        <Route path="/route-planner" element={<RoutePlanner />} />
        <Route path="history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      
      </Route>
    </Routes>
  );
}

export default App;