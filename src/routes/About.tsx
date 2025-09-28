import { motion } from "framer-motion";

export default function About() {
  const paragraphs = [
    "my journey into computer science has been unconventional. while many peers knew early on that they wanted to code, my interest came indirectly—through storytelling, logic games, and creative exploration. these taught me to think critically and express ideas in different ways, long before i connected them to CS.",
    "as the only child of two immigrants, years of little translations and transcriptions evolved into what i am proud to call skill: communication written between the lines of facial expressions and understanding the context of situations. my longstanding commitment grew into ambition beyond the walls of my home: i wanted to help communicate the beliefs, desires, and aspirations of the people without the privilege and opportunity of expression.",
    "building upon my enjoyment of coding in high school, i continued to explore computer science through a lens i believe is often overlooked; computer science, and particularly UI/UX, functions as a unique form of communication—a language with the capacity to reach audiences on a scale that traditional methods cannot.",
    "in combining my passion for communication with the ability to solve problems and amplify voices for those who may not have the resources to do so themselves, i have found myself enthralled by UI/UX design. for me, computer science represents not only technical skills, but a larger purpose: harnessing technology to give voice, foster connection, and expand opportunities for others.",
  ];

  return (
    <div className="flex justify-center w-full">
      {/* Zoomed out container */}
      <div className="transform scale-90 origin-top w-full">
        <div className="p-12 pl-28 flex flex-col gap-10">
          {/* Title */}
          <h1 className="text-6xl font-bold text-[#4a4a2a]">ABOUT</h1>

          {/* Background container */}
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/paperpic.jpg)`,
            }}
            className="bg-contain bg-no-repeat bg-center rounded-2xl
                       p-16 w-[1200px] min-h-[900px] flex flex-col
                       items-center justify-center text-center text-[#4a4a2a]
                       leading-relaxed text-lg mx-auto"
          >
            {/* Text box with staggered animation */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.4 },
                },
              }}
              className="p-12 max-w-2xl text-center"
            >
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-6"
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
