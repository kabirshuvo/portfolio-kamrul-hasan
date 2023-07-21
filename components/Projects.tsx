import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={amazonClone.src}
          title="Shocks Design"
          link="https://www.google.com/"
        />
        <ProjectCard
          img={reactBD.src}
          title="Logo Design"
          link="https://www.google.com/"
        />
        <ProjectCard
          img={cyberBlog.src}
          title="Graphic Design"
          link="https://www.google.com/"
        />
        <ProjectCard
          img={noorShop.src}
          title="Traffic Design"
          link="https://www.google.com/"
        />
        <ProjectCard
          img={dynamicPortfolio.src}
          title="Website Design"
          link="https://www.google.com/"
        />

        <ProjectCard
          img={dashboard.src}
          title="T-Shirt Design"
          link="https://www.google.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
