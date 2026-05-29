import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsBullseye } from "react-icons/bs";

function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-20 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-700/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-7 shadow-2xl hover:border-purple-500/20 transition duration-500"
          >

            <div className="space-y-6">

              <p className="text-gray-300 leading-7 text-base md:text-lg">
                Hi! I'm Shubham Parmar, an aspiring Full Stack Developer and
                AI/ML Enthusiast passionate about building innovative web
                applications and solving real-world problems through code.
              </p>

              <p className="text-gray-300 leading-7 text-base md:text-lg">
                I recently completed my B.Tech in Computer Science and Engineering
                and enjoy working on impactful projects like hospital management
                systems and AI-powered recommendation platforms.
              </p>

              <p className="text-gray-300 leading-7 text-base md:text-lg">
                I'm actively seeking opportunities where I can contribute,
                collaborate with talented teams, and continuously grow as a
                developer.
              </p>

            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-6">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 flex gap-5 items-start hover:border-purple-500/40 hover:scale-[1.02] transition duration-500"
            >
              <div className="bg-purple-600/20 p-4 rounded-2xl">
                <FaCode className="text-purple-400 text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Full Stack Development
                </h3>

                <p className="text-gray-400 text-base leading-7">
                  Building modern end-to-end web applications using React,
                  Node.js, Express, and scalable backend systems.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 flex gap-5 items-start hover:border-blue-500/40 hover:scale-[1.02] transition duration-500"
            >
              <div className="bg-blue-600/20 p-4 rounded-2xl">
                <HiSparkles className="text-blue-400 text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  AI/ML Integration
                </h3>

                <p className="text-gray-400 text-base leading-7">
                  Integrating intelligent AI/ML features into applications for
                  smarter and more efficient user experiences.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 flex gap-5 items-start hover:border-pink-500/40 hover:scale-[1.02] transition duration-500"
            >
              <div className="bg-pink-600/20 p-4 rounded-2xl">
                <BsBullseye className="text-pink-400 text-2xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Problem Solving
                </h3>

                <p className="text-gray-400 text-base leading-7">
                  Strong analytical thinking with a focus on clean, scalable,
                  and efficient solutions.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;