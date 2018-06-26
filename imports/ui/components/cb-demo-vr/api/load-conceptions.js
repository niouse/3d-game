const loadConceptions=(self)=>{
	return [
					
					{
						url : '3d/boucheuse/boucheuse-corps.json',
						pos : [0, 4, 0],
						scale:20,
						dbs : false,
						smooth : true,
						mat : self.matGold2,
						animation :(obj, time)=>{
							obj.rotation.y = time*0.3
							//obj.position.x = Math.sin(time*0.3+360/5)*40;
						},
						lights : [{
							type : "PointLight",
							name : "turningLight1",
							pos : [0, 20, 0],
							color : 0xffffff,
							intensity : 0,
							distance : 50,
							decay : 0.1,
							animation :(light, time)=>{
								light.position.z = -Math.cos(time*0.3+360/5)*40;
								light.position.x = Math.sin(time*0.3+360/5)*40;
							}
						},
						{
							type : "PointLight",
							name : "turningLight2",
							pos : [0, 20, 0],
							color : 0xffffff,
							intensity : 0,
							distance : 50,
							decay : 0.1,
							animation :(light, time)=>{
								light.position.z = -Math.cos(3.14+time*0.3+360/5)*40;
								light.position.x = Math.sin(3.14+time*0.3+360/5)*40;
							}
						}],
					},
					{
						url : '3d/secu/rmi.json',
						pos : [0, 3, 0],
						scale:1,
						dbs : false,
						smooth : true,
						mat : self.matBeton2,
					},
					{
						url : '3d/secu/rms.json',
						pos : [0, 3, 0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBeton3,
					},
					/*{
						url : '3d/secu/rms2.json',
						pos : [0, 3, 0],
						scale:1,
						dbs : false,
						smooth : true,
						mat : self.matBeton2,
					},*/
				    {
						url : '3d/goulotte/goulotte-casing.json',
						pos : [-200, 0, 200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matMetal1
					},
					{
						url : '3d/goulotte/goulotte-beton.json',
						pos : [-200, 0, 200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBeton1
					},
					{
						url : '3d/four-chaux/four-chaux-casing.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matMetal1
					},
					{
						url : '3d/four-chaux/four-chaux-briques.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBriques1
					},
					{
						url : '3d/four-chaux/four-chaux-briques2.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBriques2
					},
					{
						url : '3d/four-chaux/four-chaux-beton.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBeton1
					},
					{
						url : '3d/four-chaux/four-chaux-prefa.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBeton3
					},
					{
						url : '3d/four-chaux/four-chaux-arches.json',
						pos : [-150,-2,-200],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBriques3
					},
                    {
						url : '3d/voutain/voutain.json',
						pos : [100, 200,-450],
						scale:100,
						dbs : true,
						smooth : true,
						mat : self.matBriques3
					},
                    {
						url : '3d/four-selas/four-selas-casing.json',
						pos : [150, 0,-400],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matMetal1
					},
                    {
						url : '3d/four-selas/four-selas-briques.json',
						pos : [150, 0,-400],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matBrick1
					},

                    {
						url : '3d/four-selas/four-selas-sole-ecofib.json',
						pos : [150, 0,-400],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matEcofib1
					},
                    {
						url : '3d/four-selas/four-selas-parts1.json',
						pos : [150, 0,-400],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matEcofib1
					},
                     {
						url : '3d/four-selas/four-selas-parts2.json',
						pos : [150, 0,-400],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matEcofib1
					},
                    {
						url : '3d/rm/rm-casing.json',
						pos : [0,0,0],
						scale:1,
						dbs : true,
						smooth : true,
						mat : self.matMetal1
					},
                  /*  {
						url : '3d/four-selas/four-selas.json',
						pos : [120, 0,80],
						scale:10,
						dbs : true,
						smooth : true,
						mat : self.matBriques3
					},*/
		]
}

export default loadConceptions