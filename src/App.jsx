/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useBox, Physics, usePlane } from "@react-three/cannon";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

const Box = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
  return (
    <mesh position={[0, 2, 0]} ref={ref}>
      <boxGeometry attach={"geometry"} />
      <meshLambertMaterial attach="material" color={"red"} />
    </mesh>
  );
};
const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} attach={"geometry"} />
      <meshLambertMaterial attach="material" color={"green"} />
    </mesh>
  );
};

export default App;
