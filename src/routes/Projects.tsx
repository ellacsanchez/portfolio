export default function Projects() {
  return (
    <div className="p-12 pl-28 flex flex-col gap-10">
      {/* Title */}
      <div className="flex">
        <h1 className="text-6xl font-bold text-[#4a4a2a]">PROJECTS</h1>
      </div>

      {/* Intro + Categories Row */}
      <div className="flex justify-between items-start">
        {/* Left: Intro */}
        <div className="flex-1 pr-8 border-r text-left">
          <p className="text-lg text-[#4a4a2a] mb-4">
            these are some of the projects I have done or are currently working on.
          </p>
          <p className="text-lg text-[#4a4a2a]">
            each of my projects are vested in a certain passion of mine. through the
            multitude of possibilities offered by website development, i can attempt
            to translate the world around me for others to read, watch, understand, 
            and experience. be it fashion, politics, engineering project team planes, 
            each of my projects has meaning tied, and while minute to some, large to myself
            and hopefully you as well.  

          </p>
        </div>

        {/* Right: Categories */}
        <div className="flex-1 pl-8 border-l text-right flex flex-col gap-4">
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
