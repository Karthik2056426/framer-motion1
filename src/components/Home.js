import React from "react";
import { motion } from "framer-motion";


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const Home = () => {
  const text1 = "brand";
  const text2 = "experience";
  const text3 = "studio";
  return (
    <div>
      <div className="flex justify-around items-center">
        <motion.div
          variants={banner}
          initial="initial"
          animate="animate"
          className="flex"
        >
          {text1.split("").map((item) => (
            <motion.div variants={letterAni} className="font-bold text-9xl">
              {item}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}
          className="font-bold"
        >
          We are specialised in setting up<br></br>the foundation of your brand
          and<br></br>setting you up for success.
        </motion.div>
      </div>
      <div className="flex justify-center">
        <motion.div
          variants={banner}
          initial="initial"
          animate="animate"
          className="flex"
        >
          {text2.split("").map((item) => (
            <motion.div variants={letterAni} className="font-bold text-9xl">
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className="bg-slate-300 h-[150px] w-[150px] flex justify-center items-center rounded-full absolute right-[160px] font-bold"
        >
          Scroll<br></br>down
        </motion.div>
        <motion.div
          variants={banner}
          initial="initial"
          animate="animate"
          className="flex"
        >
          {text3.split("").map((item) => (
            <motion.div variants={letterAni} className="font-bold text-9xl">
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
