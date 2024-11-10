import ThreeScene from './threeScene'
import Sphere from './sphere'
import { OrbitControls } from '@react-three/drei'

export default function ThreeSphere () {
  return (
    <div className='three-scene'>
      <ThreeScene>
        <Sphere color={'#ec5572'} scale={2.03} />
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />
      </ThreeScene>
    </div>
  )
}
