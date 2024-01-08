import React from "react";

import { motion } from 'framer-motion';


const containerVariants = {
  show: {
    transition: { staggerChildren: 0.35 },
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    }
  }
}

const mainImage = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    }
  }
}

const Loader = ({setIsloading}) => {
  return (
    <motion.div variants={containerVariants} onAnimationComplete={()=>setIsloading(false)} initial="hidden" animate="show" exit="exit" className="overflow-hidden h-[100vh]">
      <div className="flex justify-around mt-3">
        <motion.div variants={itemVariants}>
          <img src="./photos/room1.jpg" alt="pic" className="h-[240px] w-auto" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <img src="./photos/room2.jpg" alt="pic" className="h-[240px] w-auto" />
        </motion.div>
      </div>

      <div className="flex justify-center mt-[-50px] z-40 ">
        <motion.div variants={mainImage}>
          <motion.img src="./photos/room5.jpg" layoutId="main-image-1" alt="pic" className="h-[240px] w-auto z-50" />
        </motion.div>
      </div>

      <div className=" relative -z-10 flex justify-around mt-[-60px] ">
        <motion.div variants={itemVariants}>
          <img src="./photos/room3.jpg" alt="pic" className="h-[240px] w-auto ml-[-80px]" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <img src="./photos/room4.jpg" alt="pic" className="h-[240px] w-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
