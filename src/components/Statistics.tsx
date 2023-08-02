import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Statistics() {
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
      className="px-24 pt-32 pb-5 w-full"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="flex bg-gray-400 rounded-lg p-12">
        <div className="grid grid-cols-4 items-center justify-between w-full mbl:grid-cols-1 mbl:gap-y-12 mbl:text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+4</h4>
            <p>Anos de experiência</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+10</h4>
            <p>Projetos desenvolvidos</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+7</h4>
            <p>Habilidades de desenvolvimento</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4
              className="text-red-500 font-bold text-5xl"
              aria-label="infinity"
            >
              ∞
            </h4>
            <p>Vontade de aprender</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
