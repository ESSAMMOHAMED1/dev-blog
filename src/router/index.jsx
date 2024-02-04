import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Article from "../pages/blog/Article";
import Blog from "../pages/blog/Blog";
import NewPost from "../pages/blog/NewPost";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/blog" element={<DefaultLayout />}>
        <Route index element={<Blog />} />
        <Route path="new" element={<NewPost />} />
        <Route path=":slug" element={<Article />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
