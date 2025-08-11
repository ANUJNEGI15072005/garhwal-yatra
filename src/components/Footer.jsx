import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="max-w-xl mx-auto text-base md:text-lg mb-4">
          Garhwal Yatra is a travel guide project dedicated to exploring the beauty,
          culture, and spirituality of Uttarakhand's Garhwal region — from majestic
          temples to breathtaking treks.
        </p>

        <p className="text-sm md:text-base mb-2">
          Developed by <span className="font-medium text-white">Anuj Negi</span>
        </p>

        <div className="flex justify-center gap-3 text-2xl">
          <a
            href="https://www.linkedin.com/in/anujnegi-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ANUJNEGI15072005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <p className="sm:text-sm text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Garhwal Yatra. All rights reserved.  
          Images used are for illustrative purposes only and remain the property of
          their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
