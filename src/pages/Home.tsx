import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandFOrScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, -0.65, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, IslandRotation] =
    adjustIslandFOrScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Suspense fallback={<Loader />}>
        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor={'#000000'} intensity={1} />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            rotation={[0, 20.1, 0]}
            scale={planeScale}
          />
        </Canvas>
      </Suspense>
      <div className='font-medium absolute bottom-28 left-0 right-0 z-10 flex items-center justify-center text-gray-400'>
        Use arrows (← or →) or click & drag to explore.
      </div>
    </section>
  );
};

export default Home;
