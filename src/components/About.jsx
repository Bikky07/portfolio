import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <p className="text-gray-300 leading-9 text-lg">
             I’m Bikky Kumar, a BCA graduate and aspiring Frontend Developer passionate about building modern, responsive, and user-friendly web applications.
              I enjoy transforming ideas into real-world digital products using HTML, CSS, JavaScript, and React.js.

            During my academic journey, I worked on practical projects like an ERP Management System, which 
            helped me strengthen my skills in frontend development, UI design, and problem-solving. 
             I continuously explore modern tools like React, Tailwind CSS, and API integration to improve my development skills.


I focus on writing clean, efficient code and creating smooth user experiences with responsive design. I’m also expanding my knowledge in backend development to move toward becoming a full-stack developer in the future.

Currently, I’m looking for opportunities as a Frontend Developer / Web Developer Fresher or Intern, where I can contribute to real-world projects, learn industry practices, and grow my career in software development.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              My primary technologies include React,
              Node.js, Express, MongoDB, JavaScript,
              Tailwind CSS and Python.
            </p>
          </div>

          <div
            className="
            bg-white/5
            backdrop-blur-lg
            rounded-3xl
            border
            border-white/10
            p-10
            "
          >
            <div className="space-y-5">

              <div>
                <span className="text-blue-400">
                  Name:
                </span>{" "}
                Bikky Kumar
              </div>

              <div>
                <span className="text-blue-400">
                  Degree:
                </span>{" "}
                BCA
              </div>

              <div>
                <span className="text-blue-400">
                  Location:
                </span>{" "}
                Bihar, India
              </div>

              <div>
                <span className="text-blue-400">
                  Role:
                </span>{" "}
                MERN Developer
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;