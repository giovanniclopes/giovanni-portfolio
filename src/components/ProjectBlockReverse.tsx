import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectBlockReverse {
  linkURL: string;
  imgURL: string;
  imgALT?: string;
  title: string;
  description: string;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function ProjectBlockReverse(props: ProjectBlockReverse) {
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
    <div>
      <Link to={props.linkURL} target="_blank">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="grid grid-cols-2 items-center justify-center transition-all gap-5 group mbl:flex mbl:flex-col-reverse mbl:gap-8"
        >
          <div className="flex flex-col gap-10 items-start justify-center px-5">
            <div className="flex justify-end items-end flex-col gap-3 mbl:items-center">
              <h3 className="text-3xl font-bold">{props.title}</h3>
              <p className="text-lg text-end w-full mbl:text-center">"{props.description}"</p>
            </div>
            <div className="flex items-end justify-end w-full mbl:items-center mbl:justify-center">
              <button className="bg-red-500 rounded-md p-4 px-16 transition-all hover:opacity-75">
                Conhecer
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-md transition-all opacity-75"
              src={props.imgURL}
              alt={props.imgALT}
            />
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
