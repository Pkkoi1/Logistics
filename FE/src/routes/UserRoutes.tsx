import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/user/home/Home";
import News from "../pages/user/news/News";
import NewsDetail from "../pages/user/news/NewsDetail";
import Pricing from "../pages/user/pricing/Pricing";

const UserRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="news/:slug" element={<NewsDetail />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default UserRoutes;
