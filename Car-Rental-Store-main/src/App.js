import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import TestimonialComponent from "./component//TestimonialComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import VehicalModels from "./component/VehicalModels";
import Login from "./component/LoginRegistration/Login";
import Registration from "./component/LoginRegistration/Registration";
import ForgotPassword from "./component/LoginRegistration/ForgotPassword";
import ConfirmPassword from "./component/LoginRegistration/ConfirmPassword";
import BookingDetailsForm from "./component/VehicalComponent/BookingDetailsForm";
import Orders from "./component/Orders";
import Contact from "./component/Contact";
import NotFound from "./NotFound";
import Ourteam from "./component/Ourteam";
import AdminLogin from "./component/Admin/AdminLogin";
import AdminDashboard from "./component/Admin/AdminDashboard";
import AdminProvider from "./component/Admin/AdminProvider";
import AddProducts from "./component/Admin/AddProducts";
import UserProvider from "./component/LoginRegistration/UserProvider";
import ModifyProduct from "./component/Admin/ModifyProduct";
import ModifyFaq from "./component/Admin/ModifyFaq";
import FaqProvider from "./component/Admin/FaqProvider";
function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <FaqProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/testimonial"
                element={<TestimonialComponent />}
              />
              <Route exact path="/vehicalsmodels" element={<VehicalModels />} />
              <Route exact path="/ourteam" element={<Ourteam />} />
              <Route exact path="/support" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Registration />} />
              <Route
                exact
                path="/forgotpassword"
                element={<ForgotPassword />}
              />
              <Route exact path="/orders" element={<Orders />} />

              <Route
                exact
                path="/admin/login"
                element={
                  <AdminProvider>
                    <AdminLogin />
                  </AdminProvider>
                }
              />
              <Route
                exact
                path="/admin/dashboard"
                element={
                  <AdminProvider>
                    <AdminDashboard />
                  </AdminProvider>
                }
              />
              <Route
                exact
                path="/admin/dashboard/addproduct"
                element={
                  <AdminProvider>
                    <AddProducts />
                  </AdminProvider>
                }
              />
              <Route
                exact
                path="/admin/dashboard/modifyproduct"
                element={
                  <AdminProvider>
                    <ModifyProduct />
                  </AdminProvider>
                }
              />
              <Route
                exact
                path="/admin/dashboard/modifyfaq"
                element={
                  <AdminProvider>
                    <ModifyFaq />
                  </AdminProvider>
                }
              />

              <Route
                exact
                path="/confirmpassword/:userEmail"
                element={<ConfirmPassword />}
              />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
       
          </FaqProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
