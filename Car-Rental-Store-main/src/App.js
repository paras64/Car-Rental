import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./Loading";
const VehicalModels = lazy(() => import("./component/VehicalModels"));
const Login = lazy(() => import("./component/LoginRegistration/Login"));
const Registration = lazy(() =>
  import("./component/LoginRegistration/Registration")
);
const ForgotPassword = lazy(() =>
  import("./component/LoginRegistration/ForgotPassword")
);
const ConfirmPassword = lazy(() =>
  import("./component/LoginRegistration/ConfirmPassword")
);
const Orders = lazy(() => import("./component/Orders"));
const Contact = lazy(() => import("./component/Contact"));
const NotFound = lazy(() => import("./NotFound"));
const Ourteam = lazy(() => import("./component/Ourteam"));
const AdminLogin = lazy(() => import("./component/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./component/Admin/AdminDashboard"));
const AdminProvider = lazy(() => import("./component/Admin/AdminProvider"));
const AddProducts = lazy(() => import("./component/Admin/AddProducts"));
const UserProvider = lazy(() =>
  import("./component/LoginRegistration/UserProvider")
);
const ModifyProduct = lazy(() => import("./component/Admin/ModifyProduct"));
const ModifyFaq = lazy(() => import("./component/Admin/ModifyFaq"));
const FaqProvider = lazy(() => import("./component/Admin/FaqProvider"));
const AllUserProvider = lazy(() => import("./component/Admin/AllUserProvider"));
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const TestimonialComponent = lazy(() =>
  import("./component//TestimonialComponent")
);

// import Home from "./component/Home";
// import About from "./component/About";
// import TestimonialComponent from "./component//TestimonialComponent";
// import VehicalModels from "./component/VehicalModels";
// import Login from "./component/LoginRegistration/Login";
// import Registration from "./component/LoginRegistration/Registration";
// import ForgotPassword from "./component/LoginRegistration/ForgotPassword";
// import ConfirmPassword from "./component/LoginRegistration/ConfirmPassword";
// import Orders from "./component/Orders";
// import Contact from "./component/Contact";
// import NotFound from "./NotFound";
// import Ourteam from "./component/Ourteam";
// import AdminLogin from "./component/Admin/AdminLogin";
// import AdminDashboard from "./component/Admin/AdminDashboard";
// import AdminProvider from "./component/Admin/AdminProvider";
// import AddProducts from "./component/Admin/AddProducts";
// import UserProvider from "./component/LoginRegistration/UserProvider";
// import ModifyProduct from "./component/Admin/ModifyProduct";
// import ModifyFaq from "./component/Admin/ModifyFaq";
// import FaqProvider from "./component/Admin/FaqProvider";
// import AllUserProvider from "./component/Admin/AllUserProvider";
function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <AllUserProvider>
            <FaqProvider>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/about"
                  element={
                    <Suspense fallback={<Loading />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/testimonial"
                  element={
                    <Suspense fallback={<Loading />}>
                      <TestimonialComponent />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/vehicalsmodels"
                  element={<VehicalModels />}
                />
                <Route
                  exact
                  path="/ourteam"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Ourteam />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/support"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Contact />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/login"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Login />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/register"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Registration />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/forgotpassword"
                  element={
                    <Suspense fallback={<Loading />}>
                      <ForgotPassword />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/orders"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Orders />
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/admin/login"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminProvider>
                        <AdminLogin />
                      </AdminProvider>
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminProvider>
                        <AdminDashboard />
                      </AdminProvider>
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/addproduct"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminProvider>
                        <AddProducts />
                      </AdminProvider>
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/modifyproduct"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminProvider>
                        <ModifyProduct />
                      </AdminProvider>
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/admin/dashboard/modifyfaq"
                  element={
                    <Suspense fallback={<Loading />}>
                      <AdminProvider>
                        <ModifyFaq />
                      </AdminProvider>
                    </Suspense>
                  }
                />

                <Route
                  exact
                  path="/confirmpassword/:userEmail"
                  element={
                    <Suspense fallback={<Loading />}>
                      <ConfirmPassword />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="*"
                  element={
                    <Suspense fallback={<Loading />}>
                      <NotFound />
                    </Suspense>
                  }
                />
              </Routes>
            </FaqProvider>
          </AllUserProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
