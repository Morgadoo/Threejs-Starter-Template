import * as THREE from 'three'

export default class Light{
    
    constructor(scene){
        //PointLight
        this.pointLight = new THREE.PointLight( 0xffffff, 2.0, 50 )
        this.pointLight.position.set(0.5, 0.5, 1)
        scene.add( this.pointLight )

        //Ambiente Light
        this.amb_light = new THREE.AmbientLight(0xffffff, 1.0)
        scene.add(this.amb_light)
    }
}