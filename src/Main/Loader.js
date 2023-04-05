import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Mesh } from 'three'
import Label from './Utils/Label';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';


export default class Loader{
    
    constructor(scene, geometry){

        // Load Bar
        const label = new Label(geometry, 'Loading');

        // Custom Materials

        // Define the vertex shader
        var vertexShader = `
        // Define any custom attributes or uniforms here
        varying vec2 vUvs;
        void main() {
        // Calculate the position of the vertex

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUvs = uv;

        }
        `;

        // Define the fragment shader
        var fragmentShader = `
        // Define any custom attributes or uniforms here
        varying vec2 vUvs;
        void main() {
            
        // Set the color of the fragment
        gl_FragColor = vec4(vUvs.x, 1.0, vUvs.y, 1.0);
        }
        `;

        // Create a new shader material
        const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
        });


        // GLTF Loader

        const gltfLoader = new GLTFLoader();
        
        gltfLoader.load(
            "/glb/pc.glb",
            (gltf) => {


                const pc = gltf.scene.children.find(child => child.name == "pc")
                const glass = gltf.scene.children.find(child => child.name == "glass")

                glass.material = shaderMaterial;


                scene.add( pc );
                scene.add( glass );


            },
            function ( xhr ) {
                let load_bar = Math.round((xhr.loaded / 64495532)*100) + '% loaded';
                // console.log( load_bar );
                label.setText(load_bar);
                if ((xhr.loaded / 64495532)*100 == 100){
                    label.setText("loading ...");
                    setTimeout(myFunction, 2000);
                }
            },
            function ( error ) {
                console.error( error );
            }
        )

        function myFunction() {
            label.setText("Computer");
          }        
    }
}