import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-10 text-center">
      <h2 className="text-3xl font-bold mb-4">About This Project</h2>
      <div className="mt-6">
        <img
          src="data:image/png;base64,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"
          alt="Tu nombre"
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700">
        Este proyecto se ha realizado con el objetivo de aprender y mejorar mis
        habilidades en desarrollo web. Utiliza tecnologías modernas como React y
        Tailwind CSS para crear una interfaz rápida. También tenia como objetivo
        trabajar con el método CRUD, pidiendo y recibiendo información desde un
        servidor externo.
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
