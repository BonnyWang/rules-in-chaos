import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x707070);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha: true});

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );  

const light0 = new THREE.AmbientLight(0xffffff, 0.75);
const light1 = new THREE.PointLight(0xff0000, 2,10);
scene.add(light0);
scene.add(light1);


light1.castShadow = true;




// Load Models
let cutie;
const loader = new GLTFLoader();
loader.load( '/cute.glb', function ( gltf ) {

    cutie = gltf.scene;
    scene.add( cutie );


}, undefined, function ( error ) {

	console.error( error );

} );

// Load Asteroids
let asteroids = [];
const asteroids_Name = ['/asteroid0.glb','/asteroid1.glb','/fakeAsteroid.glb']
let loaders = [];

for (let i = 0; i < asteroids_Name.length; i++){
    loaders[i] = new GLTFLoader();
    loader.load( asteroids_Name[i], function ( gltf ) {

        asteroids[i] = gltf.scene;
        scene.add( asteroids[i]);
        
        asteroids[i].position.z = (i+1)*3-6;
        asteroids[i].position.y = -0.1;
        

        asteroids[i].position.x = (i+1)*3-6 ;
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
}


// Load The RealAsteroid on the side
let reals = [];
const real_Loader = new GLTFLoader();
real_Loader.load( '/realAsteroid.glb', function ( gltf ) {

    reals[0] = gltf.scene;
    reals[1] = gltf.scene.clone();
    scene.add( reals[0]);
    scene.add( reals[1]);

    reals[0].position.x = -5;
    reals[1].position.x = 5;


}, undefined, function ( error ) {

	console.error( error );

} );





function initialzeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);
    camera.position.z = 5;

    // const gui = new GUI();
    // const lightControl = gui.addFolder('light0')
    // lightControl.add(light0.position, 'x', -10,10);
    // lightControl.add(light0.position, 'y', -10,10);
    // lightControl.add(light0.position, 'z', -10,10);
    // lightControl.open();

    baseAnimate();
}


// Variables for animation
let direction = [-1,1,-1];

function baseAnimate(){
    requestAnimationFrame(baseAnimate);

    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;

    // cutie.rotation.y +=0.01;

    // Asteroids animation

    

    for(let i = 0; i < asteroids.length; i++){
        if(Math.abs(asteroids[i].position.z) > 4 ){
            direction[i] = direction[i] *-1;
        }
        asteroids[i].position.z +=0.01*direction[i];
        asteroids[i].position.y = Math.cos(asteroids[i].position.z*3);
        asteroids[i].rotation.x += 0.1;
    }

    reals[0].rotation.x += 0.1;
    reals[0].rotation.z += 0.1;
    reals[1].rotation.x -= 0.1;
    reals[1].rotation.z -= 0.1;
    
    renderer.render(scene,camera);

}
export default initialzeScene; 