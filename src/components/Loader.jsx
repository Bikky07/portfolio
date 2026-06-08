import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black
      flex
      justify-center
      items-center
      z-[999]
      "
    >
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear"
        }}
        className="
        w-20
        h-20
        border-4
        border-blue-500
        border-t-transparent
        rounded-full
        "
      />
    </div>
  );
};

export default Loader;