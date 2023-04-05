import * as THREE from 'three'
export default class Camera{

    constructor(width, height, scene){
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 10)
        this.camera.position.set(0, 0.5, 1)
        scene.add(this.camera)
        return this.camera
    }
}