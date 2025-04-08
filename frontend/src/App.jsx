import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Dashboard1 from "./Dashboard1";
import Dashboard3 from "./Dashboard3";

import Kamilan from "./Kamilan";
import Admin1dashboard from "./Admin1dashboard";
import Admin2dashboard from "./Admin2dashboard";
import Admin3dashboard from "./Admin3dashboard";
import Admin4dashboard from "./Admin4dashboard";
import Admin5dashboard from "./Admin5dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Dashboard1 />} />
        <Route path="/staff2" element={<Dashboard3 />} />

        <Route path="/staff3" element={<Kamilan />} />
        <Route path="/admin1" element={<Admin1dashboard />} />
        <Route path="/admin2" element={<Admin2dashboard />} />
        <Route path="/admin3" element={<Admin3dashboard />} />
        <Route path="/admin4" element={<Admin4dashboard />} />
        <Route path="/admin5" element={<Admin5dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
