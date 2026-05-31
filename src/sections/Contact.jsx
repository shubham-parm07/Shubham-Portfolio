import React from "react";

import {
  Mail,
  Phone,
  Globe,
  Code2,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-between"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-24 pb-2">

        {/* Heading */}
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="w-36 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500 mx-auto rounded-full mt-4 shadow-lg shadow-fuchsia-500/40"></div>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Information
            </h3>

            <div className="space-y-4 overflow-hidden">

              {/* Email */}
              <div className="group flex items-center gap-4 bg-gradient-to-br from-fuchsia-900/20 to-black border border-fuchsia-500/20 rounded-3xl p-4 backdrop-blur-md hover:scale-[1.02] hover:border-fuchsia-500/50 transition-all duration-300 shadow-lg shadow-fuchsia-500/10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                  <Mail size={30} className="text-white" />
                </div>

                <div>
                  <p className="text-gray-400 text-base">Email</p>
                  <h4 className="text-xl font-semibold group-hover:text-fuchsia-400 transition break-all">
                    shubhamparm674@gmail.com
                  </h4>
                </div>

              </div>

              {/* Phone */}
              <div className="group flex items-center gap-4 bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded-3xl p-4 backdrop-blur-md hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Phone size={30} className="text-white" />
                </div>

                <div>
                  <p className="text-gray-400 text-base">Phone</p>
                  <h4 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                    +91 7096603264
                  </h4>
                </div>

              </div>

              {/* LinkedIn */}
              <div className="group flex items-center gap-4 bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 rounded-3xl p-4 backdrop-blur-md hover:scale-[1.02] hover:border-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Globe size={30} className="text-white" />
                </div>

                <div>
                  <p className="text-gray-400 text-base">LinkedIn</p>
                  <h4 className="text-xl font-semibold group-hover:text-emerald-400 transition break-all">
                    linkedin.com/in/Shubham-parmar-575102300
                  </h4>
                </div>

              </div>

              {/* GitHub */}
              <div className="group flex items-center gap-4 bg-gradient-to-br from-orange-900/20 to-black border border-orange-500/20 rounded-3xl p-4 backdrop-blur-md hover:scale-[1.02] hover:border-orange-500/50 transition-all duration-300 shadow-lg shadow-orange-500/10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Code2 size={30} className="text-white" />
                </div>

                <div>
                  <p className="text-gray-400 text-base">Github</p>
                  <h4 className="text-xl font-semibold group-hover:text-orange-400 transition break-all">
                    Github.com/shubham-parm07
                  </h4>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4 overflow-hidden">

            <form
              action="https://formsubmit.co/shubhamparm674@gmail.com"
              method="POST"
              className="space-y-4"
            >

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Name */}
              <div>
                <label className="block text-base mb-2 text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-base outline-none focus:border-fuchsia-500 focus:shadow-lg focus:shadow-fuchsia-500/20 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base mb-2 text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-base outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-base mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your message..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-base outline-none focus:border-fuchsia-500 focus:shadow-lg focus:shadow-fuchsia-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-xl font-bold bg-gradient-to-r from-fuchsia-600 via-purple-500 to-blue-600 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={22} />
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-2 text-center text-gray-500 text-sm backdrop-blur-sm">
        © 2026 Shubham Parmar. All rights reserved.
      </footer>

    </section>
  );
}

export default Contact;