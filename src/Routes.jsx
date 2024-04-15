import React from "react";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter/Counter";
import RootLayout from "./layout/rootLayout/RootLayout";
import AboutUs from "./pages/about-us/AboutUs";
import BlogDetails from "./pages/blogs/blogDetails/BlogDetails";
import InvestmentCalculator from "./pages/investment-calculator/InvestmentCalculator";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="investment-calculator" element={<InvestmentCalculator />} />
      <Route element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blog-details/:blog_id" element={<BlogDetails />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
