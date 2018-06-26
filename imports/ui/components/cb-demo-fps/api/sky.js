export default getSky = () =>{
	var sky = new THREE.Sky();
	sunSphere = new THREE.Mesh(
		new THREE.SphereBufferGeometry( 20000, 16, 8 ),
		new THREE.MeshBasicMaterial( { color: 0xffffff } )
	);
	sunSphere.position.y = - 700000;
	sunSphere.visible = true;
	//this.scene.add( sunSphere );


	var effectController  = {
		turbidity: 10,
		rayleigh: 2,
		mieCoefficient: 0.005,
		mieDirectionalG: 0.8,
		luminance: 1,
		inclination: 0.52, // elevation / inclination
		azimuth: 0.25, // Facing front,
		sun: ! true
	};

	var distance = 400000;
	var uniforms = sky.uniforms;
	uniforms.turbidity.value = effectController.turbidity;
	uniforms.rayleigh.value = effectController.rayleigh;
	uniforms.luminance.value = effectController.luminance;
	uniforms.mieCoefficient.value = effectController.mieCoefficient;
	uniforms.mieDirectionalG.value = effectController.mieDirectionalG;
	var theta = Math.PI * ( effectController.inclination - 0.5 );
	var phi = 2 * Math.PI * ( effectController.azimuth - 0.5 );
	sunSphere.position.x = distance * Math.cos( phi );
	sunSphere.position.y = distance * Math.sin( phi ) * Math.sin( theta );
	sunSphere.position.z = distance * Math.sin( phi ) * Math.cos( theta );
	sunSphere.visible = effectController.sun;
	sky.uniforms.sunPosition.value.copy( sunSphere.position );
	return sky
}