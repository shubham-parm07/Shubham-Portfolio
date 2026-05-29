import { motion } from "framer-motion";
import {
  FaHospital,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Hospital Management",
      icon: <FaHospital />,
      iconBg: "bg-pink-600/20",
      iconColor: "text-pink-400",
      hoverBorder: "hover:border-pink-500/40",
      glow: "from-pink-500/10 to-purple-500/10",
      description:
        "A complete hospital management system for handling patients, appointments, doctors, and records with secure authentication and modern dashboard UI.",
      tech: ["React", "Node.js", "MongoDB"],
    },

    {
      title: "StudySwap",
      icon: <FaGlobe />,
      iconBg: "bg-cyan-600/20",
      iconColor: "text-cyan-400",
      hoverBorder: "hover:border-cyan-500/40",
      glow: "from-cyan-500/10 to-blue-500/10",
      description:
        "Platform for uploading, browsing, and managing study resources with authentication and API integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },

    {
      title: "Dressify",
      icon: <FaRobot />,
      iconBg: "bg-green-600/20",
      iconColor: "text-green-400",
      hoverBorder: "hover:border-green-500/40",
      glow: "from-green-500/10 to-emerald-500/10",
      description:
        "AI-powered fashion recommendation system that suggests outfits based on user preferences and occasions using intelligent machine learning models.",
      tech: ["Python", "TensorFlow", "React"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white pt-24 pb-28 overflow-hidden flex items-center"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-700/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-5 text-lg">
            Some of my featured development and AI-based projects
          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${project.glow} bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 transition duration-500 shadow-xl ${project.hoverBorder} min-h-[360px] flex flex-col justify-between`}
            >

              {/* Top */}
              <div>

                <div className="flex items-center gap-4 mb-8">

                  <div className={`p-5 rounded-2xl ${project.iconBg}`}>
                    <span className={`text-3xl ${project.iconColor}`}>
                      {project.icon}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-10 mb-8">
                  {project.description}
                </p>

              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">

                {project.tech.map((tech, techIndex) => (

                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm md:text-base hover:bg-white/20 hover:scale-105 transition duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;