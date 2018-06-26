
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import streamer from "/imports/api/streamer.js"


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

				}
				this.clock = new THREE.Clock();
			   this.container;
			   this.camera
			   this.camBox
			   this.scene
			   this.renderer;
				this.init=this.init.bind(this)
				this.renderThree=this.renderThree.bind(this)
				this.onWindowResize=this.onWindowResize.bind(this)
				
				this.lights=[]
                this.objects = [];
                this.video1
				this.video2
				this.video3
				
				this.jsonLoader = new THREE.JSONLoader();
				this.Tloader = new THREE.TextureLoader();
				
				let self=this
				loadTextures(self)
				loadMaterials(self)
				//loadWorld=loadWorld.bind(this)
			}
			
            componentDidMount() {		
				
				WEBVR.checkAvailability().catch( function( message ) {
					document.body.appendChild( WEBVR.getMessageContainer( message ) );
				} );
				//

				this.init();
				this.animate();

			}
			componentWillReceiveProps(newProps) {
				
			}		
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {
				
			}	
            componentWillUnmount() {
				
			}
            
			init() {
					this.container = document.getElementById('cb-demo-fps-container')			
					this.scene = new THREE.Scene();
					this.scene.background = new THREE.Color( 0x505050 );
					this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000000 );
					this.camBox = new THREE.Group();
					this.camBox.position.set( 0, 10, 100 );
					this.scene.add( this.camBox );
					this.camBox.add( this.camera );
					streamer.on('newPos', (msg)=>{
						this.camBox.position.set(msg[0], msg[1], msg[2])
					  });
                    streamer.on('turnTv', (n)=>{
                        this.turnTv(n)
                    })
					//this.scene.add( this.camera );
					//this.camera.position.set( 0, 5, 120 );
				
					room = new THREE.Mesh(
						new THREE.BoxGeometry( 6, 6, 6, 8, 8, 8 ),
						new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: true } )
					);
					this.scene.add( room );
					this.scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );
					var light = new THREE.DirectionalLight( 0xffffff );
					light.position.set( 1, 1, 1 ).normalize();
					//this.scene.add( light );
                    
                    var ambientLight = new THREE.AmbientLight( 0xffffff );  
                    ambientLight.intensity=1
                    this.scene.add(ambientLight)
                
					this.raycaster = new THREE.Raycaster();
					this.renderer = new THREE.WebGLRenderer( { antialias: true } );
					this.renderer.setPixelRatio( window.devicePixelRatio );
					this.renderer.setSize( window.innerWidth, window.innerHeight );
					this.container.appendChild( this.renderer.domElement );
					this.renderer.vr.enabled = true;
					WEBVR.getVRDisplay(  ( display )=> {
						this.renderer.vr.setDevice( display );
						document.body.appendChild( WEBVR.getButton( display, this.renderer.domElement ) );
					} );

					//
					window.addEventListener( 'resize', this.onWindowResize, false );
				
					this.loadObjects(loadWorld(this))
				    this.loadObjects(loadConceptions(this))
                    this.loadTv()
				}
            
			onWindowResize() {
				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
			}
			animate() {
				this.renderer.animate( this.renderThree );
				
			}			
			renderThree() {
				//var delta = this.clock.getDelta() * 60;
				var time = Date.now() * 0.0005;
				
				for (var i=0; i<this.lights.length; i++){
					if(this.lights[i].animation){
						this.lights[i].animation(this.lights[i], time)
					}
				}
				this.renderer.render( this.scene, this.camera );
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
						
						/*if(obj.lights){
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
						}*/
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
			
			turnTv(n){
				let text="video"+n
				let vid=document.getElementById(text)
				vid.play()
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
    