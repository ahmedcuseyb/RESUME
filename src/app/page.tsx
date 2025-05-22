import Footer from "./Footer";
import HomeSection from "./HomeSection";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";


import Tech from "./Tech";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <About />
        <Skills />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
