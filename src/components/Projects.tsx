import ProjectBlock from "./ProjectBlock";
import ProjectBlockReverse from "./ProjectBlockReverse";
import SectionTitles from "./SectionTitles";

import Sonoeconforto from "../assets/projects/project-sonoeconforto.webp";
import EuroFactor from "../assets/projects/project-eurofactor.webp";
import DangerNet from "../assets/projects/project-dangernet.webp";
import IntelliOn from "../assets/projects/project-intellion.webp";
import Nordician2 from "../assets/projects/project-nordician2.webp";
import Vibrance from "../assets/projects/project-vibrance.webp";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects m-12 mt-36"
      aria-labelledby="projects-section-heading"
    >
      <div className="flex items-center justify-center my-5 mb-12">
        <SectionTitles title="Projetos" />
      </div>
      <div className="flex flex-col items-center justify-center gap-36 mt-24">
        <ProjectBlock
          linkURL={"https://www.sonoconforto.com.br/"}
          imgURL={Sonoeconforto}
          title={"Sono&Conforto"}
          imgALT="Projeto Sono&Conforto"
          description={
            "Na Sono&Conforto, dedicamos nossa expertise ao seu bem-estar, proporcionando não apenas conforto, mas também padrões excepcionais de higiene e durabilidade para seu estofado."
          }
        />
        <ProjectBlockReverse
          linkURL={"https://eurofactormercantil.com.br"}
          imgURL={EuroFactor}
          title={"Euro Factor"}
          imgALT="Projeto Euro Factor"
          description={
            "A Euro Factor é uma empresa de factoring fundada em 2013 com um objetivo claro: Ajudar seus clientes a impulsionar o crescimento de suas empresas."
          }
        />

        <ProjectBlock
          linkURL={"https://intellion.vercel.app/"}
          imgURL={IntelliOn}
          title={"IntelliOn"}
          imgALT="Projeto IntelliOn"
          description={
            "O IntelliOn fornece aulas e artigos para ensinar idosos, crianças e pais a navegar na internet com segurança e de maneira correta."
          }
        />

        <ProjectBlockReverse
          linkURL={"https://vibrancee.vercel.app"}
          imgURL={Vibrance}
          title={"Vibrance"}
          imgALT="Projeto Vibrance"
          description={
            "A Vibrance é uma plataforma especializada na venda de livros e quadrinhos."
          }
        />

        <ProjectBlock
          linkURL={"https://nordician2.vercel.app"}
          imgURL={Nordician2}
          title={"Nordician"}
          imgALT="Projeto Nordician2"
          description={
            "Olá viajante, bem vinda(o) ao site Nordician. Aqui forneço diversos artigos para quem busca por informações sobre a cultura nórdica. Contendo artigos sobre o mundo real, e sobre o mundo místico."
          }
        />

        <ProjectBlockReverse
          linkURL={"https://giovanniclopes.github.io/dangernet/"}
          imgURL={DangerNet}
          title={"Danger Net"}
          otherText="[Em manutenção]"
          imgALT="Projeto Danger Net"
          description={
            "Aqui você irá descobrir os mistérios e as verdades pro trás da grande internet."
          }
        />

      </div>

      <div className="flex items-end justify-end text-right my-10 mt-16 mbl:items-center mbl:justify-center">
        <a
          href="https://github.com/giovanniclopes?tab=repositories&type=source"
          target="_blank"
        >
          <button
            aria-label="ver todos os projetos..."
            className="text-xl border-2 border-red-500 p-3 px-9 rounded cursor-pointer transition-all hover:bg-red-500 mbl:mt-16"
          >
            Ver todos os projetos...
          </button>
        </a>
      </div>
    </section>
  );
}
