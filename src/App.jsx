import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdvanceDetails from "./pages/AdvanceDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/advance" element={<AdvanceDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
