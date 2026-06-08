import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "SkyBrisk Technologies",
    duration: "2025",
    points: [
      "Developed responsive web pages",
      "Worked with React.js and JavaScript",
      "Built modern UI components",
      "Improved frontend performance"
    ]
  },

  {
    title: "ERP Management System",
    company: "Personal Project",
    duration: "2025 - 2026",
    points: [
      "Created student management module",
      "Built authentication system",
      "Developed attendance management",
      "Integrated MongoDB database"
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative border-l-4 border-blue-500">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              className="mb-12 ml-8"
            >
              <div
                className="
                absolute
                -left-3
                w-5
                h-5
                rounded-full
                bg-blue-500
                "
              />

              <div
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                "
              >
                <h3 className="text-2xl font-bold">
                  {exp.title}
                </h3>

                <p className="text-blue-400">
                  {exp.company}
                </p>

                <p className="text-gray-500 mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-300"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;