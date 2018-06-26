
import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
				this.controls;
				this.scene
				this.renderer;
				this.cube;
				this.mouse;
				this.raycasterX;
				this.raycasterY;
				this.raycasterZ;
				this.cubeGeo;
				this.cubeMaterial;
				this.objects = [];
				this.lights = []
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
				
				this.ambientLight = new THREE.AmbientLight( 0xffffff );
				this.fpsLight 
				this.lightHelper
			
				
				this.jsonLoader = new THREE.JSONLoader();
				this.Tloader = new THREE.TextureLoader();
				
				this.pitchObject = new THREE.Object3D();
				this.yawObject = new THREE.Object3D();
				this.fpsTarget = new THREE.Object3D();
				
				this.animate=this.animate.bind(this)
				this.onKeyDown=this.onKeyDown.bind(this)
				this.onKeyUp=this.onKeyUp.bind(this)
				this.onWindowResize=this.onWindowResize.bind(this)
				this.renderThree=this.renderThree.bind(this)

				this.gamepadControl = this.gamepadControl.bind(this)
				this.loadObjects = this.loadObjects.bind(this)
				this.effect
				//TEXTURES & MATERIALS
				let self=this
				//loadTextures(self)
				//loadMaterials(self)
				//loadWorld=loadWorld.bind(this)
				
				
			}
			
            componentDidMount() {			
				if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
				WEBVR.checkAvailability().catch( function( message ) {
					document.body.appendChild( WEBVR.getMessageContainer( message ) );
				} );
				//this.initMouseTracker()
				this.init();
				//this.renderThree();
				this.animate()			
			}
			
            componentWillReceiveProps(newProps) {
				
			}
			
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {
				/*this.renderThree();
				this.animate()*/
				//this.animate()
			}
			
            componentWillUnmount() {
			}
			

			init() {
				
				// GET CONTAINER
				this.container = document.getElementById('cb-demo-fps-container')
				//this.clock.start();
				//this.stats = new Stats();
				//this.container.appendChild( this.stats.dom );
				
				// SET CAMERA
				this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000000 );
				//this.camera.position.set( 0, 5, 120 );
				//this.camera.lookAt( new THREE.Vector3() );
				
				// RAYCASTER
				//this.raycasterY = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
				
				// SCENE
				this.scene = new THREE.Scene();		
				this.scene.background = new THREE.Color( 0x000fff );
				//FOG
				//this.scene.fog = new THREE.FogExp2( 0xff0000, 0.0025 )
				
				// CONTROLS
				//this.controls = new THREE.PointerLockControls( this.camera );				
				/*this.scene.add( this.controls.getObject() );
				this.controls.getObject().position.z=100
				this.gamepadControl()*/			
			
				
				// AMBIANT LIGHT
				this.ambientLight.intensity=1
				this.scene.add(this.ambientLight)
				
				//FPS LIGHT
				/*this.fpsLight = new THREE.SpotLight(0xffffff, 1)
				let yam=this.controls.getObject()
				let pitch=this.controls.getObject2()
				this.fpsLight.angle=Math.PI/4
				this.fpsLight.decay=1
				this.fpsLight.penumbra=1
				this.fpsLight.target=this.fpsTarget		
				this.scene.add(this.fpsLight)
				this.scene.add(this.fpsTarget)
				this.lightHelper = new THREE.SpotLightHelper( this.fpsLight );
				this.scene.add( this.lightHelper );*/
				
				
				// moveLight()
				
				// SKY 
				//var sky=getSky()
				//this.scene.add( sky.mesh );
				
				//ANIMATIONS
				//this.mixer = new THREE.AnimationMixer( this.scene );
				
				// RENDERER
				this.renderer = new THREE.WebGLRenderer( { antialias: true } );
				//this.renderer.setClearColor( 0x00fffb );
				this.renderer.setPixelRatio( window.devicePixelRatio );
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				//this.renderer.shadowMap.enabled = true;
				//this.renderer.gammaInput = true;
				//this.renderer.gammaOutput = true;
				this.container.appendChild( this.renderer.domElement );
				this.renderer.vr.enabled = true;
				WEBVR.getVRDisplay( function( display ){
					this.renderer.vr.setDevice( display );
					document.body.appendChild( WEBVR.getButton( display, this.renderer.domElement ) );
				} );
				
				//EFFECT
				//this.effect = new THREE.OutlineEffect( this.renderer );
				//EVENTS LISTENER
				window.addEventListener( 'resize', this.onWindowResize, false );
				//document.addEventListener( 'keydown', (event)=>this.onKeyDown(event), false );
				//document.addEventListener( 'keyup', (event)=>this.onKeyUp(event), false );
				
				// LOAD OBJECTS
				//this.loadObjects(loadWorld(this))
				//this.loadObjects(loadConceptions(this))

				
				//this.loadObjects(objects)	
				//this.loadTv()
				var room = new THREE.Mesh(
					new THREE.BoxGeometry( 6, 6, 6, 8, 8, 8 ),
					new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: true } )
				);
				this.scene.add( room );
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
				
				this.jsonLoader.load( "3d/world/world-tv1.json", ( geometry, materials ) => {

					var videoEl = document.getElementById( 'video' );
					var videoTexture = new THREE.VideoTexture( videoEl );
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
				})
			}
			
			

			onWindowResize() {
				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				//this.renderer.render( this.scene, this.camera );
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
 
			animate() {
				this.renderer.animate( this.renderThree );
				//requestAnimationFrame( this.animate );

					//this.raycasterY.ray.origin.copy( this.controls.getObject().position );
					//this.raycasterY.ray.origin.y -= 10;
					//var intersections = this.raycasterY.intersectObjects( this.objects );
					//var isOnObject = intersections.length > 0;

					/*var time = performance.now();
					delta = ( time - this.prevTime ) / 1000;
					if(delta>0.008)delta=0.008*/
					//delta = 0.008
					//delta=this.clock.getDelta()
					//console.log()
					//delta=this.clock.getDelta()/4;
					//this.velocity.x -= this.velocity.x * 10.0 * delta;
					//this.velocity.z -= this.velocity.z * 10.0 * delta;
					//this.velocity.y -= 9.8 * 100.0 * delta*2; 

					
					/*if ( this.moveForward ) this.velocity.z -= 1600.0 * delta * this.moveSpeedFB ;
					if ( this.moveBackward ) this.velocity.z += 1600.0 * delta * this.moveSpeedFB;
					if ( this.moveLeft ) this.velocity.x -= 1600.0 * delta * this.moveSpeedLR;
					if ( this.moveRight ) this.velocity.x += 1600.0 * delta * this.moveSpeedLR;
					if ( this.rotateRight ) this.controls.getObject().rotation.y-=0.02*this.rotSpeedH
					if ( this.rotateLeft ) this.controls.getObject().rotation.y+= 0.02*this.rotSpeedH 
					if ( this.rotateUp ) this.controls.getObject2().rotateX( -0.02*this.rotSpeedV )
					if ( this.rotateBottom ) this.controls.getObject2().rotateX( 0.02*this.rotSpeedV )*/
					
					
					/*if ( isOnObject === true ) {
						this.velocity.y = Math.max( 0, this.velocity.y );
						this.canJump = true;
					}*/
					
					/*this.controls.getObject().translateX( this.velocity.x * delta );
					this.controls.getObject().translateY( this.velocity.y * delta );
					this.controls.getObject().translateZ( this.velocity.z * delta );*/

					/*if ( this.controls.getObject().position.y < -100 ) {
						this.velocity.y = 0;
						this.controls.getObject().position.y = -100;
						this.canJump = true;
					}*/
					//this.prevTime = time;

				
				/*var time = Date.now() * 0.0005;
				
				for (var i=0; i<this.lights.length; i++){
					if(this.lights[i].animation){
						this.lights[i].animation(this.lights[i], time)
					}
				}
				for (var i=0; i<this.objects.length; i++){
					if(this.objects[i].animation){
						this.objects[i].animation(this.objects[i], time)
					}
				}*/
				//this.stats.update()
				
				
				/*this.lightHelper.update();
				let yam=this.controls.getObject()
				let pitch=this.controls.getObject2()
				let alpha = pitch.rotation.x
				let beta = yam.rotation.y
				this.fpsLight.position.set(yam.position.x, yam.position.y, yam.position.z)
				let posX=yam.position.x-Math.cos(alpha)*Math.cos(Math.PI/2-beta)*10
				let posY=yam.position.y+Math.sin(alpha)*10
				let posZ=yam.position.z-Math.cos(alpha)*Math.cos(beta)*10
				this.fpsTarget.position.set(posX, posY, posZ)
				this.fpsTarget.rotation.x=yam.rotation.y
				this.fpsTarget.rotation.y=pitch.rotation.x*/
				
				//this.renderer.render( this.scene, this.camera );
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
    