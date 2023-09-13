import { Suspense, lazy } from "react";
import wire1 from "./assets/wire1.svg";
import wire2 from "./assets/wire2.svg";
import wire3 from "./assets/wire3.svg";
const LazyThreeObject = lazy(() => import("./components/three/mainThree"));
import { motion } from "framer-motion";

function App() {
  let title = "PROTOTYPE";

  return (
    <main>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <h1>{title}</h1>
        <h2>{title}</h2>
      </motion.header>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Suspense fallback={Loading()}>
          <LazyThreeObject />
        </Suspense>
      </motion.section>
      <motion.menu
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="menu-slot">
          <img src={wire2} alt="wireframe" />
        </div>
        <div className="menu-slot">
          <img src={wire3} alt="wireframe" />
        </div>
        <div className="menu-slot">
          <img src={wire1} alt="wireframe" />
        </div>
      </motion.menu>
    </main>
  );
}

export default App;

function Loading() {
  return (
    <div className="container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
