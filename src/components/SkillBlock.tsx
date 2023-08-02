import { IconBaseProps } from "react-icons";
import Icon from "phosphor-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SkillBox {
  title: string;
  text?: string;
  icon: IconBaseProps | Icon.IconProps;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function SkillBlock(props: SkillBox) {
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
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="group"
    >
      <div className="flex flex-row items-center content-center self-center justify-center gap-3 bg-gray-400 border border-red-500 p-3 w-80 h-24 rounded-lg cursor-help transition-all hover:brightness-90 group-hover:bg-red-500">
        <div className="w-14 h-14 p-3 bg-gray-400 rounded-2xl">
          <>{props.icon}</>
        </div>
        <div>
          <h3 className="text-lg font-semibold group-hover:font-extrabold group-hover:text-gray-400">{props.title}</h3>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
      </div>
    </motion.div>
  );
}
