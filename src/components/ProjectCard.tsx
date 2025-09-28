import { Link } from "react-router-dom";

type ProjectCardProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  align: "left" | "right";
  /** If provided, the entire card goes to this URL instead of /projects/:id */
  href?: string;
};

export default function ProjectCard({
  id,
  title,
  image,
  description,
  align,
  href,
}: ProjectCardProps) {
  const isExternal = !!href && /^https?:\/\//i.test(href);
  const toInternal = href && !isExternal ? href : `/projects/${id}`;

  const CardInner = (
    <div
      className={`group w-[36rem] h-[24rem] bg-white shadow-[0_2px_8px_rgba(74,74,42,0.25)]
                  rounded-md overflow-hidden hover:scale-105 transform 
                  transition duration-300 relative
                  ${align === "left" ? "-translate-x-16" : "translate-x-16"}`}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-[55%] object-cover" />

      {/* Text */}
      <div className="p-6 h-[45%] flex flex-col">
        <h3 className="text-5xl font-reenie text-[#4a4a2a]">{title}</h3>
        <p className="text-lg text-[#4a4a2a] mt-3 leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Click indicator */}
      <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[#4a4a2a] pointer-events-none">
        <span className="text-base font-medium">
          {href ? (isExternal ? "Visit" : "Open") : "View"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  return (
    <div
      className={`relative flex w-full ${
        align === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {href ? (
        isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} (opens in new tab)`}
          >
            {CardInner}
          </a>
        ) : (
          <Link to={toInternal} aria-label={`${title} (open)`}>
            {CardInner}
          </Link>
        )
      ) : (
        <Link to={`/projects/${id}`} aria-label={`${title} (details)`}>
          {CardInner}
        </Link>
      )}
    </div>
  );
}
