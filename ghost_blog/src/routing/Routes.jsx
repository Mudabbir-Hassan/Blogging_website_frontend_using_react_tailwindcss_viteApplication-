import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/Layout";
import About from "../pages/About";

import Blog from "../pages/Blog";
import Blogs from "../components/Blogs";
import Create from "../components/create_blog";
import BlogDetails from "../components/Blog_Details"

import Contact from "../pages/contact_us";
import Login from "../pages/Login";
import Signup from "../pages/Sign_up";
import Errorpage from "../pages/Page_not_found";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="blog" element={<Blog />}>
          <Route index element={<Blogs />} />
          <Route path="create" element={<Create />} />
          <Route path='blogs/:blogsId' element={<BlogDetails />} />
        </Route>

        <Route path="contact-us" element={<Contact />} />
      </Route>

      <Route path="log-in" element={<Login />} />
      <Route path="sign-up" element={<Signup />} />
      <Route path="errorpage" element={<Errorpage />} />
    </Routes>
  );
}
