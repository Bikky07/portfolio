const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
];

const SkillBars = () => {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Technical Skills
        </h2>

        <div className="space-y-8">

          {skills.map((skill) => (
            <div key={skill.name}>

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="bg-white/10 h-4 rounded-full">

                <div
                  className="
                  h-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  "
                  style={{
                    width: `${skill.level}%`
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SkillBars;