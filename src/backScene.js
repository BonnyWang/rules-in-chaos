import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );  

const light0 = new THREE.PointLight(0xff0000, 10,100);
scene.add(light0);




// Load Models
let cutie;
const loader = new GLTFLoader();
loader.load( '/cute.glb', function ( gltf ) {

	scene.add( gltf.scene );
    
    cutie = gltf.scene;


}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 5;


function initialzeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);

    // const gui = new GUI();
    // const lightControl = gui.addFolder('light0')
    // lightControl.add(light0.position, 'x', -10,10);
    // lightControl.add(light0.position, 'y', -10,10);
    // lightControl.add(light0.position, 'z', -10,10);
    // lightControl.open();

    baseAnimate();
}

function baseAnimate(){
    requestAnimationFrame(baseAnimate);

    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;

    cutie.rotation.y +=0.01;
    
    renderer.render(scene,camera);

}
export default initialzeScene; 