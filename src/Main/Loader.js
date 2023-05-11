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
        varying vec3 ourPosition;
        void main() {

        // Calculate the position of the vertex
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUvs = uv;
        ourPosition = position;

        }
        `;

        // Define the fragment shader
        var fragmentShader = `
        // Define any custom attributes or uniforms here
        varying vec2 vUvs;
        varying vec3 ourPosition;
        void main() {
            
        // Set the color of the fragment
        gl_FragColor = vec4(vUvs.x/ vUvs.y, 0.0, vUvs.y / vUvs.x, 1.0);
        //gl_FragColor = vec4(ourPosition, 1.0);
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
                let load_bar = Math.round((xhr.loaded / 64495532)*100) + '% Download';
                // console.log( load_bar );
                label.setText(load_bar);
                if ((xhr.loaded / 64495532)*100 == 100){
                    label.setText("Loading ...");
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