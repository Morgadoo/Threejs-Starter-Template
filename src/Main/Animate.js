import * as THREE from 'three'

export default class Animate{
    
    constructor(scene, camera, renderer, controls){

        const clock = new THREE.Clock()
        let lastElapsedTime = 0

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - lastElapsedTime
            lastElapsedTime = elapsedTime

            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

    }
}