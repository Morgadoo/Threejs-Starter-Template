import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export default class Label{
    
    constructor(geometry, text){

        // Red Cube
        
        let labelDiv = document.createElement( 'div' );
        labelDiv.className = 'label';
        labelDiv.textContent = text;
        labelDiv.style.marginTop = '-1em';
        this.cubeLabel = new CSS2DObject( labelDiv );
        this.cubeLabel.position.set( 0, 0, 0 );
        
        geometry.add( this.cubeLabel );
        
    }

    setText(text) {
        this.cubeLabel.element.textContent = text
        // console.log(this.cubeLabel);
      }
}