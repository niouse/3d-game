 const loadMaterials = (self)=>{
	 self.matRed1=new THREE.MeshToonMaterial({	
					color:"red",
					emissive:0x000000,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
		 			shininess:60,
		 			emissive : "red",
		 			emissiveIntensity : 0.5
				})
	 self.matBlue1=new THREE.MeshToonMaterial({	
					color:"blue",
					emissive:0x000000,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
		 			shininess:60,
				})
	 
	/* self.matBrad=new THREE.MeshPhongMaterial({	
					map : self.TextBrad,
				})*/
	 
	 
	 
	 
	 
	 self.matBeton1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBeton1,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBeton1,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
	 self.matBeton2=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBeton2,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBeton2,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
	  self.matBeton3=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBeton3,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBeton3,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
	   self.matBeton4=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBeton4,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBeton4,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
	   self.matBeton5=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBeton5,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBeton5,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
	 self.matBrick1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick1,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick1,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
					side:THREE.DoubleSide,
				})
				self.matBrick2=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick2,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick2,
					refractionRatio:0.98,
					shininess:40,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				self.matBrick3=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick3,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick3,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matBrick3=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick3,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick3,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matBrick4=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick4,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick4,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matBrick5=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextBrick5,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextBrick5,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matCrepi1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextCrepi1,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextCrepi1,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matEcofib1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextEcofib1,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextEcofib1,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matGold2=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextGold2,
					bumpScale:0.1,
					color:0x777777,
					emissive:0x000000,
					map : self.TextGold2,
					refractionRatio:0.98,
					shininess:60,
					specular:0x777777,
					specularMap:null,
					transparent:false,
				})
				
				self.matGrass1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextGrass1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextGrass1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matLava1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					color:0x444444,
					emissiveMap : self.TextLava1,
					emissive:0xffffff,
					emissiveIntensity : 0,
					bumpMap: self.TextLava1,
					bumpScale:0.1,
					map : self.TextLava1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matLava2=new THREE.MeshPhongMaterial({	
					blendDst:205,
					color:0x444444,
					emissiveMap : self.TextLava2,
					emissive:0xffffff,
					bumpMap: self.TextLava2,
					bumpScale:0.1,
					map : self.TextLava2,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matLava4=new THREE.MeshPhongMaterial({	
					blendDst:205,
					color:0x444444,
					emissiveMap : self.TextLava4,
					emissive:0xffffff,
					bumpMap: self.TextLava4,
					bumpScale:0.1,
					map : self.TextLava4,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matLava5=new THREE.MeshPhongMaterial({	
					blendDst:205,
					color:0x444444,
					emissiveMap : self.TextLava5,
					emissive:0xffffff,
					bumpMap: self.TextLava5,
					bumpScale:0.1,
					map : self.TextLava5,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matMagma1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextMagma1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextMagma1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matMetal1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextMetal1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextMetal1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matMisc1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextMisc1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextMisc1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matPapierPeint1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextPapierPeint1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextPapierPeint1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matPierres1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextPierres1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextPierres1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matPoly1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextPoly1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextPoly1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matStrip1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextStrip1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextStrip1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matTerra1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextTerra1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextTerra1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matTole1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextTole1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextTole1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matWood1=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextWood1,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextWood1,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matWood2=new THREE.MeshPhongMaterial({	
					blendDst:205,
					bumpMap: self.TextWood2,
					bumpScale:0.1,
					color:0x444444,
					emissive:0x000000,
					map : self.TextWood2,
					refractionRatio:0.98,
					shininess:10,
					specular:0x000000,
					specularMap:null,
					transparent:false,
				})
				
				self.matPhoto1=new THREE.MeshPhongMaterial({	
					color:0x777777,
					emissive:0x000000,
					map : self.TextPhoto1,
				})
	 
 }
 
 export default loadMaterials