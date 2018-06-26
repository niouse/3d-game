import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//import themes from "./../themes/index.js";

export const AppStylesService = (WrappedComponent, defaultStyles) => {
	
	return class WrappedComponentWithStyles extends Component {
		
	    constructor(props) {
            super(props)
			
			
			
			
			this.state={
				styles : this.computeStyles(defaultStyles, this.props.stylesOptions)
			}
        }
		
		
		componentDidMount(){
			if(this.props.stylesOptionsObs){
				this.props.stylesOptionsObs.subscribe((x)=>{
					this.setState({
						styles : this.computeStyles(defaultStyles, x)
					})
				})
			}
		}
		
		
		computeStyles(defaultStyles, stylesOptions){
			
			let options= stylesOptions || {}
			let theme = options.theme || {colors : {primary : "black"}}
			let screenWidth = options.screenWidth || "100%"
			let screenHeight = options.screenHeight || "100%"
			let device = options.device || "pc"
			
			let styles = Object.assign({}, defaultStyles);
			
			
			// Compute styles depending on themes and screen size
			
			styles.container = Object.assign({}, styles.container, {
				width : screenWidth,
				height : screenHeight,
			})
			
			styles.title ={
				color: theme.colors.primary
			} 
			
			
			if (this.device === "pc") {
		
			}
			if (this.device === "smartPhone") {
			
			} 
			for (var key in styles){
				let sytleKey = key + "Style"
				if(this.props[sytleKey]){
					styles[key] = Object.assign({}, styles[key], this.props[sytleKey])
				}	
			}

			return styles
		}

		
		render (){
			return <WrappedComponent
				{...this.props}
			    styles={this.state.styles}
				/>
		}	
	}
}


