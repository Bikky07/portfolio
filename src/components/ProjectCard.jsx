import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

const ProjectCard = ({
  title,
  image,
  description
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
      bg-white/5
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      "
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-gray-400">
          {description}
        </p>

        <div className="flex gap-5 mt-6">

          <FaGithub size={22} />

          <FaExternalLinkAlt size={22} />

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;