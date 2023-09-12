
const Sphere = ({ color, position, scale }) => {
  return (
    <mesh position={position} scale={scale}>
      <torusGeometry/>
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

export default Sphere;
