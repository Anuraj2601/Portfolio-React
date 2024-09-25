import { BiLogoSpringBoot, BiRepeat } from "react-icons/bi"
import { FaDocker } from "react-icons/fa"
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { SiMysql, SiPostman } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-[#38bdf8]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman className="text-7xl text-[#ef5b25]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoSpringBoot className="text-7xl text-[#6db33f]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-[#3c873a]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#00758F]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-[#3fa037]" />
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-[#0db7ed]" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies