import * as THREE from 'three'

export default class Geometry{
    
    constructor(scene){

        // Red Cube
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshPhysicalMaterial({ color: 0xff0000,reflectivity: 0.8})
        )
        this.cube.position.set(0, 0.5, 0)
        scene.add(this.cube)        
    }
}