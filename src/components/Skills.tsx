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
import PowerBIIcon from "../assets/icons/PowerBIIcon";

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
        <SkillBox
          title={"HTML"}
          icon={<HtmlIcon />}
          link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        />
        <SkillBox
          title={"CSS"}
          icon={<CssIcon />}
          link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        />
        <SkillBox
          title={"JavaScript"}
          icon={<JsIcon />}
          link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        />
      </div>

      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox
          title={"TypeScript"}
          icon={<TsIcon />}
          link="https://www.typescriptlang.org/pt/docs/"
        />
        <SkillBox
          title={"React"}
          icon={<ReactIcon />}
          link="https://pt-br.legacy.reactjs.org/"
        />
        <SkillBox
          title={"TailwindCSS"}
          icon={<TailwindIcon />}
          link="https://v2.tailwindcss.com/"
        />
      </div>

      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox
          title={"Python"}
          icon={<PythonIcon />}
          link="https://www.python.org/"
        />
        <SkillBox
          title={"Figma"}
          icon={<FigmaIcon />}
          link="https://figma.com"
        />
        <SkillBox
          title={"UI/UX"}
          icon={<Monitor className="w-8 h-8 text-red-500" />}
          link=" "
        />
      </div>

      <div className="flex flex-row gap-5 mbl:flex-col">
        <SkillBox
          title={"WordPress"}
          icon={<WpIcon />}
          link="https://wordpress.org/"
        />
        <SkillBox
          title={"Power BI"}
          icon={<PowerBIIcon />}
          link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi-vJ6W_YaHAxXPpZUCHTmxAeEQFnoECBwQAQ&url=https%3A%2F%2Fwww.microsoft.com%2Fpt-br%2Fpower-platform%2Fproducts%2Fpower-bi&usg=AOvVaw0W759u98QX126Vrklq114l&opi=89978449"
        />
      </div>
    </section>
  );
}
