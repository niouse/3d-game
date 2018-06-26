var Lights =  [	]

var Light = {
		type : "PointLight",
		pos : [0, 1, 0],
		color : 0xfff000,
		intensity : 1,
		distance : 50,
		decay : 0.1,
	}

let colors = [
	0xffffff,
	0x000fff,
	0xfff000,
	0x00ff00,
	0xff00ff,
]


export default  getLights=()=>{
	for(let i=0; i<1; i++){
		let newLight=Object.assign({}, Light);
		newLight.pos=[0, (10+i*30), 0]
		newLight.color=colors[i]
		newLight.animation = (light, time)=>{
			light.position.z = Math.cos(time*0.1+360/5*i)*100;
			light.position.x = Math.sin(time*0.1+360/5*i)*100;
			light.penumbra=0.5
		}
		
		Lights.push(newLight)
		
	}
	return Lights
}
