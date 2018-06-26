
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';



import Left from 'material-ui/svg-icons/hardware/keyboard-arrow-left.js';
import Right from 'material-ui/svg-icons/hardware/keyboard-arrow-right.js';
import Mute from 'material-ui/svg-icons/av/volume-mute.js';



import light from "./light.jsx"
import handLight from "./handLight.jsx"
import msg from "./msg.jsx"
import tv from "./tv.jsx"
import sun from "./sun.jsx"
import addObject from "./addObject.jsx"

@light()
class $light{}

@handLight()
class $handLight{}

@msg()
class $msg {}

@tv()
class $tv {}

@sun()
class $sun{}

@addObject()
class $addObject {}

export default function CbDemoCommands_Template() {
    return (wrappedComponent) => {
        const $CbDemoCommands_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="cb-demo-commands-container" className="container" style={styles.container}>
					<$light styles={styles} onClick={props.turnLight}/>
					<$handLight styles={styles} onClick={()=>props.toggleStateBool("openHandLight")}/>
					<$sun styles={styles} onClick={()=>props.toggleStateBool("openSun")}/>
					<$tv styles={styles} onClick={()=>props.toggleStateBool("openTv")}/>
					<$msg styles={styles} onClick={()=>props.toggleStateBool("openMessage")}/>
					<$addObject styles={styles}  onClick={()=>props.toggleStateBool("openObject")}/>
					<Drawer
						open={props.openHandLight}
						width="100%"
						>
						 <List>
							 <div style={{display : "flex", justifyContent: "space-between", height : "auto", borderBottom: "1px solid red"}} onClick={()=>props.toggleStateBool("openHandLight")}>
								 <h2 style={{maxWidth:"50%"}}>Lampe torche</h2>
								 <h2 style={{maxWidth:"50%"}}>FERMER X</h2>
							 </div>
							
							<ListItem 
                                primaryText={
                                     <div style={{width : "auto", height:"200px", display : "flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                         <div style={{fontSize : "2em", margin : "auto"}}>Allumer / Eteindre</div>
                                         <div style={{height:"40px", margin : "auto"}}>
                                          <Toggle  onToggle={props.turnFpsLight}/>  
                                          </div>
                                     </div>
                                }  
                                style={{width:"100%",fontWeight : "2em",  height:"200px"}}
                                
                            />
                             
							 <div style={{width:"100%", height:"200px"}}>
								  <Slider 
									   style={{width : "80%", margin:"auto", maxWidth:"400px"}}
									  min={-12}
									  max={-3}
									  step={0.5}
									  defaultValue={-12}
									  onChange={props.changeFpsLightAngle}/>
							 </div>
						  </List>
					</Drawer>
					<Drawer
						open={props.openSun}
						width="100%"
						>
						 <List>
							 <div style={{display : "flex", justifyContent: "space-between", height : "auto", borderBottom: "1px solid red"}} onClick={()=>props.toggleStateBool("openSun")}>
								 <h2 style={{maxWidth:"50%"}}>CIEL</h2>
								  <h2 style={{maxWidth:"50%"}}>FERMER X</h2>
							 </div>
                             <div style={{width:"100%", margin:"auto",  display:"flex", justifyContent:"center" }}>
                                <RaisedButton label="SUN RISE" primary={true} style={{margin : 12}} onClick={props.sunRise}/>
                                <RaisedButton label="SUN SET" primary={true} style={{margin: 12}} onClick={props.sunSet}/>
                            </div>
							 <div style={{width:"100%", height:"300px", display:"flex", justifyContent:"center" }}>
								  <Slider 
									  style={{height:"300px", margin:"auto"}}
									  min={-0.52}
									  max={-0.3}
									  step={0.005}
									  defaultValue={-0.52}
									  axis="y"
									  onChange={props.setSunInclination}/>
							 </div>
						  </List>
					</Drawer>
					<Drawer
						open={props.openTv}
						width="100%"
						>
						 <List>
							 <div style={{display : "flex", justifyContent: "space-between", height : "auto", borderBottom: "1px solid red"}} onClick={()=>props.toggleStateBool("openTv")}>
								 <h2 style={{maxWidth:"50%"}}>TV</h2>
								  <h2 style={{maxWidth:"50%"}}>FERMER X</h2>
							 </div>
							 
							 <ListItem primaryText={<h2>ALLUMER / ETEINDRE TV 1</h2>}   rightToggle={<Toggle onToggle={()=>props.turnTv(2)}/>} /> 
							 
							<RaisedButton primary={true} style={{margin : 12}} onClick={props.tvUp}
								 icon={<Left  color={"white"}/>}
								/>
                             
							<RaisedButton primary={true} style={{margin: 12}} onClick={props.tvDown}  icon={<Right  color={"white"}/>}/>
							<RaisedButton  primary={true} style={{margin: 12}} onClick={props.muteTv}  icon={<Mute  color={"white"}/>}/>
							 <Divider />
							 <ListItem primaryText={<h2>ALLUMER / ETEINDRE TV 2</h2>}  rightToggle={<Toggle onToggle={()=>props.turnTv(3)}/>} /> 
							 
							<RaisedButton primary={true} style={{margin : 12}} onClick={props.tvUp}
								 icon={<Left  color={"white"}/>}
								/>
							<RaisedButton primary={true} style={{margin: 12}} onClick={props.tvDown}  icon={<Right  color={"white"}/>}/>
							<RaisedButton  primary={true} style={{margin: 12}} onClick={props.muteTv}  icon={<Mute  color={"white"}/>}/>
                             <Divider />
						  </List>
					</Drawer>
					<Drawer
						open={props.openMessage}
						width="100%"
						>
						 <List>
							 <div style={{display : "flex", justifyContent: "space-between", height : "auto", borderBottom: "1px solid red"}} onClick={()=>props.toggleStateBool("openMessage")}>
								 <h2 style={{maxWidth:"50%"}}>ENVOYER UN MESSAGE</h2>
								 <h2 style={{maxWidth:"50%"}}>FERMER X</h2>
							 </div>
                             <div style={{width:"100%", height:"300px", display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                                 <TextField id="text-field" hintText="TAPEZ VOTRE MESSAGE ICI"/>
                                <RaisedButton label="ENVOYER" primary={true} style={{margin : 12}} onClick={props.sendMessage}/>
                            </div>

						  </List>
					</Drawer>
					<Drawer
						open={props.openObject}
						width="100%"
						>
						 <List>
							 <div style={{display : "flex", justifyContent: "space-between", height : "auto", borderBottom: "1px solid red"}} onClick={()=>props.toggleStateBool("openObject")}>
								 <h2 style={{maxWidth:"50%"}}>AJOUTER</h2>
								 <h2 style={{maxWidth:"50%"}}>FERMER X</h2>
							 </div>
							<div style={{width:"100%", display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
							 <SelectField
								  floatingLabelText="Selectionnez"
								 value={1}
								>
								  <MenuItem value={1} primaryText="UN CUBE" />
								</SelectField>
                             </div>
							 <div style={{width:"100%", height:"40px", display:"flex", justifyContent:"space-between"}}>
								 <div>X</div>
								  <Slider
									  id="posX"
									   style={{width : "80%", margin:"auto"}}
									  min={-10}
									  max={10}
									  step={0.5}
									  defaultValue={0}
									  onChange={props.changePosX}/>
							 </div>
							 <div style={{width:"100%", height:"40px", display:"flex", justifyContent:"space-between"}}>
								 <div>Y</div>
								  <Slider 
									  id="posY"
									   style={{width : "80%", margin:"auto"}}
									  min={-10}
									  max={10}
									  step={0.5}
									  defaultValue={0}
									  onChange={props.changePosY}
									  />
							 </div>
							 <div style={{width:"100%", height:"40px", display:"flex", justifyContent:"space-between"}}>
								 <div>Z</div>
								  <Slider 
									  id="posZ"
									   style={{width : "80%", margin:"auto"}}
									  min={-10}
									  max={10}
									  step={0.5}
									  defaultValue={0}
									  onChange={props.changePosZ}/>
							 </div>
                             <div style={{width:"100%", height:"150px", display:"flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                                 <RaisedButton label="AJOUTER" primary={true} style={{margin : 12}} onClick={props.addObject}/>
                             </div>

						  </List>
					</Drawer>
				</div>
            );
        }
        $CbDemoCommands_Template.propTypes = {

        };
        return $CbDemoCommands_Template
    }
}
    