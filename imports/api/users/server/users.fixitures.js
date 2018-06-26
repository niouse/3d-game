/*loadUsers = function(){
	if ( Meteor.users.find().count() === 0 ) {
		 Accounts.createUser({
			username: 'admin',
			email: 'admin@admin',
			createdAt: new Date(),
			password: 'admin',
			type: "admin",
			firstName : "admin",
			lastName : "admin",
			status : "ready",
			photo : "comon/defaultProfile.png",
			"location":"Toulouse",
			"lng":[43.457662, 1.290136],
			"function":"admin",
			"tel":"479898745",
			"port":"0689654578",
			status : "notReady",
		});
	}
}*/

import usersDefault from "./users.default.js"

loadUsers = function(){
	 if (Meteor.users.find({}).fetch().length === 0) {
		 usersDefault.forEach((item, index)=>{
	     	Accounts.createUser(usersDefault[index]); 
		 })
   }
}
