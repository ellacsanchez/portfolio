export default function Projects() {
  return (
    <div className="p-12 pl-28 flex flex-col gap-10">
      {/* Title */}
      <div className="flex">
        <h1 className="text-6xl font-bold text-[#4a4a2a]">PROJECTS</h1>
      </div>

      {/* Intro + Categories Row */}
      <div className="flex justify-between items-stretch w-full max-w-8xl mx-auto ">
        {/* Left: Intro with left border */}
        <div className="flex-1 pl-6 pr-10 border-l border-[#4a4a2a] text-left">
          <p className="text-lg text-[#4a4a2a] mb-6 leading-relaxed">
            these are some of the projects I have done or are currently working on.
          </p>
          <p className="text-lg text-[#4a4a2a] leading-relaxed">
            each of my projects are vested in a certain passion of mine, from software
            development and data analytics, videography, and writing!
          </p>
        </div>

        {/* Right: Categories with right border */}
        <div className="flex-1 pl-10 pr-6 border-r border-[#4a4a2a] flex flex-col justify-center text-right gap-6">
          <span className="text-lg text-[#4a4a2a]">software</span>
          <span className="text-lg text-[#4a4a2a]">video</span>
          <span className="text-lg text-[#4a4a2a]">writing</span>
        </div>
      </div>





      {/* Project Sections (scrollable below) */}
      <div className="flex flex-col gap-16">
        <section>
          <h2 className="text-3xl font-semibold text-[#4a4a2a]">Pocket Closet</h2>
          <p className="mt-2 text-[#4a4a2a]">
            A full-stack wardrobe planner built with Remix, Prisma, and Cloudinary.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#4a4a2a]">CUAir Website</h2>
          <p className="mt-2 text-[#4a4a2a]">
            Redesigned and maintained cuair.org for Cornell’s UAV team.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#4a4a2a]">Videography</h2>
          <p className="mt-2 text-[#4a4a2a]">
            CUAir promotional and technical videography.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#4a4a2a]">Writing</h2>
          <p className="mt-2 text-[#4a4a2a]">
            Essays like “Romanticization of Mental Illness,” creative writing, and more.
          </p>
        </section>
      </div>
    </div>
  );
}
