import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Techomax Solution",
      duration: "June 2025 - October 2025",
      points: [
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        "Collaborated with cross-functional teams to design and implement new features",
        "Improved application performance by 30% through code optimization",
        "Participated in code reviews and contributed to team knowledge sharing",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white pt-24 pb-16 overflow-hidden flex items-center"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-700/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

        </motion.div>

        {/* Timeline Layout */}
        <div className="flex items-start gap-8">

          {/* Left Timeline */}
          <div className="hidden md:flex flex-col items-center pt-8">

            <div className="w-[2px] h-[420px] bg-gradient-to-b from-purple-500 to-blue-500 relative">

              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-black shadow-[0_0_20px_#a855f7]"></div>

            </div>

          </div>

          {/* Experience Card */}
          <div className="flex-1">

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:border-purple-500/40 transition duration-500"
              >

                {/* Top */}
                <div className="flex items-start gap-6 mb-8">

                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-5 rounded-2xl">
                    <FaBriefcase className="text-white text-3xl" />
                  </div>

                  <div>

                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>

                    <p className="text-gray-400 text-2xl mt-2">
                      {exp.company}
                    </p>

                    <p className="text-gray-500 text-lg mt-3">
                      {exp.duration}
                    </p>

                  </div>

                </div>

                {/* Points */}
                <div className="space-y-5">

                  {exp.points.map((point, i) => (

                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >

                      <div className="w-3 h-3 rounded-full bg-purple-400 mt-3"></div>

                      <p className="text-gray-300 text-lg md:text-xl leading-9">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;