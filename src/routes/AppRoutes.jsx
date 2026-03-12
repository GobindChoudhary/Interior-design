import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import InteriorDesign from "../pages/InteriorDesign";
import DesignIdea from "../pages/DesignIdea";
import BlogPost from "../pages/BlogPost";
import Blogs from "../pages/Blogs";
import CustomerStories from "../pages/CustomerStories";
import Luxe from "../pages/Luxe";
import CityPage from "../pages/CityPage";
import PriceCalculator from "../pages/PriceCalculator";
import NotFound from "../pages/NotFound";
import AllCities from "../pages/AllCities";
import PrivacyPolicy from "../pages/LegalPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-interiors" element={<InteriorDesign />} />
      {/* Dynamic gallery item routes, e.g. /home-interiors/bedroom, /home-interiors/living-room */}
      <Route path="/home-interiors/:galleryItem" element={<InteriorDesign />} />
      {/* Base route defaulting to modular-kitchen-design-ideas (or handled inside component) */}
      <Route path="/design-ideas" element={<DesignIdea />} />
      {/* Dynamic design idea category route */}
      <Route path="/design-ideas/:categoryId" element={<DesignIdea />} />
      {/* Dynamic individual blog post route */}
      <Route path="/design-ideas/:categoryId/:blogId" element={<BlogPost />} />
      {/* All Blogs page */}
      <Route path="/blogs" element={<Blogs />} />
      {/* Customer Stories page */}
      <Route path="/customer-stories" element={<CustomerStories />} />
      {/* Luxe page */}
      <Route path="/luxe" element={<Luxe />} />
      {/* Price Calculator Page */}
      <Route path="/price-calculator/:type" element={<PriceCalculator />} />
      {/* Dynamic City Page */}
      <Route
        path="/cities/interior-designers-:cityName"
        element={<CityPage />}
      />
      <Route path="/cities" element={<AllCities />} />
      <Route path="/cities/*" element={<CityPage />} />{" "}
      {/* Fallback for debugging */}
      {/* Privacy Policy / Terms */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
