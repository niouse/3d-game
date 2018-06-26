import { Subject } from 'rxjs/Subject';

import React, { Component } from 'react';

export const AppTextService = (WrappedComponent, _text) => {
	let AppLanguageSub;
	return class WrappedComponentWithStyles extends Component {
		
	    constructor(props) {
            super(props)
			
			this.state={
				text : _text.en
			}
        }
		
		
		componentDidMount(){
			//this.setLanguage(ActualLanguage)
			AppLanguageSub = AppLanguageObs.subscribe((x)=>{
				ActualLanguage=x
				this.setLanguage(x)
			})
		}
		
		componentWillUnmount(){
			AppLanguageSub.unsubscribe()
		}
		
		setLanguage(lng){
			this.setState({
				text : _text[lng]
			})
		}
		
		
		render (){
			return <WrappedComponent
				{...this.props}
			    text={this.state.text}
				setLanguage={(lng)=>this.setLanguage(lng)}
			    AppLanguageObs = {AppLanguageObs}
				AppLanguageNext = {AppLanguageNext}
				/>
		}	
	}
}

var ActualLanguage = 'en'

var AppLanguageSource = new Subject();
	
const AppLanguageNext = (msg) => {
	AppLanguageSource.next(msg)
}

const AppLanguageObs = AppLanguageSource.asObservable();


