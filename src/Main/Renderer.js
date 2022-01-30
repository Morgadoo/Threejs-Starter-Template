import * as THREE from 'three'

export default class Renderer{
    
    constructor(canvas,width,height){
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        })
        this.renderer.setSize(width, height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        return this.renderer
    }
}