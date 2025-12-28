import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}></Route>
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
