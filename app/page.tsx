import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import NavBar from "@/components/Nav";

export default function Home() {
  return (
    <main className="w-full bg-blue-900 p-4 ">
   <div className="max-w-screen-xl mx-auto">
<NavBar/>
   <Navbar/>
    <Banner/>
    <Aboutme/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
    </main>
  )
}
