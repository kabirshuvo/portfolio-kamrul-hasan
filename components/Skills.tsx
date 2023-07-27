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
        <SkillsInput title="Photoshop" link="https://react.dev/" />
        <SkillsInput title="Photoshop" link="https://nextjs.org/" />
        <SkillsInput title="Photoshop" link="https://nodejs.org/en" />
        <SkillsInput
          title="Adobe Illustrator"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Illustrator" link="https://expressjs.com/" />
        <SkillsInput title="Illustrator" link="" />
        <SkillsInput title="Illustrator" link="https://www.mongodb.com/" />
        <SkillsInput
          title="Typography"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="Typesetting" link="https://tailwindcss.com/" />
        <SkillsInput title="Sanity.io" link="https://www.sanity.io/" />
        <SkillsInput
          title="Design Principles"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="Design Principles"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        {/* <SkillsInput title="VS Code" link="https://code.visualstudio.com/" /> */}
        <SkillsInput
          title="Atom"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        />
        {/* <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Trello" link="https://trello.com/en" />
        <SkillsInput title="GitKraken" link="https://www.gitkraken.com/" />
        <SkillsInput title="UI Design" link="https://www.figma.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" /> */}
        <SkillsInput
          title="Adobe Illustrator"
          link="https://www.adobe.com/products/illustrator/free-trial-download.html"
        />
        {/* <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
        <SkillsInput title="netlify" link="https://www.netlify.com/" /> */}
      </div>

      <div>
        <SkillCard 
        
        title1="Adobe PhotoShop"
        title2="Adobe Illustrator"
        image1={profileImg.src}
        image2={profileImg.src}
        link1="https://www.google.com"
        link2="www.google.com"
        description1="This is a Adobe photoshop test description and I have write at least 20 to 30 words per description"
        description2="This is a Adobe Illustratro test description and I have write at least 20 to 30 words per description"
        />
      </div>
      <div>

        <div className="flex items-center justify-center py-7">
       <button >
        view more
       </button>
       </div>
      </div>
    </div>
  );
};

export default Skills;