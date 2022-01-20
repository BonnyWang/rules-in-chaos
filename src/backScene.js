import * as THREE from 'three';
import { Color } from 'three';
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
scene.add(light0);
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
scene.add(particles);

// Add a cube for show loading progress
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshStandardMaterial( {color: 0xff0000});
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );


// Load Control
const modelCount = 4;
let modelLoaded = 0;
let cutieLoadProgress = 0;
let asteroidLoadProgress = 0;
let realLoadProgress = 0;
let fractionLoadProgress = 0;



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
        
        checkProgress();


    }, function( xhr ) {

        const currentProgess = xhr.loaded / xhr.total; 
        cube.scale.x = currentProgess*2;
        cube.scale.z = currentProgess*2;
        cube.scale.y = currentProgess*2;

        cutieLoadProgress = currentProgess*100;
        mapp.loadingProgress = (cutieLoadProgress + asteroidLoadProgress + realLoadProgress + fractionLoadProgress)/4;
		console.log( currentProgess + '% loaded' );

	}, function ( error ) {

        console.error( error );

    } );
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

        
        checkProgress();

    }, function( xhr ) {

        const currentProgess = xhr.loaded / xhr.total; 
        cube.scale.x = currentProgess*2;
        cube.scale.z = currentProgess*2;
        cube.scale.y = currentProgess*2;
       realLoadProgress = currentProgess*100;
        mapp.loadingProgress = (cutieLoadProgress + asteroidLoadProgress + realLoadProgress + fractionLoadProgress)/4;
		console.log( currentProgess + '% loaded' );

	}, function ( error ) {

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


        checkProgress();


    }, function( xhr ) {

        const currentProgess = xhr.loaded / xhr.total; 
        cube.scale.x = currentProgess*2;
        cube.scale.z = currentProgess*2;
        cube.scale.y = currentProgess*2;
        asteroidLoadProgress = currentProgess*100;
        mapp.loadingProgress = (cutieLoadProgress + asteroidLoadProgress + realLoadProgress + fractionLoadProgress)/4;
		console.log( currentProgess + '% loaded' );

	}, function ( error ) {

        console.error( error );

    } );
}

let asteroidFraction;

function loadFraction(){
    const loader = new GLTFLoader();
    loader.load( '/asteroidBonnyFraction.glb', function ( gltf ) {
        asteroidFraction = gltf.scene;
        asteroidFraction.scale.x =0.2;
        asteroidFraction.scale.y =0.2;
        asteroidFraction.scale.z =0.2;

        asteroidFraction.position.y = 2;

        checkProgress();

    }, function( xhr ) {

        const currentProgess = xhr.loaded / xhr.total; 
        cube.scale.x = currentProgess*2;
        cube.scale.z = currentProgess*2;
        cube.scale.y = currentProgess*2;
        fractionLoadProgress = currentProgess*100;
        mapp.loadingProgress = (cutieLoadProgress + asteroidLoadProgress + realLoadProgress + fractionLoadProgress)/4;
		console.log(  currentProgess + '% loaded' );

	}, function ( error ) {

        console.error( error );

    } );
}

function checkProgress(){
    
    modelLoaded++;
    
    if(modelLoaded == modelCount){
        console.log("All models loaded");
        cancelAnimationFrame(animeLoadID);
        scene.remove(cube);

        mapp.loaded = true;

        entranceAnimation();
        animeBonnyAsteroid();
        baseAnimation();
    }
}


// Opening animation for rising asteroid
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



const mouse = new THREE.Vector2();

window.addEventListener( 'mousemove', onMouseMove);

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth )-0.5;
	mouse.y = ( event.clientY / window.innerHeight )-0.5;
    
}


let scrollY = 0;
let changedSection = false;

// Make sure to top when first enter 

window.addEventListener('scroll', () =>{
    scrollY = window.scrollY;

    const section = Math.round(scrollY / sizes.height)

    // console.log(scrollY + " " + sizes.height); 

    if(section == 1 && !changedSection){
        changedSection = true;

        mapp.hideEntrance();
        toMain();
    }

})


function particleMove(){
    for (let index = 0; index < particlesCount; index++) {
        const particlePositions = particles.geometry.attributes.position.array;
        // particlePositions[index*3] += 0.01; 
        particlePositions[index*3+2] -= 0.001; 
        particlePositions[index*3] -= 0.005; 
        particles.geometry.attributes.position.needsUpdate = true;

    }
}

let animeLoadID;
function animeLoad(){
    animeLoadID = requestAnimationFrame(animeLoad);

    cube.rotation.y += 0.05;
    cube.rotation.z += 0.05;

    renderer.render(scene, camera);
}

let animeEntranceID;
function entranceAnimation(){
    animeEntranceID = requestAnimationFrame(entranceAnimation);


    reals[0].rotation.y += 0.2;
    reals[0].rotation.z += 0.2;
    reals[1].rotation.y += 0.2;
    reals[1].rotation.z += 0.2;

}

function baseAnimation(){
    requestAnimationFrame(baseAnimation);

    asteroidBonny.rotation.y += 0.01;
    // Create parallax effect

    
    const parallax = {};
    parallax.x = mouse.x;
    parallax.y = - mouse.y;

    const damping = 0.02;
    camera.position.x += (parallax.x - camera.position.x)*damping;
    camera.position.y += (parallax.y - camera.position.y)*damping;

    cameraGroup.position.y = - scrollY*3 / sizes.height;

    //particleMove();

    renderer.render(scene,camera);

}


let mainTransID;
let expand = 1;
let expandSpeed = 0.05;
let CutieMove = 1;
function mainTransition(){
    mainTransID= requestAnimationFrame(mainTransition);

    expandSpeed -= 0.0005;
    asteroidFraction.scale.x +=expandSpeed*expand;
    asteroidFraction.scale.y +=expandSpeed*expand;
    asteroidFraction.scale.z +=expandSpeed*expand;

    cutie.position.x -= 0.02*CutieMove;
    cutie.position.y -= 0.01*CutieMove;
    cutie.rotation.y += 0.005*CutieMove;



    particleMove();
    
    if(cutie.position.x < -5){
        CutieMove = 0;
    }

    if(expand == 1 && asteroidFraction.scale.x > 2){
        expand = -1;
        camera.rotation.x += 0.1;
    }

    if(expand == -1){
        asteroidFraction.position.x -=0.15;
        if(asteroidFraction.scale.x > 500){
            fractionBaseAnim();
            
            cancelAnimationFrame(mainTransID);
        }
    }


}

function fractionBaseAnim(){
    requestAnimationFrame(fractionBaseAnim);
    asteroidFraction.rotation.y += 0.0001;
}

function toMain(){
    scene.remove(asteroidBonny);
    scene.remove(reals[0]);
    scene.remove(reals[1]);
    scene.add(asteroidFraction);

    mainTransition();
}

function initializeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.render(scene, camera);
    camera.position.z = 5;

    animeLoad();

    loadAsteroidBonny();
    loadReal();
    loadCutie();
    loadFraction();
}



export default initializeScene; 
export {toMain};