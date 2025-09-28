import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import ProjectNav from "../components/ProjectNav";
import ProjectCard from "../components/ProjectCard";
import VerticalVideos, { Video } from "../components/VerticalVideos";
import WritingBook from "../components/WritingBook";

export default function Landing() {
  const location = useLocation();
  const introSectionRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(false);

  // Scroll to hash (e.g., #projects) after navigation
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const STICKY_OFFSET = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }, [location]);

  // Intersection Observer for intro section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    if (introSectionRef.current) observer.observe(introSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "Portfolio",
      title: "Portfolio",
      image: `${process.env.PUBLIC_URL}/images/portfoliopic.png`,
      description:
        "A portfolio always going through iterations. Built with React, utilizing Motion.dev.",
    },
    {
      id: "pocket-closet",
      title: "Pocket Closet",
      image: `${process.env.PUBLIC_URL}/images/wardrobe.png`,
      description:
        "A full-stack wardrobe to plan, pack, and store your closet! Built with Remix, Prisma, and Cloudinary.",
    },
    {
      id: "cuair-website",
      title: "CUAir Website",
      image: `${process.env.PUBLIC_URL}/images/cuairweb.png`,
      description:
        "Redesigned and maintained main, public facing website for project team.",
      href: "https://cuair.org/index.html",
    },
    {
      id: "cdjcampaign",
      title: "Campaign Trails",
      image: `${process.env.PUBLIC_URL}/images/cdjcampaign.png`,
      description:
        "With Cornell Data Journal, utilized R to analyze past presidential campaigns to predict the 2024 election.",
      href: "https://nikhilc52.github.io/campaign_trails_cdj/website/",
    },
    {
      id: "cdjfashion",
      title: "Fashion Trends",
      image: `${process.env.PUBLIC_URL}/images/cdjfashionpics.png`,
      description:
        "Webscraped 10,000+ Vogue runway looks to forecast 2025 fashion trends.",
      href: "https://cornelldatajournal.org/articles/fashion-trends",
    },
  ];

  const videos: Video[] = [
    {
      id: "promo1",
      title: "CUAir Giving Day",
      description:
        "A short-form video promoting donations to CUAir for Cornell's university-wide Giving Day.",
      thumbnail: `${process.env.PUBLIC_URL}/images/givingday.png`,
      url: "https://www.youtube.com/watch?v=LU0Seynyar4",
    },
    {
      id: "tech1",
      title: "Project Atlas: The Podcast",
      description:
        "The Technical Design & Flight Readiness Review for our aircraft, winning 2nd place in the CUASC competition!",
      thumbnail: `${process.env.PUBLIC_URL}/images/tdfrr.png`,
      url: "https://www.youtube.com/watch?v=iMDjcOoyNT0",
    },
  ];

  return (
    <div className="bg-brand-light text-brand">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-white px-12 gap-12">
        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/ella.svg`}
            alt="Ella Sanchez"
            className="w-96 h-[500px] object-cover rotate-1"
          />
        </div>

        <div className="pl-12">
          <h1 className="text-[160px] font-bold text-[#4a4a2a] leading-none">
            ELLA <br /> SANCHEZ
          </h1>
          <p className="mt-6 font-reenie text-4xl text-[#4a4a2a] max-w-2xl">
            <span className="typing-line line1">
              I am a Computer Science student pursuing a minor
            </span>
            <br />
            <span className="typing-line line2">
              in Communication at Cornell University, with an interest in
            </span>
            <br />
            <span className="typing-line line3">
              UI/UX and Full-Stack WebDev.
            </span>
          </p>
        </div>
      </section>

      {/* Intro Description */}
      <div
        ref={introSectionRef}
        className="w-full flex flex-col items-center justify-center mt-60 mb-[40rem] space-y-6"
      >
        <p className="text-4xl text-[#4a4a2a] text-center font-reenie">
          <span className={`typing-line ${introVisible ? "intro-line1" : ""}`}>
            thanks for checking my website out :)
          </span>
        </p>
        <p className="text-4xl text-[#4a4a2a] text-center font-reenie">
          <span className={`typing-line ${introVisible ? "intro-line2" : ""}`}>
            see below to explore some of the projects i've been working on!
          </span>
        </p>
      </div>

      {/* Projects Section */}
      <section className="min-h-screen bg-white pb-40 overflow-visible">
        <ProjectNav />

        <div className="mt-20 transform scale-90 origin-top">
          <div
            id="projects"
            className="p-12 pl-28 w-full max-w-8xl mx-auto scroll-mt-24"
          >
            <div className="border-l border-r border-[#4a4a2a] px-10">
              <div className="max-w-3xl mx-auto text-center py-12">
                <p className="text-lg text-[#4a4a2a] mb-6 leading-relaxed">
                  all of my projects are vested in a passion of mine. in
                  threading technology with my interests, whether it is in
                  software development, data analytics, or even the very
                  keyboard in front of me, i can turn anything into a form of
                  communication. through each line of code, the angles of my
                  camera, and every sentence i have written, i aim to translate
                  complex ideas into something that others can see, feel, and
                  engage with.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-32 mt-20 px-12">
            {/* Software */}
            <section
              id="software"
              className="scroll-mt-32 relative w-full max-w-6xl mx-auto pb-40"
            >
              <h2 className="text-7xl font-bold text-[#4a4a2a] mb-6 text-center lowercase">
                software
              </h2>
              <p className="text-3xl text-[#4a4a2a] text-center font-reenie mb-32">
                explore my web development + data projects
              </p>

              <div className="absolute left-1/2 top-32 bottom-0 mt-20 transform -translate-x-1/2 border-l border-dotted border-[#4a4a2a]" />

              <div className="flex flex-col gap-32 relative z-10">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    align={i % 2 === 0 ? "left" : "right"}
                    href={project.href}
                  />
                ))}
              </div>
            </section>

            {/* Video */}
            <section id="video" className="scroll-mt-32 max-w-6xl mx-auto">
              <h2 className="text-7xl font-bold text-[#4a4a2a] mb-6 text-center lowercase">
                video
              </h2>
              <p className="text-3xl text-[#4a4a2a] text-center font-reenie mb-24">
                creative storytelling and promotion through film and motion
                graphics.
              </p>
              <VerticalVideos videos={videos} />
            </section>

            {/* Writing */}
            <section id="writing" className="scroll-mt-32 max-w-6xl mx-auto">
              <h2 className="text-7xl font-semibold text-[#4a4a2a] mb-6 text-center lowercase">
                writing
              </h2>
              <p className="text-3xl text-[#4a4a2a] text-center font-reenie mb-20">
                essays, creative writing, and reflections
              </p>

              <div className="flex justify-center gap-12 mt-32">
                <WritingBook
                  id="essay1"
                  title="The Romanticization of Mental Illness in Social Media"
                  cover={`${process.env.PUBLIC_URL}/images/romanticize.png`}
                  description="a critical essay analyzing the cultural impact of glamorizing mental illness in social media and online platforms."
                  link="/writing/romanticizationofmentalillness"
                />
                <WritingBook
                  id="essay2"
                  title="Enlightenment Through Nature & Anxiety From Industrial Progress"
                  cover={`${process.env.PUBLIC_URL}/images/mononoke.png`}
                  description="a commentary on studio ghibli's princess mononoke, transcendentalism, and the environmental war."
                  link="/writing/princessmononoke"
                />
                <WritingBook
                  id="essay3"
                  title="An Afternoon in the Vet School"
                  cover={`${process.env.PUBLIC_URL}/images/dailysun.png`}
                  description="a reflection of campus dilly-dallying, a moment of time within fast-moving lives for the Cornell Daily Sun Lifestyle Section."
                  link="https://www.cornellsun.com/article/2024/10/exploring-unexplored-campus-an-afternoon-in-the-vet-school"
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
