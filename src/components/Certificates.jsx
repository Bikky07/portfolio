import { motion } from "framer-motion";

const certificates = [
  {
    title: "Python Programming",
    issuer: "Certification"
  },
  {
    title: "Web Development",
    issuer: "Certification"
  },
  {
    title: "JavaScript",
    issuer: "Certification"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateY: 10
              }}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-lg
              "
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.issuer}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;