import {
  Award,
  Globe,
  GraduationCap,
} from "lucide-react";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center pt-28 pb-10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
            Certificates
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 text-lg md:text-2xl mt-5">
            Professional certifications and achievements
          </p>
        </div>

        {/* Cards */}
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-fuchsia-900/30 via-black to-black border border-fuchsia-500/20 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 h-[360px]">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <Award size={40} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold leading-tight mb-4">
              Full Stack Internship Certificate – Techomax Solution
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Successfully completed full stack development internship focused on React.js, Node.js, MongoDB, and responsive UI development.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-cyan-900/30 via-black to-blue-950 border border-cyan-500/20 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 h-[360px]">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Globe size={40} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold leading-tight mb-4">
              AI, Business & the Future of Work – Coursera
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Learned about AI integration, automation, future workforce trends, and business transformation using modern AI technologies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-green-900/30 via-black to-cyan-950 border border-green-500/20 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 h-[360px]">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <GraduationCap size={40} className="text-white" />
            </div>

            <h3 className="text-2xl font-bold leading-tight mb-4">
              Advance Web Technology – Coursera
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Covered advanced concepts of modern web technologies, frontend frameworks, APIs, responsive design, and scalable application development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;