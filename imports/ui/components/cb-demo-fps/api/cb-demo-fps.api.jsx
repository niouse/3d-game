
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import streamer from "/imports/api/streamer.js"

import getSky from "./sky.js"
import getLights from "./worldLights.js"
import loadTextures from "./load-textures.js"
import loadMaterials from "./load-materials.js"
import loadWorld from "./load-world.js"
import loadConceptions from "./load-conceptions.js"



export default function CbDemoFps_Api(_optional) {
    return (WrappedComponent) => {
        class $CbDemoFps_Api extends Component {
            constructor(props) {
				super(props);
				this.state = {
					add : true,
					mode : 'add',
					modes : ['add', 'remove']
				}

				this.container;
				this.stats;
				this.camera;
				this.mirrorCamera;
				this.controls;
				this.scene
				this.renderer;
				this.delta = 0.016
				this.cube;
				this.mouse;
				this.raycasterX;
				this.raycasterY;
				this.raycasterZ;
				this.cubeGeo;
				this.cubeMaterial;
				this.objects = [];
				this.lights = []
				this.fpsLightOn = false
				this.animation;
				this.blocker;
				this.instructions;
				this.controlsEnabled = false;
				this.moveForward = false;
				this.moveBackward = false;
				this.moveLeft = false;
				this.moveRight = false;
				this.moveSpeedLR = 1;
				this.moveSpeedFB = 1;
				this.rotateRight = false;
				this.rotateLeft = false;
				this.rotateUp = false;
				this.rotateBottom = false;
				this.canJump = false;
				this.prevTime = performance.now();
				this.velocity = new THREE.Vector3();
				this.rotation = new THREE.Vector3();
				this.rotSpeedH = 0;
				this.rotSpeedV = 0;
				this.onKeyDown;
				this.onKeyUp;
				this.mixer;
				this.clock = new THREE.Clock();
				this.sky;
                this.firstTime=true
				this.inclination=0.52
				this.azimuth=0.25
				this.video1
				this.video2
				this.video3
				
				this.ambientLight = new THREE.AmbientLight( 0xffffff );
				this.fpsLight 
				this.lightHelper
				this.verticalMirror
				
				this.jsonLoader = new THREE.JSONLoader();
				this.Tloader = new THREE.TextureLoader();
				this.textLoader = new THREE.FontLoader();
				this.pitchObject = new THREE.Object3D();
				this.yawObject = new THREE.Object3D();
				this.fpsTarget = new THREE.Object3D();
				
				this.animate=this.animate.bind(this)
				this.onKeyDown=this.onKeyDown.bind(this)
				this.onKeyUp=this.onKeyUp.bind(this)
				this.onWindowResize=this.onWindowResize.bind(this)
				this.renderThree=this.renderThree.bind(this)
				this.turnLight=this.turnLight.bind(this)
				this.turnTv=this.turnTv.bind(this)
				
				this.gamepadControl = this.gamepadControl.bind(this)
				this.loadObjects = this.loadObjects.bind(this)
				this.effect
				//TEXTURES & MATERIALS
				let self=this
				loadTextures(self)
				loadMaterials(self)
				//loadWorld=loadWorld.bind(this)	
			}
			
            componentDidMount() {	
				
				
				if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
				this.initMouseTracker()
				this.init();
				this.renderThree();
				this.animate()
				this.listenRemote()
			}
			
            componentWillReceiveProps(newProps) {
				
			}
			
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {
				this.renderThree();
				this.animate()
			}
			
            componentWillUnmount() {
				
			}
			
			listenRemote(){
				streamer.on('turnLight', (msg)=>{
					this.turnLight("turningLight1")
					this.turnLight("turningLight2")
				})
				streamer.on('turnFpsLight', (msg)=>{
					this.turnFpsLight()
				})
				streamer.on('changeFpsLightAngle', (value)=>{
					this.changeFpsLightAngle(value)
				})
				streamer.on('changeSky', (n)=>{
                    if(this.firstTime) this.scene.add( this.sky.mesh )
                    this.firstTime=false
                    
					this.changeSky(n)
				})
				streamer.on('showText', (text)=>{
					this.showText(text)
				})
				streamer.on('addObject', (opt)=>{
					this.addObject(opt[0], opt[1], opt[2])
				})
				streamer.on('turnTv', (n)=>{
					console.log(n)
					this.turnTv(n)
				})
			}
			
			init() {
				
				// GET CONTAINER
				this.container = document.getElementById('cb-demo-fps-container')
				this.clock.start();
				this.stats = new Stats();
				this.container.appendChild( this.stats.dom );
				
				// SET CAMERA
				this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000000 );
				//this.camera.position.set( 0, 5, 120 );
				//this.camera.lookAt( new THREE.Vector3() );
				
				// RAYCASTER
				this.raycasterY = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
				
				// SCENE
				this.scene = new THREE.Scene();		
				
				//FOG
				//this.scene.fog = new THREE.FogExp2( 0xff0000, 0.0025 )
				
				// CONTROLS
				this.controls = new THREE.PointerLockControls( this.camera );				
				this.scene.add( this.controls.getObject() );
				this.controls.getObject().position.z=100
				this.gamepadControl()			
			
				
				// LIGHTS
				this.ambientLight.intensity=0
				this.scene.add(this.ambientLight)
				
				
				this.fpsLight = new THREE.SpotLight(0xffffff, 1)
				let yam=this.controls.getObject()
				let pitch=this.controls.getObject2()
				this.fpsLight.angle=Math.PI/12
				this.fpsLight.decay=1
				this.fpsLight.penumbra=1
				this.fpsLight.intensity=0.4
				this.fpsLight.target=this.fpsTarget		
				this.scene.add(this.fpsLight)
				this.scene.add(this.fpsTarget)
				
				//this.lightHelper = new THREE.SpotLightHelper( this.fpsLight );
				//this.scene.add( this.lightHelper );
				
				
				// moveLight()
				
				// SKY 
				this.sky=getSky()
				//this.scene.add( this.sky.mesh );
			
				
				//ANIMATIONS
				//this.mixer = new THREE.AnimationMixer( this.scene );
				
				// RENDERER
				this.renderer = new THREE.WebGLRenderer( { antialias: true } );
				//this.renderer.setClearColor( 0x00fffb );
				this.renderer.setPixelRatio( window.devicePixelRatio );
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				this.renderer.shadowMap.enabled = true;
				this.renderer.gammaInput = true;
				this.renderer.gammaOutput = true;
				this.container.appendChild( this.renderer.domElement );
				
				this.effect = new THREE.OutlineEffect( this.renderer );
				//EVENTS LISTENER
				window.addEventListener( 'resize', this.onWindowResize, false );
				document.addEventListener( 'keydown', (event)=>this.onKeyDown(event), false );
				document.addEventListener( 'keyup', (event)=>this.onKeyUp(event), false );
				
				// LOAD OBJECTS
				this.loadObjects(loadWorld(this))
				this.loadObjects(loadConceptions(this))

				
				//this.loadObjects(objects)	
				this.loadTv()
				//this.loadMirrors()
			}
			
			repeatObject(obj, nb, dir, dist){
				let step=0
				for (var i=0; i<nb; i++){
					step+=1
					let newObj= obj.clone()
					newObj.position[dir]=step*dist
					this.scene.add(newObj)
				}
				
			}
		
			loadObjects(objects){
				
				//var loader = new THREE.ObjectLoader();
				for (let i=0; i<objects.length; i++){
					let obj=objects[i]
					this.jsonLoader.load( objects[i].url, ( geometry, materials ) => {
						let mat = obj.mat ? obj.mat : materials[0]
						
						if(obj.dbs && mat ){
							mat.side=THREE.DoubleSide
						}
						//materials[0].wireframe=true
						var mesh = new THREE.Mesh( geometry,  obj.mat || materials);
						mesh.position.set(obj.pos[0], obj.pos[1], obj.pos[2])		
						let scale=obj.scale || 1
						mesh.geometry.scale(scale, scale, scale)
						if(obj.smooth) mesh.geometry.computeVertexNormals()
						if(obj.repeat){
							this.repeatObject(mesh, obj.repeat[0], obj.repeat[1], obj.repeat[2])
						}
						
						if(obj.lights){
							for (var i=0; i<obj.lights.length; i++){	
								let opt = obj.lights[i]
								let pointLight = new THREE.PointLight( opt.color, opt.intensity, opt.distance, opt.decay );
								let sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
								pointLight.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: opt.color } ) ) );
								pointLight.position.set( opt.pos[0], opt.pos[1], opt.pos[2] );
								pointLight.animation=obj.lights[i].animation
								pointLight.name=opt.name
								//pointLight.castShadow = true;
								this.lights.push(pointLight)
								this.scene.add( pointLight );			
							}
						}
						mesh.animation=obj.animation || false
						
						this.objects.push(mesh)
						this.scene.add(mesh)
						
					})
				}
			}
			
			loadTv(objects){
				
				/*this.jsonLoader.load( "3d/world/world-tv1.json", ( geometry, materials ) => {

					this.video1 = document.getElementById( 'video1' );
					this.video1.muted=true
					var videoTexture = new THREE.VideoTexture( this.video1 );
					videoTexture.minFilter = THREE.LinearFilter;
					videoTexture.magFilter = THREE.LinearFilter;
					videoTexture.format = THREE.RGBFormat;
					videoTexture.needsUpdate = true;
					var material = new THREE.MeshPhongMaterial({
						map: videoTexture,
						emissive : 0xffffff,
						emissiveMap :videoTexture,
						emissiveIntensity : 1
					 });
					var mesh = new THREE.Mesh( geometry, material );
					//mesh.geometry.computeVertexNormals()
					this.scene.add(mesh)
				})*/
				this.jsonLoader.load( "3d/world/world-tv2.json", ( geometry, materials ) => {

					this.video2 = document.getElementById( 'video2' );
					this.video2.muted=true
					var videoTexture = new THREE.VideoTexture( this.video2 );
					videoTexture.minFilter = THREE.LinearFilter;
					videoTexture.magFilter = THREE.LinearFilter;
					videoTexture.format = THREE.RGBFormat;
					videoTexture.needsUpdate = true;
					var material = new THREE.MeshPhongMaterial({
						map: videoTexture,
						emissive : 0xffffff,
						emissiveMap :videoTexture,
						emissiveIntensity : 1
					 });
					var mesh = new THREE.Mesh( geometry, material );
                  //  mesh.geometry.scale.set(0.5,0.5,0.5)
					mesh.geometry.computeVertexNormals()
					this.scene.add(mesh)
				})
				this.jsonLoader.load( "3d/world/world-tv3.json", ( geometry, materials ) => {

					this.video3 = document.getElementById( 'video3' );
					this.video3.muted=true
					var videoTexture = new THREE.VideoTexture( this.video3 );
					videoTexture.minFilter = THREE.LinearFilter;
					videoTexture.magFilter = THREE.LinearFilter;
					videoTexture.format = THREE.RGBFormat;
					videoTexture.needsUpdate = true;
					var material = new THREE.MeshPhongMaterial({
						map: videoTexture,
						emissive : 0xffffff,
						emissiveMap :videoTexture,
						emissiveIntensity : 1
					 });
					var mesh = new THREE.Mesh( geometry, material );
					mesh.geometry.computeVertexNormals()
					this.scene.add(mesh)
				})
			}
			
			initMouseTracker(){
				this.blocker = document.getElementById( 'blocker' );
				this.instructions = document.getElementById( 'instructions' );
				var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
				if ( havePointerLock ) {
					var element = document.body;
					
					var pointerlockchange = ( event ) => {
						if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
							this.controlsEnabled = true;
							this.controls.enabled = true;
							this.blocker.style.display = 'none';
						} else {
							this.controls.enabled = false;
							this.blocker.style.display = '-webkit-box';
							this.blocker.style.display = '-moz-box';
							this.blocker.style.display = 'box';
							this.blocker.style.display = '';
							this.instructions.style.display = 'flex';
						}
					};
					var pointerlockerror = ( event ) => {
						this.instructions.style.display = '';
					};
					// Hook pointer lock state change events
					document.addEventListener( 'pointerlockchange', (event)=>pointerlockchange(event), false );
					document.addEventListener( 'mozpointerlockchange', (event)=>pointerlockchange(event), false );
					document.addEventListener( 'webkitpointerlockchange', (event)=>pointerlockchange(event), false );
					document.addEventListener( 'pointerlockerror', (event)=>pointerlockerror(event), false );
					document.addEventListener( 'mozpointerlockerror', (event)=>pointerlockerror(event), false );
					document.addEventListener( 'webkitpointerlockerror', (event)=>pointerlockerror(event), false );
					
					this.instructions.addEventListener( 'click', ( event ) => {
						this.instructions.style.display = 'none';
						// Ask the browser to lock the pointer
						element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
						element.requestPointerLock();
					}, false );
				} else {
					this.instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
				}
			}

			onWindowResize() {
				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				this.renderThree();
			}
			
			onKeyDown( event ) {
				switch ( event.keyCode ) {
					case 38: // up
					case 90: // w
						this.moveForward = true;
						break;
					case 37: // left
					case 81: // a
						this.moveLeft = true; break;
					case 40: // down
					case 83: // s
						this.moveBackward = true;
						break;
					case 39: // right
					case 68: // d
						this.moveRight = true;
						break;
					case 32: // space
						if ( this.canJump === true ) this.velocity.y = 350;
						this.canJump = false;
						break;
				}
			}
			
			onKeyUp( event ) {
				switch( event.keyCode ) {
					case 38: // up
					case 90: // w
						this.moveForward = false;
						break;
					case 37: // left
					case 81: // a
						this.moveLeft = false;
						break;
					case 40: // down
					case 83: // s
						this.moveBackward = false;
						break;
					case 39: // right
					case 68: // d
						this.moveRight = false;
						break;
					case 76 : //l
						this.turnLight("turningLight1")
						this.turnLight("turningLight2")
						break
					case 70 : //f
						this.turnFpsLight()
						break
					case 72 : //h
						this.makeHot()
						break
					case 97 : //1
						this.muteVideo(1)
						break
					case 98 : //2
						this.muteVideo(2)
						break
					case 99 :  //3
						this.muteVideo(3)
						break
					case 73 : //i
						this.changeSky(0.45)
						break
					case 79 : //o
						this.changeSky(0.52)
						break
					case 77 : //m
						this.changeFpsLightAngle(12)
						break
					case 84 : //t
						this.showText('salut')
						break
					case 67 : //c
						this.addObject()
						break
				}
			}
			
			gamepadControl(){		
				var gamePads = navigator.getGamepads()
				var gamePad
				// FIND STEELSERIES GAMEPAD
				for (var key in gamePads){
					if(gamePads[key] !== null && gamePads.hasOwnProperty(key) ){
						if (gamePads[key].id.search(/Series/) !== -1) { gamePad = gamePads[key] }
					}
				}
				// RETURN IF GAMEPAD NOT FOUND
				if (gamePad===undefined) return
				//console.log(gamePad)
				// JUMP
				if(gamePad.buttons[0].pressed===true){
					if ( this.canJump === true ) this.velocity.y = 350;
					this.canJump = false;
				}
				// MOVE RIGHT
				if(gamePad.axes[0]>0.05){
					this.moveRight = true;
					this.moveSpeedLR = Math.abs(gamePad.axes[0])
				} else this.moveRight = false;

				// MOVE LEFT
				if(gamePad.axes[0]<-0.05){
					this.moveLeft = true;
					this.moveSpeedLR = Math.abs(gamePad.axes[0])
				} else this.moveLeft = false;

				// MOVE BACKWARD
				if(gamePad.axes[1]>0.05){
					this.moveBackward = true;
					this.moveSpeedFB = Math.abs(gamePad.axes[1])
				} else this.moveBackward = false;

				// MOVE FORWARD
				if(gamePad.axes[1]<-0.05){
					this.moveForward = true;
					this.moveSpeedFB = Math.abs(gamePad.axes[1])
				} else this.moveForward = false;

				if(gamePad.axes[2]>0.05){
					this.rotateRight = true;
					this.rotSpeedH=Math.abs(gamePad.axes[2])
				} else this.rotateRight = false;

				if(gamePad.axes[2]<-0.05){
					this.rotateLeft = true;
					this.rotSpeedH=Math.abs(gamePad.axes[2])
				} else this.rotateLeft = false;

				if(gamePad.axes[5]>0.05){
					this.rotateUp = true;
					this.rotSpeedV=Math.abs(gamePad.axes[5])
				} else this.rotateUp = false;

				if(gamePad.axes[5]<-0.05){
					this.rotateBottom = true;
					this.rotSpeedV=Math.abs(gamePad.axes[5])
				} else this.rotateBottom = false;

				var start = requestAnimationFrame(this.gamepadControl)
			}	
			
			turnLight(name){
				let light = this.lights.filter((lgt, index)=>{return lgt.name===name})[0]
				
				var position = { value : light.intensity };
				var target = light.intensity>0.1 ? { value : 0 } : { value : 1 };
				var tween = new TWEEN.Tween(position).to(target, 2000);
				tween.onUpdate(function(){
					//console.log(position.x)
					light.intensity=position.value
				});
				tween.start();	
			}
			
			turnFpsLight(){
				if(this.fpsLightOn){
					this.scene.remove(this.fpsLight)
					this.scene.remove(this.fpsTarget)
				}
				else{
					this.scene.add(this.fpsLight)
					this.scene.add(this.fpsTarget)
				}
				this.fpsLightOn = !this.fpsLightOn
			}
			
			makeHot(){
				var position = { value : this.matLava1.emissiveIntensity };
				var target = position .value>0.1 ? { value : 0 } : { value : 1 };
				var tween = new TWEEN.Tween(position).to(target, 2000);
				tween.onUpdate(()=>{
					//console.log(position.x)
					this.matLava1.emissiveIntensity=position.value
				});
				tween.start();	
			}
			
			muteVideo(n){
				console.log(n)
				this['video'+n].muted=!this['video'+n].muted
			}
			
			changeSky(n){
				var distance = 400000;
				var position = { value : this.inclination, ambient : this.ambientLight.intensity };
				this.inclination=n
				var ambientTarget = this.ambientLight.intensity >0.01 ? 0 : 0.5
                
				var target = { value : n, ambient : ambientTarget };
				var tween = new TWEEN.Tween(position).to(target, 20000);
				tween.onUpdate(()=>{
					var theta = Math.PI * ( position.value - 0.5 );
					var phi = 2 * Math.PI * ( this.azimuth - 0.5 );
					this.sky.uniforms.sunPosition.value.x = distance * Math.cos( phi );
					this.sky.uniforms.sunPosition.value.y = distance * Math.sin( phi ) * Math.sin( theta );
					this.sky.uniforms.sunPosition.value.z = distance * Math.sin( phi ) * Math.cos( theta );
					this.ambientLight.intensity=position.ambient
                    console.log(this.ambientLight.intensity)
				});
				tween.start();
			}
			
			changeFpsLightAngle(n){
				this.fpsLight.angle=Math.PI/n
			}
			
			showText(text){

				this.textLoader.load( 'fonts/helvetiker_bold.typeface.json',  ( font )=>{
					let geometry = new THREE.TextGeometry( text, {
						font: font,
						size: 800,
						height: 5,
						curveSegments: 12,
						bevelEnabled: true,
						bevelThickness: 0,
						bevelSize: 0,
						bevelSegments: 5
					});
					let mesh = new THREE.Mesh(geometry, this.matRed1)
					this.scene.add(mesh)
					mesh.position.set(-60, 30, -3000)
					
					var position = { x : 60, z:-30000 };
					var target = { x : 60, z:30000};
					var tween = new TWEEN.Tween(position).to(target, 3000);
					tween.onUpdate(()=>{
						//console.log(position.x)
						mesh.position.set(this.controls.getObject().position.x-100, 30, position.z)
					});
					tween.start();	
				} );
			}
			
			addObject(Dx, Dy, Dz){
				let cube = new THREE.CubeGeometry(30, 30, 30)
				let mesh = new THREE.Mesh(cube, this.matBeton1)
				this.scene.add(mesh)
				//console.log(Dx)
				let dx = Dx*10 || 0
				let dy= Dy*10 || 0
				let dz = -Dz*10 || 0
				/*console.log(dx)
				console.log(typeof(this.controls.getObject().position.x))*/
				let posX=this.controls.getObject().position.x+dx
				let posY=this.controls.getObject().position.y+dy
				let posZ=this.controls.getObject().position.z+dz
				
				mesh.position.set(posX, posY, posZ)
                this.objects.push(mesh)
			}
			
			turnTv(n){
				let text="video"+n
				let vid=document.getElementById(text)
				vid.play()
			}
			
			loadMirrors(){
				var mirrorGeom =  new THREE.CubeGeometry( 60, 60, 60 ); // radius, segmentsWidth, segmentsHeight
				this.mirrorCamera = new THREE.CubeCamera( 1, 2000, 500 );
				// mirrorCubeCamera.renderTarget.minFilter = THREE.LinearMipMapLinearFilter;
				this.scene.add( this.mirrorCamera );
				var mirrorMaterial = new THREE.MeshBasicMaterial( { envMap: this.mirrorCamera.renderTarget } );
				var mirror = new THREE.Mesh( mirrorGeom, mirrorMaterial );
				mirror.position.set(75,5,-50);
				//mirror.setVisible( true );
				this.mirrorCamera.position.copy(mirror.position)
				this.scene.add(mirror);
			}
 
			animate() {
				requestAnimationFrame( this.animate );
				if ( this.controlsEnabled ) {
					this.raycasterY.ray.origin.copy( this.controls.getObject().position );
					this.raycasterY.ray.origin.y -= 10;
					var intersections = this.raycasterY.intersectObjects( this.objects );
					var isOnObject = intersections.length > 0;

					/*var time = performance.now();
					delta = ( time - this.prevTime ) / 1000;
					if(delta>0.008)delta=0.008*/
					
					//this.delta=this.clock.getDelta()
					//console.log()
					//this.delta=this.clock.getDelta()/4;
					this.velocity.x -= this.velocity.x * 10.0 * this.delta;
					this.velocity.z -= this.velocity.z * 10.0 * this.delta;
					this.velocity.y -= 9.8 * 20 * this.delta*2; // 100.0 = mass
					//console.log(this.delta)
					
					if ( this.moveForward ) this.velocity.z -= 800.0 * this.delta * this.moveSpeedFB ;
					if ( this.moveBackward ) this.velocity.z += 800.0 * this.delta * this.moveSpeedFB;
					if ( this.moveLeft ) this.velocity.x -= 800.0 * this.delta * this.moveSpeedLR;
					if ( this.moveRight ) this.velocity.x += 800.0 * this.delta * this.moveSpeedLR;
				/*	if ( this.rotateRight ) this.controls.getObject().rotateY( -0.01*this.rotSpeedH )
					if ( this.rotateLeft ) this.controls.getObject().rotateY( 0.01*this.rotSpeedH )*/
					if ( this.rotateRight ) this.controls.getObject().rotation.y-=0.01*this.rotSpeedH
					if ( this.rotateLeft ) this.controls.getObject().rotation.y+= 0.01*this.rotSpeedH 
					if ( this.rotateUp ) this.controls.getObject2().rotateX( -0.01*this.rotSpeedV )
					if ( this.rotateBottom ) this.controls.getObject2().rotateX( 0.01*this.rotSpeedV )
					
					
					if ( isOnObject === true ) {
						this.velocity.y = Math.max( 0, this.velocity.y );
						this.canJump = true;
					}
					
					this.controls.getObject().translateX( this.velocity.x * this.delta );
					this.controls.getObject().translateY( this.velocity.y * this.delta );
					this.controls.getObject().translateZ( this.velocity.z * this.delta );

					if ( this.controls.getObject().position.y < -100 ) {
						this.velocity.y = 0;
						this.controls.getObject().position.y = -100;
						this.canJump = true;
					}
					this.prevTime = time;
				}
				
				var time = Date.now() * 0.0005;
				
				for (var i=0; i<this.lights.length; i++){
					if(this.lights[i].animation){
						this.lights[i].animation(this.lights[i], time)
					}
				}
				for (var i=0; i<this.objects.length; i++){
					if(this.objects[i].animation){
						this.objects[i].animation(this.objects[i], time)
					}
				}
				this.stats.update()
				
				let yam=this.controls.getObject()
				let pitch=this.controls.getObject2()
				
				if(this.fpsLightOn){
					let alpha = pitch.rotation.x
					let beta = yam.rotation.y
					this.fpsLight.position.set(yam.position.x, yam.position.y, yam.position.z)
					let posX=yam.position.x-Math.cos(alpha)*Math.cos(Math.PI/2-beta)*10
					let posY=yam.position.y+Math.sin(alpha)*10
					let posZ=yam.position.z-Math.cos(alpha)*Math.cos(beta)*10
					this.fpsTarget.position.set(posX, posY, posZ)
					this.fpsTarget.rotation.x=yam.rotation.y
					this.fpsTarget.rotation.y=pitch.rotation.x
				}
				
				
				

				TWEEN.update();
				if(this.mirrorCamera) {this.mirrorCamera.update(this.renderer, this.scene )}
				this.renderer.render( this.scene, this.camera );
				streamer.emit('newPos', [yam.position.x,yam.position.y,yam.position.z])
			}
			
			renderThree(){
				this.renderer.render( this.scene, this.camera );
			}

            render() {
                return <WrappedComponent
				{...this.props}
				/>
            }
        }
        $CbDemoFps_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $CbDemoFps_Api
    }
}
    