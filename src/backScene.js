import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );  

function initialzeScene(){

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // const light = new THREE.AmbientLight(0x00ff00, 100)
    // light.position.z = 5;
    // scene.add(light);

    camera.position.z = 5;
    renderer.render(scene, camera);

    baseAnimate();
}

function baseAnimate(){
    requestAnimationFrame(baseAnimate);

    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;

    renderer.render(scene,camera);

}
export default initialzeScene; 