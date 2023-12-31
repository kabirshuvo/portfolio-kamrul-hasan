import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";
import SkillCard from "./SkillCard";
import profileImg from "../public/img/profileImg.jpg"


const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Adobe Photoshop"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Adobe Illustrator" link="https://react.dev/" />
        <SkillsInput title="Amazon Seller Center" link="https://nextjs.org/" />
        <SkillsInput title="Amazon Advertising" link="https://nodejs.org/en" />
        <SkillsInput
          title="Print On Demand"
          link="https://www.typescriptlang.org/"
        />
      
        <SkillsInput title="Content Creation" link="https://expressjs.com/" />
        <SkillsInput title="MidJourney" link="" />
       
      </div>

      <div>
        <SkillCard 
        
        title1="Adobe PhotoShop"
        title2="Adobe Illustrator"
        image1={profileImg.src}
        image2={profileImg.src}
        link1="https://www.google.com"
        link2="www.google.com"
        description1="This is a Adobe photoshop test description and I have write at least 20 to 30 words per description. This is a Adobe photoshop test description and I have write at least 20 to 30 words per description. This is a Adobe photoshop test description and I have write at least 20 to 30 words per description."
        description2="This is a Adobe Illustratro test description and I have write at least 20 to 30 words per description. This is a Adobe Illustratro test description and I have write at least 20 to 30 words per description. This is a Adobe Illustratro test description and I have write at least 20 to 30 words per description."
        />
      </div>
      <div>

        <div className="flex items-center justify-center py-1">
       <button className="border border-blue-800 px-6 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black rounded-lg duration-300">
        Display All Skills
       </button>
       </div>
      </div>
    </div>
  );
};

export default Skills;