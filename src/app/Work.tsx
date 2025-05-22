// src/app/Work.tsx
export default function Work() {
    return (
      <section id="work" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-blue-500 mb-8">Work</h2>
  
          {/* Grid Layout for Work Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Work Image 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work1.jpg" alt="Work 1" className="object-cover w-full h-full rounded-lg" />
            </div>
  
            {/* Work Image 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work2.jpg" alt="Work 2" className="object-cover w-full h-full rounded-lg" />
            </div>
  
            {/* Work Image 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work3.jpg" alt="Work 3" className="object-cover w-full h-full rounded-lg" />
            </div>
  
            {/* Work Image 4 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work4.jpg" alt="Work 4" className="object-cover w-full h-full rounded-lg" />
            </div>
  
            {/* Work Image 5 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work5.jpg" alt="Work 5" className="object-cover w-full h-full rounded-lg" />
            </div>
  
            {/* Work Image 6 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img src="/images/work6.jpg" alt="Work 6" className="object-cover w-full h-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  