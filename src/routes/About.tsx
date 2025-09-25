export default function About() {
  return (
    <div className="p-12 pl-28 flex flex-col gap-10">
    <section className="min-h-screen bg-white p-12">
      {/* Title */}
      <h1 className="text-6xl font-bold text-[#4a4a2a] mb-12">ABOUT</h1>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-center text-[#4a4a2a] leading-relaxed text-lg">
        <p>
          My journey into computer science has been unconventional. While many
          peers knew early on that they wanted to code, my interest came
          indirectly—through storytelling, logic games, and creative
          exploration. These taught me to think critically and express ideas in
          different ways, long before I connected them to CS.
        </p>

        <p>
          I knew I wanted to help communicate the beliefs, desires and
          aspirations of the people without the privilege and opportunity of
          expression. Building my upon my goals paired with my enjoyment of coding in 
          high school, I continued to explore computer science through a lens I believe is
          often overlooked; Computer science, and particularly UI/UX functions
          as a unique form of communication—a language with the capacity to
          reach audiences on a scale that traditional methods cannot.
        </p>

        <p>
          In combining my passion for communication with the ability to solve
          problems and amplify voices for those who may not have the resources
          to do so themselves, I have been led to UI/UX Design. For me, computer
          science represents not only technical skills, but a larger purpose:
          harnessing technology to give voice, foster connection, and expand
          opportunities for others.
        </p>
      </div>
    </section>
  </div>
  );
}
