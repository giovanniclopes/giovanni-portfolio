import SectionTitles from "./SectionTitles";
import SkillBox from "./SkillBlock";

import CssIcon from "../assets/icons/CssIcon";
import HtmlIcon from "../assets/icons/htmlIcon";
import JsIcon from "../assets/icons/JsIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import TailwindIcon from "../assets/icons/TailwindIcon";
import WpIcon from "../assets/icons/wpIcon";
import TsIcon from "../assets/icons/TsIcon";
import FigmaIcon from "../assets/icons/FigmaIcon";
import { Monitor } from "phosphor-react";
import PythonIcon from "../assets/icons/PythonIcon";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills flex flex-col items-center justify-center gap-5 mt-8"
    >
      <div className="my-5 mb-12">
        <SectionTitles title="< Skills />" />
      </div>
      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox title={"HTML"} icon={<HtmlIcon />} />
        <SkillBox title={"CSS"} icon={<CssIcon />} />
        <SkillBox title={"JavaScript"} icon={<JsIcon />} />
      </div>
      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox title={"TypeScript"} icon={<TsIcon />} />
        <SkillBox title={"React"} icon={<ReactIcon />} />
        <SkillBox title={"TailwindCSS"} icon={<TailwindIcon />} />
      </div>
      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox title={"WordPress"} icon={<WpIcon />} />
        <SkillBox title={"Figma"} icon={<FigmaIcon />} />
        <SkillBox title={"UI/UX"} icon={<Monitor className="w-8 h-8 text-red-500" />} />
      </div>
      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox title={"Python"} icon={<PythonIcon />} />
      </div>
    </section>
  );
}
