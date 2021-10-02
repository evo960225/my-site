import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default function dount_init(element: Element){
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x999999 );

    const camera = new THREE.PerspectiveCamera( 70, 600 / 400, 0.1, 100 );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 600, 400 );
    camera.position.x = 0.2;
    camera.position.y = 0.2;
    camera.position.z = 0.2;
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.minDistance = 0.25;
    controls.maxDistance = 0.4;
    controls.zoomSpeed = 0.8;

    const dirLight1 = new THREE.DirectionalLight( 0xffffee, 1 );
    dirLight1.position.set( 1, 1, 0.5 );
    scene.add( dirLight1 );

    const dirLight2 = new THREE.DirectionalLight( 0xffffee, 1 );
    dirLight2.position.set( - 1, 1, - 0.5 );
    scene.add( dirLight2 );


    let model :THREE.Group;

    const modelUrl = new URL('../cup.glb', import.meta.url);
    loader.load( modelUrl.href, function ( gltf ) {
        model = gltf.scene;
        model.position.set( 0, 0, 0 );
        model.scale.set( 2, 2, 2 );
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