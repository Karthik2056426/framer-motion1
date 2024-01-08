
import Home from "./components/Home";

import Loader from "./components/Loader";
import Header from "./components/Header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsloading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="loader">
          {" "}
          <Loader setIsloading={setIsloading} />{" "}
        </motion.div>
      ) : (
        <div>
          <Header />
          <Home />
          {!isLoading && (
            <div className="flex mt-[-50px] -z-10 justify-center relative">
              <motion.img
                src="./photos/room5.jpg"
                layoutId="main-image-1"
                transition={{ ease: [0.6, 0.01, 0.05, 0.95], duration: 1.6 }}
                alt="img5"
              />
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
