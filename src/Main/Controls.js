import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Controls{
    
    constructor(camera,canvas,labelRenderer){

        this.controls = new OrbitControls(camera, labelRenderer.domElement)
        this.controls.enableDamping = true
        return this.controls
    }
}