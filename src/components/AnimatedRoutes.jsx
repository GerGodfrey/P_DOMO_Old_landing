import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Doubts from '../pages/Doubts';
import Partner from '../pages/Partner';
import RegisterProperty from '../pages/RegisterProperty';
import Investor from '../pages/Investor';

const AnimatedRoutes = () => {

    const location = useLocation()
    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/doubt' element={<Doubts />} />
                    <Route path='/partner' element={<Partner />} />
                    <Route path='/regprop' element={<RegisterProperty />} />
                    <Route path='/investor' element={<Investor />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default AnimatedRoutes;