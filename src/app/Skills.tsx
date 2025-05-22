// src/app/Services.tsx
export default function Skills() {
    return (
      <section id="Skills" className="bg-dark-blue text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
          <span className="text-blue-500">My</span> 
          <span className="text-green-500">Skills</span>
        </h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-laptop-code"></i> {/* Web Development Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-lg mb-4">
              Creating dynamic and interactive websites using the latest technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js.              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
  
            {/* UI/UX Design Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-paint-brush"></i> {/* UI/UX Design Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-lg mb-4">
              Designing user interfaces and experiences that are visually appealing, easy to use, and provide a seamless experience across all devices.              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
  
            {/* Graphic Design Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-palette"></i> {/* Graphic Design Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
              <p className="text-lg mb-4">
              Creating visual content for print and digital media, including logos, brochures, advertisements, and branding materials              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
  
            {/* SEO Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-search"></i> {/* SEO Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">SEO</h3>
              <p className="text-lg mb-4">
              Optimizing website content to improve its visibility and ranking on search engines like Google, driving more organic traffic to websites.              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
  
            {/* Video Editing Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-video"></i> {/* Video Editing Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Video Editing</h3>
              <p className="text-lg mb-4">
              Editing raw video footage into polished, professional videos for films, social media, marketing, and more, using software like Adobe Premiere Pro and Final Cut Pro.              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
  
            {/* Photography Card */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="text-4xl mb-4 text-blue-500">
                <i className="fas fa-camera"></i> {/* Photography Icon */}
              </div>
              <h3 className="text-2xl font-semibold mb-4">Photography</h3>
              <p className="text-lg mb-4">
              Capturing high-quality images for various purposes, including portraits, events, landscapes, and commercial projects, with a focus on composition and lighting              </p>
              <a href="#" className="text-blue-500 hover:text-white transition duration-300">
                <i className="fas fa-chevron-down"></i> {/* Arrow Icon */}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  