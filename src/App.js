import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from "./Pages/FormPage/Login";
import Register from "./Pages/FormPage/Register";
import Navigation from './Pages/HomePage/Navigation';
import AuthProvider from "./Context/AuthProvider";
import Appointment from './Pages/DashboardPage/Appointment';
function App() {
  return (
    <div className="">

      <AuthProvider>
        <BrowserRouter >
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
