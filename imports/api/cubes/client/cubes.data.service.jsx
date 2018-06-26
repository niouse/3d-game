
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {cubesMongo} from "./../cubes.js"

var cubeSource = new Subject();
const cubeObs = cubeSource.asObservable();

export default CubesDataService = (WrappedComponent)=>{
	return (WrappedComponent)=>{
		 class _CubesComponentDataService0 extends Component {

			constructor(props){
				super(props);
			}



			render (){
				return (
					this.props.cubesList && this.props.cubesList[0] ?
					<WrappedComponent
						{...this.props}
						cube = {this.props.cube}
						cubesList = {this.props.cubesList}
						getOneCube = {this.props.getOneCube}
					/> :
					<p>loading</p>
				)
			}
		}

		const _CubesDataService1 = createContainer((props) => {

		  //let cubeSubOne = Meteor.subscribe("oneCubes", props.cubeId)  
		  let cubeSubList = Meteor.subscribe("cubesList")
		  
		  const handle = cubesMongo.find().observeChanges({
			  added : function(id, fields){
				  if(!handle) return;
				  cubeSource.next({id : id, mode : 'add', cube : fields})
			  },
			  removed : function(id){
				  if(!handle) return;
				  cubeSource.next({id : id, mode : 'remove'})
			  }
		  })
		  
		  
		  return {
			...props,
			//cube : cubesMongo.find({_id : props.cubeId}).fetch()[0],
			cubesList : cubesMongo.find({}).fetch(),
			cubeObs : cubeObs,
		  };
		}, _CubesComponentDataService0);


		return class _CubesDataService2 extends Component {

			constructor(props){
				super(props);
				this.state = {
					cubeId : null
				}
			}

			getOneCube(id){
				this.setState({
					cubeId : id
				})
			}

			render (){
				return (
					<_CubesDataService1
						{...this.props}
						cubeId = {this.state.cubeId}
						getOneCube={(id)=>this.getOneCube(id)}
					/> 
				)
			}
		}
	}
}
