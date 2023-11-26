import React from 'react';
import Home from '../pages/Home';
import NavBar from '../pages/Navbar';
import { Routes, Route } from 'react-router-dom';
import Service from '../pages/Service';
import About from '../pages/About';
import Blog from '../components/Blogs';
import Contact from '../pages/contact_us';
import Login from '../pages/Login';
import Signup from '../pages/Sign_up';
import Errorpage from '../pages/Page_not_found';

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact-us' element={<Contact />} />
        </Route>
        <Route path='log-in' component={<Login />} />
        <Route path='sign-up' component={<Signup />} />
        <Route path='errorpage' component={<Errorpage />} />
      </Routes>
    </div>
  );
}
