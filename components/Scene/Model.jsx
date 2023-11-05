"use client"

import {Float, useGLTF} from "@react-three/drei";
import {useTransform} from "framer-motion";
import {motion} from "framer-motion-3d";
import {useEffect} from "react";

export default function Model({mouse}) {
    const {nodes, materials} = useGLTF("/poly2.glb");


    return (
        // <Float>
        <group>
            <Mesh node={nodes.Mesh_0} mouse={mouse}/>
        </group>
        // </Float>

    );
}

function Mesh({node, mouse}) {
    const {castShadow, receiveShadow, geometry, material, position, rotation, scale} = node
    const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - 1, rotation.x + 1])
    const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - 1, rotation.y + 1])

    return (
        <motion.mesh
            mouse={mouse}
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            geometry={geometry}
            material={material}
            scale={scale}
            rotation-y={rotationX}
            rotation-x={rotationY}
            position={[0, -0.1, 0]}
        />
    )
}

useGLTF.preload("/poly2.glb");
