import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import school from "../assets/glimpses/school.jpg";
import grad from "../assets/glimpses/grad_real.jpg";
import child from "../assets/glimpses/child_real.jpg";
import dog from "../assets/glimpses/dog_real.jpg";
import japan from "../assets/glimpses/japan.jpg";
import hiking from "../assets/glimpses/hiking.jpg";

type Card = { id: number; src: string; alt: string };

const cards: Card[] = [
  { id: 1, src: japan, alt: "Photo 1" },
  { id: 2, src: grad, alt: "Photo 2" },
  { id: 3, src: school, alt: "Photo 3" },
  { id: 4, src: dog, alt: "Photo 4" },
  { id: 5, src: child, alt: "Photo 5" },
  { id: 6, src: hiking, alt: "Photo 6" },
];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function CardStack() {
  // random-but-stable scatter (generated once)
  const scatter = useMemo(
    () =>
      cards.reduce<Record<number, { rot: number; x: number }>>((acc, c) => {
        acc[c.id] = { rot: randomBetween(-10, 10), x: randomBetween(-16, 16) };
        return acc;
      }, {}),
    []
  );

  const [stack, setStack] = useState(cards);

  const handleClick = () => {
    setStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div
      className="relative cursor-pointer w-72 h-[430px] sm:w-80 sm:h-[480px]"
      onClick={handleClick}
    >
      {stack.map((card, i) => (
        <motion.img
          key={card.id}
          src={card.src}
          alt={card.alt}
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl"
          style={{ zIndex: stack.length - i }}
          initial={{
            rotate: scatter[card.id].rot,
            x: scatter[card.id].x,
            y: i * 10,
            scale: 1 - i * 0.045,
          }}
          animate={{
            rotate: scatter[card.id].rot,
            x: scatter[card.id].x,
            y: i * 10,
            scale: 1 - i * 0.045,
          }}
          transition={{ type: "spring", stiffness: 210, damping: 20 }}
        />
      ))}
    </div>
  );
}

function ClassBullet({ text }: { text: string }) {
  const idx = text.indexOf(":");
  const code = idx >= 0 ? text.slice(0, idx) : text;
  const rest = idx >= 0 ? text.slice(idx) : "";
  return (
    <li className="leading-snug">
      <span className="font-bold">{code}</span>
      {rest}
    </li>
  );
}

export default function About() {
  const paragraphs = [
    "my journey into computer science has been unconventional. while many peers knew early on that they wanted to code, my interest came indirectly—through storytelling, logic games, and creative exploration. these taught me to think critically and express ideas in different ways, long before i connected them to CS.",
    "as the only child of two immigrants, years of little translations and transcriptions evolved into what i am proud to call skill: communication written between the lines of facial expressions and understanding the context of situations. my longstanding commitment grew into ambition beyond the walls of my home: i wanted to help communicate the beliefs, desires, and aspirations of the people without the privilege and opportunity of expression.",
    "building upon my enjoyment of coding in high school, i continued to explore computer science through a lens i believe is often overlooked; computer science functions as a unique form of communication—a language with the capacity to reach audiences on a scale that traditional methods cannot.",
    "in combining my passion for communication with the ability to solve problems and amplify voices for those who may not have the resources to do so themselves, i have found myself enthralled by creation. for me, computer science represents not only technical skills, but a larger purpose: harnessing technology to give voice, foster connection, and expand opportunities for others.",
  ];

  const classes = [
    "CS 4820: Analysis of Algorithms",
    "CS 3110: OOP & DSA Functional Programming (OCaml)",
    "CS 2110: Object-Oriented Programming & Data Structures (Java)",
    "CS 1110: Introduction to Computing (Python)",
    "MATH 2940: Linear Algebra",
    "MATH 1920: Multivariable Calculus",
    "ECE 2720: Data Science for Engineers",
    "ENGRI 1101: Applications of Operation Research",
    "COMM 1300: Visual Communication",
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="transform scale-90 origin-top w-full">
        {/* Responsive page padding (keeps layout from going messy) */}
        <div className="px-6 sm:px-10 lg:px-12 lg:pl-28 py-10 flex flex-col gap-10">
          {/* ABOUT larger + responsive */}
          <h1 className="font-reenie font-bold text-[#4a4a2a] text-8xl sm:text-8xl lg:text-8xl">
            ABOUT
          </h1>

          {/* Responsive two-column: stacks on small screens */}
          <div className="flex flex-col xl:flex-row w-full xl:justify-between gap-10 xl:gap-6">
            {/* LEFT COLUMN */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
              className="flex flex-col gap-10 xl:w-1/2 mt-2"
            >
              {/* Resume link */}
              <motion.a
                href="https://drive.google.com/file/d/1rkPngd0G_I4Snm41y2fksV6Ac7MlhXTD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-[#4a4a2a] underline"
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                📄 RESUME
              </motion.a>

              {/* Classes */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[#4a4a2a] font-bold text-center mb-4 text-5xl sm:text-6xl">
                  Classes Taken
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-xl sm:text-2xl text-[#4a4a2a]">
                  {classes.map((c, i) => (
                    <ClassBullet key={i} text={c} />
                  ))}
                </ul>
              </motion.div>

              {/* Glimpses */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-2"
              >
                <h2 className="text-[#4a4a2a] font-bold text-center mb-6 text-5xl sm:text-6xl">
                  Glimpses
                </h2>

                {/* more space between title and photos */}
                <div className="w-full flex justify-center mt-6">
                  <CardStack />
                </div>

                {/* same font as ABOUT */}
                <h3 className="font-reenie text-[#4a4a2a] text-center mt-6 text-3xl sm:text-4xl">
                  A look into who I am :)
                </h3>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN (Paper background) — keep as before, but responsive width) */}
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/paperpic.jpg)`,
              }}
              className="bg-contain bg-no-repeat bg-center rounded-2xl
                         p-10 sm:p-14 lg:p-16 w-full xl:w-[800px]
                         min-h-[780px] sm:min-h-[900px]
                         flex flex-col items-center justify-center
                         text-center text-[#4a4a2a]
                         leading-relaxed text-lg"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
                }}
                className="p-8 sm:p-12 max-w-2xl text-center"
              >
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
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
    </div>
  );
}