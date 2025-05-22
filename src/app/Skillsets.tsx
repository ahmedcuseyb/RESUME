// src/app/Skills.tsx
export default function Skills() {
  return (
    <section id="skills" className="bg-dark-blue text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-green-500 mb-8">My Skills</h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus aliquam commodi
          sed excepturi incidunt odio ratione voluptatibus, officiis sit.
        </p>

        {/* Skill Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {/* HTML Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-html5 text-4xl text-orange-500"></i>
          </div>

          {/* CSS Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
          </div>

          {/* JavaScript Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-js-square text-4xl text-yellow-500"></i>
          </div>

          {/* Node.js Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-node text-4xl text-green-500"></i>
          </div>

          {/* React Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-react text-4xl text-blue-400"></i>
          </div>

          {/* Vue.js Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-vuejs text-4xl text-green-400"></i>
          </div>

          {/* Express.js Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-node text-4xl text-green-600"></i> {/* Node.js or Express icon */}
          </div>

          {/* MongoDB Icon */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex justify-center items-center">
            <i className="fab fa-envira text-4xl text-green-500"></i> {/* MongoDB icon */}
          </div>
        </div>
      </div>
    </section>
  );
}
