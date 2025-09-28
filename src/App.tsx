import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Landing from "./routes/Landing";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 👇 Default homepage (Landing) */}
        <Route
          index
          element={
            <motion.div {...pageTransition}>
              <Landing />
            </motion.div>
          }
        />

        <Route
          path="/projects"
          element={
            <motion.div {...pageTransition}>
              <Projects />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />

        {/* 👇 Fallback: if nothing matches, show Landing */}
        <Route
          path="*"
          element={
            <motion.div {...pageTransition}>
              <Landing />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}
