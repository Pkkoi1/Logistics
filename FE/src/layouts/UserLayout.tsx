import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/header/UserHeader";
import UserFooter from "../components/footer/UserFooter";

const UserLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <UserFooter />
    </div>
  );
};

export default UserLayout;

