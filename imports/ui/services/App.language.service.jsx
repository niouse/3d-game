import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';

export const AppLanguageService = (WrappedComponent) => {
	let languageSub;
	return class WrappedComponentWithStyles extends Component {
	    constructor(props) {
            super(props)
        }	
		componentDidMount(){
			languageNext(actualLanguage)
			languageSub = languageObs.subscribe((x)=>{
				actualLanguage=x
			})
		}
		
		componentWillUnmount(){
			languageSub.unsubscribe()
		}
			
		render (){
			return <WrappedComponent
				{...this.props}
			    languageObs = {languageObs}
				languageNext = {languageNext}
				language = {actualLanguage}
				/>
		}	
	}
}

var actualLanguage = 'en'

var languageSource = new Subject();
	
const languageNext = (msg) => {
	languageSource.next(msg)
}

const languageObs = languageSource.asObservable();


