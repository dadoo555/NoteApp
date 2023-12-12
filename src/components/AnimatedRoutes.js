import { Routes, Route, useLocation } from "react-router-dom";

import Homepage from './/Overview';
import NewNote from './NewNote';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes/new" element={<NewNote />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;