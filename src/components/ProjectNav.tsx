import { Link } from "react-router-dom";

interface ProjectNavProps {
  showBack?: boolean;
}

export default function ProjectNav({ showBack = false }: ProjectNavProps) {
  return (
    <div className="sticky top-0 z-20 bg-white py-6 shadow-[0_2px_0_0_rgba(74,74,42,0.3),0_-2px_0_0_rgba(74,74,42,0.3)]">
      <nav className="flex items-center justify-between px-12 pl-28 pr-28">
        {/* Left side: Back or Projects */}
        {showBack ? (
          <Link
            to="/#projects"
            className="text-xl text-[#4a4a2a] hover:underline"
          >
            ← Back
          </Link>
        ) : (
          <a
            href="#projects"
            className="text-6xl font-bold text-[#4a4a2a] tracking-tight"
          >
            PROJECTS
          </a>
        )}

        {/* Right side: Section links */}
        {!showBack && (
          <div className="flex gap-12">
            <a href="#software" className="nav-underline">
              Software
            </a>
            <a href="#video" className="nav-underline">
              Video
            </a>
            <a href="#writing" className="nav-underline">
              Writing
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
