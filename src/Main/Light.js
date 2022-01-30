import * as THREE from 'three'

export default class Light{
    
    constructor(scene){
        //PointLight
        this.pointLight = new THREE.PointLight( 0xffffff, 1, 100 )
        this.pointLight.position.set(3, 5, 2)
        scene.add( this.pointLight )

        //Ambiente Light
        this.amb_light = new THREE.AmbientLight(0xffffff, 0.1)
        scene.add(this.amb_light)
    }
}