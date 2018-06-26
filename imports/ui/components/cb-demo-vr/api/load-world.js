const loadWorld=(self)=>{
	return [
					
					{
						url : '3d/world/world-floor.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : false,
						smooth : true,
						mat : self.matLava1,
						/*lights : [{
							type : "PointLight",
							pos : [0, 1, 0],
							color : 0xffffff,
							intensity : 1,
							distance : 50,
							decay : 0.1,
							animation :(light, time)=>{
								light.position.z = Math.cos(time*0.1+360/5)*100;
								light.position.x = Math.sin(time*0.1+360/5)*100;
								light.penumbra=0.5
							}
						}],*/
					},
					{
						url : '3d/world/world-trb.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matRed1
					},
					{
						url : '3d/world/world-center.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBrick2
					},
					/*{
						url : '3d/world/world-lava.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matLava2
					},*/
					{
						url : '3d/world/world-grass.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matGrass1
					},
					{
						url : '3d/world/world-grass-wall.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBrick5
					},
					{
						url : '3d/world/world-grass.json',
						pos : [185, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matGrass1
					},
					{
						url : '3d/world/world-grass-wall.json',
						pos : [185, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBrick5
					},
					{
						url : '3d/world/world-ootb.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBlue1
					},
					{
						url : '3d/world/world-photos.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matPhoto1
					},
					{
						url : '3d/world/ico.json',
						pos : [0, -200, 0],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.position.x=1100*Math.cos(time*0.1)
							obj.position.z=1100*Math.sin(time*0.1)
						}
					},
/*					{
						url : '3d/world/ico.json',
						pos : [0, 1, 0],
						scale:0.1,
						dbs : true,
						smooth : true,
						mat : self.matMagma1,
						animation : (obj, time)=>{
							obj.position.x=150*Math.cos(time*0.2)
							obj.position.z=150*Math.sin(time*0.2)
						}
					},*/
					{
						url : '3d/world/ico.json',
						pos : [0, 70, 0],
						scale:0.05,
						dbs : true,
						smooth : true,
						mat : self.matMagma1,
						animation : (obj, time)=>{
							obj.position.x=250*Math.cos(-time*0.1)
							obj.position.z=250*Math.sin(-time*0.1)
						}
					},
					{
						url : '3d/world/ico.json',
						pos : [0, 30, 0],
						scale:0.12,
						mat : self.matMagma1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.position.x=300*Math.cos(-time*0.5)
							obj.position.z=300*Math.sin(-time*0.5)
						}
					},
					/*{
						url : '3d/cb/cb.json',
						pos : [0, 250, 0],
						scale:3,
						mat : self.matMagma1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.1
						}
					},*/
					/*{
						url : '3d/world/world-deco.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matRed1
					},*/
					{
						url : '3d/world/world-cube.json',
						pos : [60, 20, -280],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton2
					},
					{
						url : '3d/world/world-cube.json',
						pos : [-60, 20, -280],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton2,
					},
					{
						url : '3d/world/world-cube.json',
						pos : [60, 20, -360],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matEcofib1
					},
					{
						url : '3d/world/world-cube.json',
						pos : [-60, 20, -360],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matEcofib1,
					},
					{
						url : '3d/world/world-cube.json',
						pos : [60, 20, -440],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton4
					},
					{
						url : '3d/world/world-cube.json',
						pos : [-60, 20, -440],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton4,
					},
					{
						url : '3d/world/world-cube.json',
						pos : [60, 20, -320],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton5
					},
					{
						url : '3d/world/world-cube.json',
						pos : [-60, 20, -320],
						scale:1,
						dbs : true,
						smooth : true,
						animation : (obj, time)=>{
							obj.rotation.y=time*0.2
						},
						mat : self.matBeton5,
					},
					{
						url : '3d/world/world-step.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matGrass1
					},
					{
						url : '3d/world/world-step2.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBeton2
					},
					{
						url : '3d/world/world-step3.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matGrass1
					},
					{
						url : '3d/world/world-step4.json',
						pos : [0, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBeton2
					},
					/*{
						url : '3d/world/brad.json',
						pos : [20, 0, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBlue1
					},*/
		
		]
}

export default loadWorld