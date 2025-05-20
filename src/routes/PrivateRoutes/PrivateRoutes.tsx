import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../../context/useAuthContext";

interface IPrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<IPrivateRoutesProps> = (props) => {
  const { user } = useUserAuth();
  console.log(user?.email);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
