import React,{useRef} from 'react'
import {useLoader, useFrame} from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../Images/Texture.jpg'
function Sphere() {
  const textureMap= useLoader(TextureLoader, texture);
  return (
    <mesh >
        <sphereBufferGeometry attach='geometry' args={[2,32]}/>
        <meshStandardMaterial map={textureMap}/>
    </mesh>
  )
}
export default Sphere