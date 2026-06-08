import SkillCard from "./SkillCard";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Tailwind",
  "Git",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          {skills.map((skill) => (
            <SkillCard
              key={skill}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;