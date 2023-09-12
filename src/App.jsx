import { Suspense, lazy } from "react";
import wire1 from "./assets/wire1.svg";
import wire2 from "./assets/wire2.svg";
import wire3 from "./assets/wire3.svg";
const LazyThreeObject = lazy(() => import("./components/three/mainThree"));

function App() {
  let title = "PROTOTYPE";

  return (
    <main>
      <header>
        <h1>{title}</h1>
        <h2>{title}</h2>
      </header>
      <section>
        <Suspense fallback={Loading()}>
          <LazyThreeObject />
        </Suspense>
      </section>
      <menu>
        <div className="menu-slot">
          <img src={wire2} alt="wireframe" />
        </div>
        <div className="menu-slot">
          <img src={wire3} alt="wireframe" />
        </div>
        <div className="menu-slot">
          <img src={wire1} alt="wireframe" />
        </div>
      </menu>
    </main>
  );
}

export default App;

function Loading() {
  return (
    <div class="container">
      <div class="lds-roller">
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
