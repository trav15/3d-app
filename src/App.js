import React from 'react';
import './App.css';
import Sphere from './components/Sphere';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div className="App">
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-2,10,2]} intensity={1}/>
      <Canvas className='canvas1'>
        <Sphere/>
      </Canvas>
    </div>
  );
}
    
export default App;