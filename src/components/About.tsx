import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionTitles from "./SectionTitles";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      id="about"
      className="px-10 my-24 about mbl:my-10"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-left">
        <div className="flex items-center justify-center m-5 mb-16">
          <SectionTitles title=" < About />" />
        </div>
        <p className="text-xl w-[80%] mbl:w-fit mbl:text-left mbl:text-lg">
          Olá, seja muito bem-vindo ao meu portfólio!
          <br />
          Me chamo <span className="font-semibold">Giovanni Lopes</span> e
          atualmente tenho 18 anos.
          <br />
          <br />
          <span>
            Minha essência é marcada pela curiosidade e pela busca constante por
            desafios que impulsionem meu crescimento. Me caracterizo como alguém
            talentoso e dedicado,destacando-me especialmente em habilidades como{" "}
            <span className="font-semibold text-red-500">problem solving</span>{" "}
            e
            <span className="font-semibold text-red-500"> web development</span>
            .
            <br />
            <br />
            Comprometido com meu desenvolvimento contínuo, estou empenhado em me
            aprimorar constantemente na minha área de interesse. Acredito que
            cada aprendizado e experiência contribuem para meu aprimoramento,
            fortalecendo meu potencial para agregar valor a qualquer empresa ou
            projeto com o qual eu me envolva.
            <br />
            <br />
            Estou entusiasmado com as oportunidades que o futuro reserva e
            confiante de que posso contribuir de maneira significativa para os
            desafios que surgirem no meu caminho. Obrigado por explorar meu
            portfólio e compartilhar essa jornada comigo.
          </span>
        </p>
      </div>
    </motion.section>
  );
}
