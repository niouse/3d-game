import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import themes from "./../themes/index.js";

export const AppStylesOptionsService = (WrappedComponent) => {
	
	return class WrappedComponentWithStylesService extends Component {
		
	    constructor(props) {
            super(props)

        }
		
		componentDidMount(){

		}

		render (){
			return <WrappedComponent
				{...this.props}
				stylesOptionsObs = {stylesOptionsObs}
				stylesOptionsNext = {stylesOptionsNext}
				stylesOptions={computeStylesOptions()}
				/>
		}	
	}
}


var stylesOptionsSource = new Subject();
	
const stylesOptionsNext = (msg) => {
	stylesOptionsSource.next(computeStylesOptions())
}

const stylesOptionsObs = stylesOptionsSource.asObservable();


function computeStylesOptions(){
	let device;

	if( navigator.userAgent.match(/Android/i)
	 || navigator.userAgent.match(/webOS/i)
	 || navigator.userAgent.match(/iPhone/i)
	 || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i)
	 || navigator.userAgent.match(/BlackBerry/i)
	 ){
		device="smartPhone"
		//document.body.style['margin']='auto'
	}
	else {
		device="pc"
	}
	let devicePixelRatio = window.devicePixelRatio || 1
	//let screenHeight=screen.availHeight //*devicePixelRatio
	let screenHeight=window.innerHeight
	let screenWidth=window.innerWidth //*devicePixelRatio


	let stylesOptions = {
		theme : themes['trb'],
		device : device,
		screenHeight : Math.round(screenHeight),
		screenWidth :  Math.round(screenWidth)
	}
	return stylesOptions
}