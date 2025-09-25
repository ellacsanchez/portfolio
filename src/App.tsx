import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Landing from "./routes/Landing";
import Projects from "./routes/Projects";
import Design from "./routes/Design";

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
        <Route
          path="/"
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
          path="/design"
          element={
            <motion.div {...pageTransition}>
              <Design />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}
