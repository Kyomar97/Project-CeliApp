import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-lime-950 text-white p-4 text-center bottom-0 w-full">
      <a
        href="https://github.com/Kyomar97?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="underline flex items-center justify-center space-x-2"
      >
        <FaGithub className="text-xl" />
        <span>GitHub Repository</span>
      </a>
    </footer>
  );
}

export default Footer;
