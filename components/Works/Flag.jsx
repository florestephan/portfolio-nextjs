// Flag.jsx
import * as THREE from 'three'
import {useRef, useState} from 'react'
import {useFrame, useLoader} from '@react-three/fiber'
import {MeshDistortMaterial, useCursor} from '@react-three/drei'

function Flag({img}) {
    const ref = useRef()
    const [hovered, hover] = useState(true) // start with false
    const texture = useLoader(THREE.TextureLoader, img)
    useCursor(hovered)
    useFrame(() => {
        ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
    })

    return (
        <mesh
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            scale={[2, 5, 2]}
            position={[0, -0.2, 0]}
        >
            <planeGeometry args={[6, 1.2, 32, 32]}/>
            <MeshDistortMaterial map={texture} ref={ref} speed={2}/>
        </mesh>
    )
}

export default Flag
