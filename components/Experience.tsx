import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiGoland, SiDribbble, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Gold Huse"
          subTitle="Graphic Designer 2018 - Present"
          icon={<SiGoland />}
        />
        <ExperienceCard
          title="Dribbble"
          subTitle="Graphic Designer 2019 - Present"
          icon={<SiDribbble />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Graphic Designer 2015 - Present"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="Graphic Designer 2015 - Present"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
