import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdvanceDetails from "./pages/AdvanceDetails";
import CreatePassword from "./pages/CreatePassword";
import Notification from "./pages/Notification";
import Chart from "./mobile/Chart";
import Papers from "./pages/Papers";
import Profile from "./pages/Profile";
import LeaderBoard from "./pages/LeaderBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/advance" element={<AdvanceDetails />} />
        <Route path="/register/create-password" element={<CreatePassword />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/chart" element ={<Chart />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leader-board" element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
