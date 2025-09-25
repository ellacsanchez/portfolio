import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <div className="fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(true)} className="text-6xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
