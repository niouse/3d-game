
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function CbDemoFps_Template() {
    return (wrappedComponent) => {
        const $CbDemoFps_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="cb-demo-fps-container" style={styles.container}>
					
						<div id="blocker" style={styles.blocker}>
							<div id="instructions" style={styles.instructions}>
								<img style={styles.image} src="trb.png" />	
								<span style={styles.clickToPlay}>Click to play</span>
								<br />
								(W, A, S, D = Bouger, SPACE = Sauter, MOUSE = Orienter)
							</div>
						</div>	
						<video id="video1" src="videos/vid-hf.mp4"  loop style={{display : "none"}}/>
						<video id="video2" src="videos/bouchage.mp4"  loop style={{display : "none"}}/>	
						<video id="video3" src="videos/coulee.mp4"  loop style={{display : "none"}}/>	
				</div>
            );
        }
        $CbDemoFps_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $CbDemoFps_Template
    }
}
    