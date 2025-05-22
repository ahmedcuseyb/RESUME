'use client';  // Ensure it's a client component

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaSass, FaGitAlt, FaPython } from 'react-icons/fa';

export default function TechStackLanguages() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-blue-500">My</span> 
          <span className="text-green-500">Tech Stack</span>
        </h2>
        <p className="text-lg mb-12">
          These are the technologies I work with, which help me build modern web applications.
        </p>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* HTML5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaHtml5 className="text-5xl text-orange-500" />
          </div>

          {/* CSS3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaCss3Alt className="text-5xl text-blue-500" />
          </div>

          {/* JavaScript */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaJsSquare className="text-5xl text-yellow-500" />
          </div>

          {/* React */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaReact className="text-5xl text-blue-400" />
          </div>

          {/* Node.js */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaNodeJs className="text-5xl text-green-500" />
          </div>

          {/* Bootstrap */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaBootstrap className="text-5xl text-indigo-500" />
          </div>

          {/* SASS */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaSass className="text-5xl text-pink-500" />
          </div>

          {/* Git */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaGitAlt className="text-5xl text-orange-600" />
          </div>

          {/* Python */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <FaPython className="text-5xl text-yellow-400" />
          </div>

          {/* Django (using local image) */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex justify-center items-center">
            <img src="/images/django-logo.svg" alt="Django" className="w-16 h-16" /> {/* Added width and height */}
          </div>
        </div>
      </div>
    </section>
  );
}
