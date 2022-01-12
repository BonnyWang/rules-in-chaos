import * as THREE from 'three';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import mapp from './main';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x121212);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha: true});

// Wrap the camera to more flexible control
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);

const light0 = new THREE.AmbientLight(0xffffff, 0.75);
const light1 = new THREE.PointLight(0xffffff, 110,10);

light1.position.z = 10;
// scene.add(light0);
scene.add(light1);


light1.castShadow = true;


//Handle Scene resizing
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Add stars at the background
const particlesCount = 200;
const positions = new Float32Array(particlesCount*3);

for(let i = 0; i < particlesCount; i++){
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
}

const particlesMaterial = new THREE.PointsMaterial({
    color: '#212121',
    sizeAttenuation: true,
    size: 0.05
})

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles)

// Load Models
let cutie;
function loadCutie(){
    const loader = new GLTFLoader();
    loader.load( '/cutie.glb', function ( gltf ) {

        cutie = gltf.scene;
        cutie.position.z = -1;
        cutie.scale.x = 0.4;
        cutie.scale.y = 0.4;
        cutie.scale.z = 0.4;
        scene.add( cutie );

        // loadAsteroids();
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

        gltf.scene.scale.x = 0.5;
        gltf.scene.scale.y = 0.5;
        gltf.scene.scale.z = 0.5;
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
let asteroidBonny;
let mixer;
function loadAsteroidBonny(){
    const ssLoader = new GLTFLoader();
    ssLoader.load( '/asteroidBonny.glb', function ( gltf ) {
        asteroidBonny =  gltf.scene;
        asteroidBonny.scale.x = 1;
        asteroidBonny.scale.y = 1;
        asteroidBonny.scale.z = 1;
        scene.add(asteroidBonny);
        asteroidBonny.rotation.y -= 0.8;
        asteroidBonny.rotation.z += 0.1;

        console.log(asteroidBonny);
        

        mixer = new THREE.AnimationMixer( gltf.scene );
        
        gltf.animations.forEach( ( clip ) => {
          
            mixer.clipAction( clip ).play();
          
        } );


        animeBonnyAsteroid();
        baseAnimation();


    }, undefined, function ( error ) {

        console.error( error );

    } );
}

let clock = new THREE.Clock();
let animBonnyID;
function animeBonnyAsteroid(){
    animBonnyID = requestAnimationFrame(animeBonnyAsteroid);

    asteroidBonny.rotation.y += 0.01;
    var delta = clock.getDelta();
    asteroidBonny.position.y += 0.01;
    if(asteroidBonny.position.y > 2){
        cancelAnimationFrame(animBonnyID);
    }
  
    if ( mixer ) mixer.update( delta );
    renderer.render(scene,camera);
}


function initializeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);
    camera.position.z = 5;

    loadAsteroidBonny();
    loadCutie();
}


// Variables for animation
let direction = [-1,1,-1];
let baseAnimeID;

function baseAnimate(){
    baseAnimeID = requestAnimationFrame(baseAnimate);

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


let solarRotatedirection = 1;
function solarTumble() {
    cancelAnimationFrame(solarAnimID);
    requestAnimationFrame(solarTumble);
    solarSail.rotation.y = 0;


    if(Math.abs(solarSail.rotation.x) > 20.05 || Math.abs(solarSail.rotation.x) < 19.95){
        solarRotatedirection = solarRotatedirection*-1;
    }

    solarSail.rotation.x -= 0.01*solarRotatedirection;
    solarSail.rotation.z += 0.01*solarRotatedirection;

    renderer.render(scene, camera);

}

// To controll the user inputs

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener( 'mousemove', onMouseMove);

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth )-0.5;
	mouse.y = ( event.clientY / window.innerHeight )-0.5;
    
}


let scrollY = 0;
window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY

    console.log(scrollY)
})

function particleMove(){
    for (let index = 0; index < particlesCount; index++) {
        console.log(particles.geometry);
        const particlePositions = particles.geometry.attributes.position.array;
        // particlePositions[index*3] += 0.01; 
        particlePositions[index*3+2] += 0.1; 
        particles.geometry.attributes.position.needsUpdate = true;

    }
}

function baseAnimation(){
    requestAnimationFrame(baseAnimation);

    asteroidBonny.rotation.y += 0.01;
    // Create parallax effect

    
    const parallax = {};
    parallax.x = mouse.x;
    parallax.y = - mouse.y;

    const damping = 0.05;
    camera.position.x += (parallax.x - camera.position.x)*damping;
    camera.position.y += (parallax.y - camera.position.y)*damping;

    cameraGroup.position.y = - scrollY / sizes.height;

    particleMove();

    renderer.render(scene,camera);

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


window.requestAnimationFrame(feedDetect);


export default initializeScene; 
export {solarTumble};