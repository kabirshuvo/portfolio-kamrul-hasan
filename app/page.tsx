import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="w-full bg-blue-900 p-4 ">
   <div className="max-w-screen-xl mx-auto">
   <NavBar/>
    <Banner/>
    <Aboutme/>
    <Footer/>
    <Experience/>
   </div>
    </main>
  )
}
