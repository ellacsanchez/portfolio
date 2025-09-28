import { Link } from "react-router-dom";

interface WritingBookProps {
  id: string;
  title: string;
  cover: string;
  description: string;
  link: string;
  showCaptionBelow?: boolean;
}

export default function WritingBook({
  id,
  title,
  cover,
  description,
  link,
  showCaptionBelow = true,
}: WritingBookProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Book */}
      <Link to={link} aria-label={title} className="book group">
        {/* Inside page (shows when cover opens) */}
        <div className="inside relative">
          <p className="inside-text">{description}</p>

          {/* Click indicator, styled like ProjectCard */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[#4a4a2a] opacity-80 pointer-events-none">
            <span className="text-base font-medium">view</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Cover (hinged on the left) */}
        <div className="cover">
          <img src={cover} alt={title} className="cover-img" />
        </div>
      </Link>

      {/* Caption title below the book */}
      {showCaptionBelow && (
        <Link to={link} className="book-caption">
          {title}
        </Link>
      )}
    </div>
  );
}
