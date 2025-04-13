import React from "react";
import { NonAuthenticated, Authenticated } from "./MainNavigation";
import useUserData from "../hooks/useUserData";
import LoadingOverlay from "../utils/LoadingOverlay";

const RootNavigation = () => {
  const { isLoading, isLoggedIn } = useUserData();

  if (isLoading) {
    return <LoadingOverlay />;
  }
  return isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
