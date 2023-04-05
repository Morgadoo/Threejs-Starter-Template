import * as THREE from 'three'

export default class Geometry{
    
    constructor(scene){

        // Red Cube
        this.empty_mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 0.1, 0.1),
            new THREE.MeshBasicMaterial( { transparent: true, opacity: 0.0 } )
        )
        this.empty_mesh.position.set(0, 0.5, 0)
        scene.add(this.empty_mesh)    

    }
}