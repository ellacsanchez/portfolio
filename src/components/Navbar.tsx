import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     {/* Hamburger button */}
      <div className="fixed top-8 left-8 z-50">
        <label className="burger burger--large">
          <input
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>


      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
