import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotateY: 15,
      }}
      className="
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      rounded-3xl
      p-8
      text-center
      cursor-pointer
      "
    >
      <h3 className="text-xl font-bold">
        {skill}
      </h3>
    </motion.div>
  );
};

export default SkillCard;