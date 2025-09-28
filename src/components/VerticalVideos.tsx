import React, { useEffect, useRef, useState } from "react";

export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
};

// Hook to detect if an element is in view
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function VideoCard({ video }: { video: Video }) {
  const { ref, inView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-12 bg-white p-10 rounded-l shadow-lg shadow-[0_2px_4px_rgba(74,74,42,0.4)] max-w-6xl mx-auto my-24
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Text (left) */}
      <div className="flex flex-col max-w-md">
        <h3 className="text-4xl font-bold text-[#4a4a2a] mb-4">
          {video.title}
        </h3>
        <p className="text-lg text-gray-600">{video.description}</p>
      </div>

      {/* Video thumbnail (right) */}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-[560px] h-[315px] object-cover rounded-lg shadow-md"
        />
      </a>
    </div>
  );
}

export default function VerticalVideos({ videos }: { videos: Video[] }) {
  return (
    <div className="relative w-full">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
