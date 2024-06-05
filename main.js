import * as THREE from './three.js';

//Crea una camara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Crea un render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//Crea el elemento html para visualizar la escena 3D
document.body.appendChild( renderer.domElement );

//Dibujar un cuboide
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//Crea un material para la forma geometrica
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

//Dibuja la forma geometrica con el material
const cube = new THREE.Mesh( geometry, material );

//Le agrega la escena al cubo
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}