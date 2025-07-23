import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/home/Home";

const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
