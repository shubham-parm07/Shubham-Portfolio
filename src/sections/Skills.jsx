import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import { HiChip } from "react-icons/hi";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      iconBg: "bg-purple-600/20",
      iconColor: "text-purple-400",
      hoverBorder: "hover:border-purple-500/40",
      titleColor: "from-purple-300 to-pink-400",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },

    {
      title: "Backend Development",
      icon: <FaServer />,
      iconBg: "bg-blue-600/20",
      iconColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/40",
      titleColor: "from-blue-300 to-cyan-400",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB",
        "RESTful APIs",
        "Authentication",
      ],
    },

    {
      title: "AI/ML & Data Science",
      icon: <HiChip />,
      iconBg: "bg-green-600/20",
      iconColor: "text-green-400",
      hoverBorder: "hover:border-green-500/40",
      titleColor: "from-green-300 to-emerald-400",
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Machine Learning",
      ],
    },

    {
      title: "Tools & Technologies", 
      icon: <FaTools />,
      iconBg: "bg-orange-600/20",
      iconColor: "text-orange-400",
      hoverBorder: "hover:border-orange-500/40",
      titleColor: "from-orange-300 to-yellow-400",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-black text-white min-h-screen flex items-center overflow-hidden py-16"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-[320px] h-[320px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-blue-700/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full scale-100 md:scale-[0.92]">   

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight px-2">
           Skills & Technologies
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-5 text-base md:text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 transition duration-500 shadow-xl ${category.hoverBorder}`}
            >

              {/* Top */}
              <div className="flex items-center gap-4 mb-5">

                <div className={`p-4 rounded-2xl ${category.iconBg}`}>
                  <span className={`text-3xl ${category.iconColor}`}>
                    {category.icon}
                  </span>
                </div>

                <h3
                  className={`text-2xl md:text-[2rem] font-bold bg-gradient-to-r ${category.titleColor} bg-clip-text text-transparent leading-tight`}
                >
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, skillIndex) => (

                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm md:text-base hover:bg-white/20 hover:scale-105 transition duration-300 cursor-default"
                  >
                    {skill}
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

export default Skills;