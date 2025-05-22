import Link from 'next/link';
import Image from 'next/image';

<Image 
  src="/images/bicir.jpeg" 
  alt="Profile" 
  width={500}  // Add your image width
  height={500}  // Add your image height
  className="object-cover w-full h-full" 
/>

export default function Header() {
  return (
    <section id="header" className="bg-black text-white py-16 px-6">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center mb-12">
        <div className="text-3xl font-bold">
          <Link href="/" className="text-white hover:text-green-500">
            Portfolio.
          </Link>
        </div>
        <div className="flex space-x-8 text-lg">
          <Link href="#home" className="text-white hover:text-green-500">Home</Link>
          <Link href="#Skills" className="text-white hover:text-green-500">Skills</Link>
          <Link href="#contact" className="text-white hover:text-green-500">Contact</Link>
        </div>
      </nav>

      {/* Main Content Section */}
      <div id="home" className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-24">
        {/* Left Side: Text and Buttons */}
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-4">Ahmed Bicir</h1>
          <h2 className="text-3xl text-green-400 font-semibold mb-6">I'm a Developer</h2>
          <p className="text-lg mb-8">
            I specialize in creating modern and responsive web applications using React.js/NextJs, ensuring seamless integration with Django on the backend. I am skilled in writing clean, secure, and scalable code with TypeScript, and have experience developing API integrations to enhance the functionality of applications.
          </p>
          {/* Download CV Button */}
          <a
            href="/RESUME.pdf"  // Path to the CV file in the public folder
            download
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500">
            <Image
              src="/images/bicir.jpeg"  // Replace with your image path
              width={500}  // Replace with your image's width
              height={500} // Replace with your image's height
              alt="Bicir"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
