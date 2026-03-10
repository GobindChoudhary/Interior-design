import React from "react";

import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import InteriorDesign from "../pages/InteriorDesign";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-interiors" element={<InteriorDesign />} />
            {/* Dynamic gallery item routes, e.g. /home-interiors/bedroom, /home-interiors/living-room */}
            <Route path="/home-interiors/:galleryItem" element={<InteriorDesign />} />
        </Routes>
    );
};

export default AppRoutes;
