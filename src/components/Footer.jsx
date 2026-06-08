import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-center gap-8 text-2xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

        </div>

        <p className="text-center mt-8 text-gray-400">
          © 2026 Bikky Kumar | MERN Stack Developer
        </p>

      </div>

    </footer>
  );
};

export default Footer;