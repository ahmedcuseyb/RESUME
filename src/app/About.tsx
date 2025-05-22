// src/app/About.tsx
import Image from 'next/image';



export default function About() {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-700 to-green-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Side: Profile Image */}
        <div className="w-48 h-48 rounded-full border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden flex justify-center items-center hidden md:block">
          <Image
            src="/images/bicir.jpeg" // Replace with your image path
            width={500}  // Replace with your image's width
            height={500} // Replace with your image's height
            alt="Bicir"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="md:w-1/2 ml-8">
          <h2 className="text-4xl font-bold mb-4">About </h2>
          <h3 className="text-2xl font-semibold mb-4">Full Stack Developer!</h3>
          <p className="text-lg mb-6">
            I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating captivating website designs and implementing them through frontend development. I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:bg-gradient-to-l transition duration-300"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
}
