import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">About This Project</h2>
      <div className="mt-6">
        <img
          src="https://via.placeholder.com/150" // Reemplazar con imagen o avatar
          alt="Tu nombre"
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700">
        Este proyecto se ha realizado con el objetivo de aprender y mejorar mis
        habilidades en desarrollo web. Utiliza tecnologías modernas como React y
        Tailwind CSS para crear una interfaz rápida. También tenia como objetivo
        trabajar con...
      </p>

      <div className="mt-6 flex justify-center space-x-4">
        <a
          href={"https://github.com/Kyomar97"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>

        <a
          href={"www.linkedin.com/in/sebna-omar-gutiérrez-rodríguez-7099231b3"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
