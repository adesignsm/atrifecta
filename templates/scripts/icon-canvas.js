var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

document.getElementById("header-icon-container").appendChild(renderer.domElement);

window.addEventListener("resize", function() {

	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize(width, height);

	camera.aspect = width / height;
	camera.UpdateProjectionMatrix();
});

camera.position.z = 10;

var iconGeo = new THREE.PlaneGeometry(3, 3, 1);
var iconMaterial = new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("media/logo.png"), side: THREE.DoubleSide, transparent: true});
var icon = new THREE.Mesh(iconGeo, iconMaterial);
scene.add(icon);

var update = function() {

	icon.position.y = 6;
	icon.rotation.x = 0.6;
	icon.rotation.y += 0.02;
};

var render = function() {

	renderer.render(scene, camera);
};

var animate = function() {

	requestAnimationFrame(animate);

	update();
	render();
};

animate();