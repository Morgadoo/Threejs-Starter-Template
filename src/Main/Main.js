import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Animate from './Animate'
import Camera from './Camera'
import Controls from './Controls'
import Geometry from './Geometry'
import Light from './Light'
import Renderer from './Renderer'
import Helpers from './Utils/Helpers'
import Sizes from "./Utils/Sizes"
import Stats from './Utils/Stats'


export default class Main{
    constructor(){
        console.log("Start Main")

    /**
     * Main
     */

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    //Sizes
    this.sizes = new Sizes()
    window.addEventListener('resize', () =>{
        this.sizes.updateSize(this.camera,this.renderer)
    })

    //Camera
    this.camera = new Camera(this.sizes.width,this.sizes.height,scene)

    // Controls
    this.controls = new Controls(this.camera, canvas)

    //Geometry
    this.geometry = new Geometry(scene)

    //Helpers
    this.helpers = new Helpers(scene)

    //Light
    this.light = new Light(scene)
    
    //Renderer
    this.renderer = new Renderer(canvas,this.sizes.width,this.sizes.height)

    //Animate
    this.animate = new Animate(scene, this.camera,this.renderer, this.controls)

    //Stats
    const stats = new Stats()
    }
}