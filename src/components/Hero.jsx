import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Scene from "./Scene";
import Loader from "./Loader";
import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import ProfileCard from "./ProfileCard";
const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 text-lg mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Bikky <span className="gradient-text">Kumar</span>
          </motion.h1>

          <div className="mt-6 text-2xl md:text-4xl font-semibold text-blue-400">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 leading-8 text-lg"
          >
            BCA Graduate passionate about building responsive,
            scalable and modern web applications using React.js,
            Node.js, Express.js and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>
               <a
                href={resume}
                download="Bikky_Kumar_Resume.pdf"
                className="border border-white px-6 py-3 rounded-xl"
               >
               Download Resume
</a>
          </motion.div>
        </div>

        
       {/* Right Side Profile */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-12 lg:mt-0"
>
  <ProfileCard />
</motion.div>
      </div>
    </section>
  );
};

export default Hero;