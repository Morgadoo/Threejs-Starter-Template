import * as THREE from 'three'
export default class Camera{

    constructor(width, height, scene){
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
        this.camera.position.set(5, 5, 5)
        scene.add(this.camera)
        return this.camera
    }
}