import { render } from '@vue/runtime-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import mapp from './main';

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
function loadCutie(){
    const loader = new GLTFLoader();
    loader.load( '/cute.glb', function ( gltf ) {

        cutie = gltf.scene;
        scene.add( cutie );

        loadAsteroids();
        loadReal();


    }, undefined, function ( error ) {

        console.error( error );

    } );
}



// Load Asteroids
let asteroids = [];
const asteroids_Name = ['/asteroid0.glb','/asteroid1.glb','/fakeAsteroid.glb']

function loadAsteroids(){
    
    let loaders = [];

    for (let i = 0; i < asteroids_Name.length; i++){
        loaders[i] = new GLTFLoader();
        loaders[i].load( asteroids_Name[i], function ( gltf ) {

            asteroids[i] = gltf.scene;
            scene.add( asteroids[i]);
            
            asteroids[i].position.z = (i+1)*3-6;
            asteroids[i].position.y = -0.1;
            

            asteroids[i].position.x = (i+1)*3-6 ;

            
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );
    }

}


// Load The RealAsteroid on the side
let reals = [];

function loadReal(){
    const real_Loader = new GLTFLoader();
    real_Loader.load( '/realAsteroid.glb', function ( gltf ) {

        reals[0] = gltf.scene;
        reals[1] = gltf.scene.clone();
        scene.add( reals[0]);
        scene.add( reals[1]);

        reals[0].position.x = -5;
        reals[1].position.x = 5;
        
        baseAnimate();
        loadSorlarSail();


    }, undefined, function ( error ) {

        console.error( error );

    } );

}


let solarSail;
function loadSorlarSail(){
    const ssLoader = new GLTFLoader();
    ssLoader.load( '/solarSail.glb', function ( gltf ) {
        solarSail = gltf.scene;

    }, undefined, function ( error ) {

        console.error( error );

    } );
}




function initializeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);
    camera.position.z = 5;

    loadCutie();
}


// Variables for animation
let direction = [-1,1,-1];
let baseAnimeID;

function baseAnimate(){
    baseAnimeID = requestAnimationFrame(baseAnimate);

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

    if(reals[0].position.x > 0){
        cancelAnimationFrame(baseAnimeID);
        cancelAnimationFrame(feedDetectID);
        transAnimation();
        mapp.hideBanner();
        // console.log(App.showFeed);
    }


}

let transAnimeID;
function transAnimation(){
    transAnimeID = requestAnimationFrame(transAnimation);

    cutie.rotation.y +=0.02;
    cutie.position.x -=0.3;
    cutie.position.z -=0.3;

    console.log(cutie.rotation.x);

    if(cutie.rotation.y >= 0.5){
        cancelAnimationFrame(transAnimeID);
        for (let index = 0; index < asteroids.length; index++) {
            scene.remove(asteroids[index]);        
        }
    
        for (let index = 0; index < reals.length; index++) {
            scene.remove(reals[index]);        
        }

        scene.add(solarSail);
        solarSail.scale.x = 2;
        solarSail.scale.y = 2;
        solarSail.scale.z = 2;

        solarSail.rotation.x = 20;
        console.log(solarSail.rotation.y);

        solarSail.position.x = 2.5;
        mapp.fshowButton();
        solarAnimation();
    }

    

    renderer.render(scene, camera);
}

let solarAnimID;
function solarAnimation(){
    solarAnimID = requestAnimationFrame(solarAnimation);
    // solarSail.rotation.y += 0.01;
    solarSail.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function solarTumble() {
    cancelAnimationFrame(solarAnimID);
    solarSail.rotation.y = 0;
    renderer.render(scene, camera);
}

// To controll the user inputs

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}


let feedDetectID;

function feedDetect() {

    feedDetectID = requestAnimationFrame(feedDetect);

	raycaster.setFromCamera( mouse, camera );

    // console.log(mouse)

	const intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {

        console.log()

        if(intersects[i].object.parent == reals[0] || intersects[i].object.parent == reals[1] ){
            intersects[ i ].object.material.color.set( 0x333333 );

            var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
            vector.unproject( camera );
            var dir = vector.sub( camera.position ).normalize();
            var distance = - camera.position.z / dir.z;
            var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );
            
            reals[0].position.x = pos.x;
            reals[1].position.x = -pos.x;
        }

	}

	renderer.render( scene, camera );

}


window.addEventListener( 'mousemove', onMouseMove, false );

window.requestAnimationFrame(feedDetect);



export default initializeScene; 
export {solarTumble};