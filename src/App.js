import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Login from "./Pages/FormPage/Login";
import Register from "./Pages/FormPage/Register";
import Navigation from './Pages/HomePage/Navigation';
import AuthProvider from "./Context/AuthProvider";
import Services from './Pages/HospitalPage/Services';
import Appointment from './Pages/HospitalPage/Appointment';
import PrivateRoute from './Pages/Route/PrivateRoute'
import Dashboard from './Pages/DashboardPage/Dashboard';
import MakeAdmin from './Pages/DashboardPage/MakeAdmin';
import AdminRoute from './Pages/Route/AdminRoute';
import AllAppointment from './Pages/DashboardPage/AllAppointment';
import MyAppointment from './Pages/DashboardPage/MyAppointment';
import Review from './Pages/DashboardPage/Review';
import CustomizeReview from './Pages/DashboardPage/CustomizeReview';

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
            <Route path="services" element={<Services />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/myAppointment" element={<MyAppointment />} />
            <Route path="dashboard/review" element={<Review />} />
            <Route path="dashboard/makeAdmin" element={<AdminRoute ><MakeAdmin /></AdminRoute>} />
            <Route path="dashboard/allAppointment" element={<AdminRoute ><AllAppointment /></AdminRoute>} />
            <Route path="dashboard/customizeReview" element={<AdminRoute ><CustomizeReview /></AdminRoute>} />
            <Route path="/appointment/:id" element={<PrivateRoute><Appointment /></PrivateRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
