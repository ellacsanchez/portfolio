import { motion } from "framer-motion";
import { spring, container, item } from "../motion/spring";

export default function ContactPage() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl bg-white rounded-xl shadow-md p-12 m-6"
      >
        {/* Title */}
        <h1 className="text-6xl font-bold font-reenie text-center text-[#4a4a2a] mb-12 tracking-widest">
          CONTACT
        </h1>

        <p className="text-2xl font-reenie text-center mb-12 text-[#4a4a2a]">
          Feel free to reach out for any questions! Always happy to chat :)
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* GitHub */}
          <motion.a
            href="https://github.com/ellacsanchez"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="aspect-square border rounded-xl bg-gray-50 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <img
              src="/images/github.svg"
              alt="GitHub"
              className="w-16 h-16 object-contain"
            />
          </motion.a>

          {/* Mail */}
          <motion.a
            href="mailto:ellasanchez2101@gmail.com"
            variants={item}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="aspect-square border rounded-xl bg-gray-50 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <img
              src="/images/mail.svg"
              alt="Email"
              className="w-16 h-16 object-contain"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ella-sanchez-112955247/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="aspect-square border rounded-xl bg-gray-50 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="w-16 h-16 object-contain"
            />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/ellaclarisse_/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={spring}
            className="aspect-square border rounded-xl bg-gray-50 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
          >
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-16 h-16 object-contain"
            />
          </motion.a>

        </div>
      </motion.div>
    </div>
  );
}