import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout/Layout";
import PageWrapper from "./wrappers/PageWrapper";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes";

const Login = lazy(() => import("./components/Authentication/Login"));
const Logout = lazy(() => import("./components/Authentication/Logout"));
const CartDetails = lazy(() => import("./features/Cart/CartDetails"));
const UserProfile = lazy(() => import("./features/User/UserProfile"));


function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/login"
                element={
                  <PageWrapper>
                    <Login />
                  </PageWrapper>
                }
              />
              <Route element={<PrivateRoutes />}>
                <Route
                  path="/cart"
                  element={
                    <PageWrapper>
                      <CartDetails />
                    </PageWrapper>
                  }
                />
              </Route>
              <Route
                path="/logout"
                element={
                  <PageWrapper>
                    <Logout />
                  </PageWrapper>
                }
              />

              <Route
                path="/user-profile"
                element={
                  <PageWrapper>
                    <UserProfile />
                  </PageWrapper>
                }
              />
            </Routes>
          </Layout>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
