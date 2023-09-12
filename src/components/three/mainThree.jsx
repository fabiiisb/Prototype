import ThreeScene from "./threeScene";
import Sphere from "./sphere";
import { OrbitControls } from "@react-three/drei";

export default function ThreeSphere() {
  return (
    <ThreeScene>
      <Sphere rotation={[6, 4, 3]} color={"#ec5572"} scale={2.03} />
      <ambientLight />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
  
      />
    </ThreeScene>
  );
}
