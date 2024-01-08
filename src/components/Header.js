import React from "react";
import{motion} from 'framer-motion'

const Header = () => {
  return (
    <motion.div   initial={{ opacity: 0, y: -180 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      ease: "easeInOut",
      duration: 1,
      delay: 0.6,
    }} className="flex justify-around h-[100px] items-center">
      {" "}
      <div className="font-bold">logo</div>
      <div>
        <div className="flex gap-10 font-bold">
          <div>Home</div>
          <div>About</div>
          <div>Case Studies</div>
          <div>Projects</div>
          <div>Offices</div>
        </div>
      </div>
      <div className="font-bold">Let's work together</div>
    </motion.div>
  );
};

export default Header;
