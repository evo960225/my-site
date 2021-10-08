import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Group } from 'three';

export default function init_scene(element: Element, model: Group){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x999999 );

    const camera = new THREE.PerspectiveCamera( 70, 600 / 400, 0.1, 100 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 600, 400 );
    camera.position.x = 0.5;
    camera.position.y = 0.5;
    camera.position.z = 0.5;
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 0.6;
    controls.maxDistance = 0.8;
    controls.zoomSpeed = 0.8;

    const dirLight1 = new THREE.DirectionalLight( 0xffdddd, 1.2 );
    dirLight1.position.set( 1, 0.75, 0.5 );
    scene.add( dirLight1 );

    const dirLight2 = new THREE.DirectionalLight( 0xffdddd, 1.2 );
    dirLight2.position.set( - 1, 0.75, - 0.5 );
    scene.add( dirLight2 );

    const dirLight3 = new THREE.DirectionalLight( 0xffffff, 1.5 );
    dirLight3.position.set( 0, 0.8, 10 );
    scene.add( dirLight3 );

    // load model
    scene.add( model );

    element.appendChild( renderer.domElement );
    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        if(window.innerWidth < 600 + 10) {
            const w = window.innerWidth;
            const h = window.innerWidth/6*4 -10
            renderer.setSize( w, h );
        } else {
            renderer.setSize( 600, 400 );
        }
    };
    animate();
}