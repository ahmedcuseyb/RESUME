import Footer from "./Footer";
import HomeSection from "./HomeSection";
import About from "./About";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Skivlls from "./Skillsets.tsx";
import Work from "./Work";
import Anigame from "./Anigame";
import Tech from "./Tech";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        {/* <HomeSection /> */}
        <About />
        <Skills />
        <Tech />

        
        {/* <Experience /> */}
        {/* <Skills />
        <Work /> */}
        {/* <Anigame /> */}
        {/* <Portfolio /> */}
        {/* <Blogs /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
