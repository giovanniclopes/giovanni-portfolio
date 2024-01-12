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
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center justify-center m-5">
          <SectionTitles title=" < About />" />
        </div>
        <p className="text-xl w-[80%] mbl:w-fit mbl:text-left">
          Olá, bem vindo ao meu portfólio! Prazer, sou Giovanni Lopes e tenho{" "}
          18 Anos.
          <br />
          Sou uma pessoa curiosa e sempre buscando desafios. Acredito ser uma
          pessoa talentosa e dedicada, com habilidades em{" "}
          <span className="font-semibold text-red-500">problem solving</span> e
          <span className="font-semibold text-red-500">
            {" "}
            pensamento crítico
          </span>
          . Estou empenhado em continuar a aprender e crescer na minha área de
          interesse, e acredito que posso trazer valor para qualquer empresa ou
          projeto em que possa fazer parte. Estou animado com as oportunidades
          que o futuro pode me oferecer.
        </p>
      </div>
    </motion.section>
  );
}
