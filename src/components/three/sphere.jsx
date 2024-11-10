import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere = ({ color, scale }) => {
  const sphereRef = useRef()

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.000
      sphereRef.current.rotation.z += 0.001
    }
  })

  return (
    <mesh ref={sphereRef} scale={scale}>
      <torusGeometry />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

export default Sphere
