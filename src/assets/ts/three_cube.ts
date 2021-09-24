import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function cube_init(element: Element){
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x555555 );

    const camera = new THREE.PerspectiveCamera( 70, 600 / 400, 0.1, 100 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 600, 400 );
    camera.position.x = 2;
    camera.position.y = 0.5;
    camera.position.z = 2;
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 2;
    controls.maxDistance = 4.5;
    controls.zoomSpeed = 0.8;

    const dirLight1 = new THREE.DirectionalLight( 0xffddcc, 2 );
    dirLight1.position.set( 1, 0.75, 0.5 );
    scene.add( dirLight1 );

    const dirLight2 = new THREE.DirectionalLight( 0xccccff, 2 );
    dirLight2.position.set( - 1, 0.75, - 0.5 );
    scene.add( dirLight2 );

    const dirLight3 = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight3.position.set( 0, 0.8, 10 );
    scene.add( dirLight3 );

    let model :THREE.Group;
    const modelUrl = new URL('../cube.glb', import.meta.url);
    loader.load( modelUrl.href, function ( gltf ) {
        model = gltf.scene;
        model.position.set( 0, 0, 0 );
        model.scale.set( 1, 1, 1 );
        scene.add( model );
    }, undefined, function ( error ) {
        console.error( error );
    } );
            
    element.appendChild( renderer.domElement );
    const animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };
    animate();
    
}