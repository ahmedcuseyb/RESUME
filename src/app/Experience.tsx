// src/app/Experience.tsx
export default function Experience() {
    return (
      <section id="experience" className="bg-dark-blue text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
  <span className="text-blue-500">My</span> 
  <span className="text-green-500">Experience</span>
</h2>

          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus aliquam commodi sed
            excepturi incidunt odio ratione voluptatibus, officiis sit.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Job 1 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">2024 - Present</h3>
              <h4 className="text-xl font-semibold mb-4">Frontend Developer</h4>
              <p className="text-lg mb-4">Platerate</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab laboriosam.
              </p>
            </div>
  
            {/* Job 2 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">2022 - 2023</h3>
              <h4 className="text-xl font-semibold mb-4">Full Stack Developer</h4>
              <p className="text-lg mb-4">Google</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab laboriosam.
              </p>
            </div>
  
            {/* Job 3 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">2021 - 2022</h3>
              <h4 className="text-xl font-semibold mb-4">Backend Developer</h4>
              <p className="text-lg mb-4">YouTube</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab laboriosam.
              </p>
            </div>
  
            {/* Job 4 */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">2020 - 2021</h3>
              <h4 className="text-xl font-semibold mb-4">Frontend Developer</h4>
              <p className="text-lg mb-4">Xyz Inc.</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab laboriosam.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  