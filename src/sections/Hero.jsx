import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] top-20 left-20"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] bottom-10 right-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center w-full max-w-6xl mx-auto px-4 md:px-8"
      >
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-400 bg-clip-text text-transparent">
            Shubham Parmar
          </span>
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-200 mb-10">
          Full Stack Developer & AI/ML Enthusiast
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl leading-relaxed mb-14">
          Passionate about building scalable web applications and leveraging
          AI/ML to solve real-world problems. Ready to contribute to
          innovative teams and grow as a professional developer.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-2">

          {/* Resume Button */}
          <a
            href="/SHUBHAM PARMAR.pdf"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
          >
            <HiDownload size={24} />
            Download Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/shubham-parm07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 hover:scale-105 transition duration-300"
          >
            <FaGithub size={24} />
            GitHub
          </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/Shubham-parmar-575102300"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 hover:scale-105 transition duration-300"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 mb-10 flex justify-center">
        <div className="w-8 h-14 border border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-white rounded-full mt-3"
          />
        </div>
      </div>
    </motion.div>
    </section >
  );
}

export default Hero;