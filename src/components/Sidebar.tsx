import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT", path: "/design" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-[#4a4a2a] text-white p-12 z-40"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl font-bold"
      >
        ✕
      </button>

      {/* Menu items */}
      <ul className="mt-24 flex flex-col gap-8 text-2xl font-semibold tracking-wide">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} onClick={onClose} className="hover:opacity-70">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
