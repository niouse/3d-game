
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function CbDemoFps_Api(_optional) {
    return (WrappedComponent) => {
        class $CbDemoFps_Api extends Component {
            constructor(props) {
				super(props);
				this.state = {

				}

				
				
			}
			
            componentDidMount() {		
				
			WEBVR.checkAvailability().catch( function( message ) {
				document.body.appendChild( WEBVR.getMessageContainer( message ) );
			} );
			//
			var clock = new THREE.Clock();
			var container;
			var camera, scene, raycaster, renderer;
			var room;
			var isMouseDown = false;
			var INTERSECTED;
			var crosshair;
			init();
			animate();
			function init() {
				container = document.getElementById('cb-demo-fps-container')			
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x505050 );
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10 );
				scene.add( camera );
				
				room = new THREE.Mesh(
					new THREE.BoxGeometry( 6, 6, 6, 8, 8, 8 ),
					new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: true } )
				);
				scene.add( room );
				scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );
				var light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 1, 1, 1 ).normalize();
				scene.add( light );
				
				raycaster = new THREE.Raycaster();
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				renderer.vr.enabled = true;
				WEBVR.getVRDisplay( function ( display ) {
					renderer.vr.setDevice( display );
					document.body.appendChild( WEBVR.getButton( display, renderer.domElement ) );
				} );

				//
				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			//
			function animate() {
				renderer.animate( render );
			}
			function render() {
				var delta = clock.getDelta() * 60;
				// find intersections
				
				renderer.render( scene, camera );
			}
	
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
    