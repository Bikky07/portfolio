import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.title}
              whileHover={{
                y: -12,
                scale: 1.03
              }}
              className="
              bg-white/5
              backdrop-blur-lg
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-56
                object-cover
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-blue-500/20
                      text-blue-300
                      text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-600
                  px-5
                  py-3
                  rounded-xl
                  hover:bg-blue-700
                  transition
                  "
                >
                  <FaGithub />
                  View Code
                </a>

              </div>

            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;