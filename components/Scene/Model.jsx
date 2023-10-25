"use client"

import React, {useRef} from "react";
import {Float, useGLTF} from "@react-three/drei";

export function Model(props) {
    const {nodes, materials} = useGLTF("/poly2.glb");
    return (
        <Float>
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_0.geometry}
                    material={materials.Material_0}
                    rotation={[Math.PI, -0.027, Math.PI]}
                />
            </group>
        </Float>

    );
}

useGLTF.preload("/poly2.glb");

export default Model;