import * as THREE from 'three'

export default class Helpers{
    
    constructor(scene){

        //Grid Helper
        const gridHelper = new THREE.GridHelper(10, 20)
        scene.add( gridHelper )

        //Axes Helper
        const axesHelper = new THREE.AxesHelper( 5 );
        axesHelper.position.set(0, 0, 0)
        scene.add( axesHelper );
    }
}