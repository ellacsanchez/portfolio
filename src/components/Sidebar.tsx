import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHome = (e: React.MouseEvent) => {
    onClose();
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } // else let the <Link to="/" /> handle navigation
  };

  const handleProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    navigate("/#projects"); // Landing will smooth-scroll to the anchor
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-[#4a4a2a] text-white p-12 z-40"
    >
      <ul className="mt-24 flex flex-col gap-8 text-3xl font-semibold tracking-wide">
        <li>
          <Link to="/" onClick={handleHome} className="hover:opacity-70">
            HOME
          </Link>
        </li>
        <li>
          {/* use a button so we fully control the hash nav */}
          <button onClick={handleProjects} className="hover:opacity-70 text-left w-full">
            PROJECTS
          </button>
        </li>
        <li>
          <Link to="/about" onClick={onClose} className="hover:opacity-70">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onClose} className="hover:opacity-70">
            CONTACT
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
