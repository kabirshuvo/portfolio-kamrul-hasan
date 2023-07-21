import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6  text-gray-400">
        <p>
          I am an accomplished and seasoned graphic designer with 8 years of
          expertise in the industry, boasting a successful track record of
          collaborating with international clients and achieving Level-3 seller
          status on Fiverr, as well as a stellar 5-star rating on Freelancer. My
          creative prowess spans a wide range of design styles and projects,
          making me adept at delivering visually captivating solutions tailored
          to each client's unique needs. With a passion for innovation and an
          unwavering commitment to excellence, I am now eager to channel my
          skills and dedication into a single company, bringing my creativity
          and expertise to contribute to their success.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in graphic designe. I am excited to continue
          growing as a designer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
