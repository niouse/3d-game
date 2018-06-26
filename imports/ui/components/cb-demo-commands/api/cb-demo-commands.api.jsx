
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";

import streamer from "/imports/api/streamer.js"


export default function CbDemoCommands_Api(_optional) {
    return (WrappedComponent) => {
        class $CbDemoCommands_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					openHandLight : false,
					openLight : false,
					openSun : false,
					openTv:false,
					openMessage : false,
					openObject:false,
					posX:0,
					posY:0,
					posZ:0
				}
				this.turnLight=this.turnLight.bind(this)
				this.turnFpsLight=this.turnFpsLight.bind(this)
				this.toggleStateBool=this.toggleStateBool.bind(this)
				this.changeFpsLightAngle=this.changeFpsLightAngle.bind(this)
				this.setSunInclination=this.setSunInclination.bind(this)
			    this.changePosX=this.changePosX.bind(this)
			    this.changePosY=this.changePosY.bind(this)
			    this.changePosZ=this.changePosZ.bind(this)
				this.addObject=this.addObject.bind(this)
            }
            componentDidMount() {
				document.body.style["background-color"]="white"
			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            turnLight() {
				let fill = this.state.openLight ? "black" : "yellow"
				this.state.openLight=!this.state.openLight
				d3.select('#svg-light').transition()
				.duration(1000)
				.attr("fill", fill)
				
               streamer.emit('turnLight', "go")
            }
			
			turnFpsLight(){
				let fill = this.state.openFpsLight ? "black" : "yellow"
				this.state.openFpsLight=!this.state.openFpsLight
				d3.select('#svg-fps-light').transition()
				.duration(1000)
				.attr("fill", fill)
               streamer.emit('turnFpsLight', "go")
			}
			
			changeFpsLightAngle(event, value){
				 streamer.emit('changeFpsLightAngle', Math.abs(value))
			}
			
			sunRise(){
				streamer.emit('changeSky', 0.45)
			}
			
			sunSet(){
				streamer.emit('changeSky', 0.52)
			}
			
			setSunInclination(event, value){
				streamer.emit('changeSky', Math.abs(value))
			}
			
			sendMessage(){
				let value=document.getElementById('text-field').value
				streamer.emit('showText', value)
			}
			
			addObject(){
				console.log(this.state.posX)
				streamer.emit('addObject', [this.state.posX, this.state.posY, this.state.posZ])
			}
			
			toggleStateBool(key){
				this.setState({
					[key]: !this.state[key]
				})
			}
			
			changePosX(event, value){
				this.setState({
					posX:value
				})
			}
			changePosY(event, value){
				this.setState({
					posY:value
				})
			}
			changePosZ(event, value){
				this.setState({
					posZ:value
				})
			}
			
			turnTv(n){
				console.log(n)
				streamer.emit('turnTv', n)
			}
		

            render() {
                return <WrappedComponent
				{...this.props}
				turnLight={this.turnLight}
				toggleStateBool={this.toggleStateBool}
				openHandLight={this.state.openHandLight}
				turnFpsLight={this.turnFpsLight}
				changeFpsLightAngle={this.changeFpsLightAngle}
				openSun={this.state.openSun}
				sunRise={this.sunRise}
				sunSet={this.sunSet}
				setSunInclination={this.setSunInclination}
				openTv={this.state.openTv}
				openMessage={this.state.openMessage}
				sendMessage={this.sendMessage}
				openObject={this.state.openObject}
				addObject={this.addObject}
				changePosX={this.changePosX}
				changePosY={this.changePosY}
				changePosZ={this.changePosZ}
				turnTv={this.turnTv}
				/>
            }
        }
        $CbDemoCommands_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $CbDemoCommands_Api
    }
}
    