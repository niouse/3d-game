Meteor.methods({
	register: function(options) {
		/*let type = Meteor.user() ? Meteor.user().type : 'visitor';
		if(type !== 'admin'){
			throw new Error("access denied");
		}*/
		user = Accounts.createUser(options);
	}
});


Meteor.methods({
	getUsersKeys : function(){
		var usersKeys = [];
//		console.log(Meteor.users.findOne({}))
//		console.log(typeof(Meteor.users.findOne({})))
		var temp = Meteor.users.findOne({});
		//var temp2 = Object.assign({}, temp, temp.profile)
		
		delete temp._id;
		delete temp.profile
		//delete temp.services
		for (var key in temp2){
			usersKeys.push(key)
		};
		return usersKeys;
	}
})

Meteor.methods({
  removeUser: function(data) {
	  try {
		 if(Meteor.users.find({_id: this.userId}).fetch()[0].type !== 'admin'){
			  throw new Error("access denied");
		  }
		 // console.log(data);
		  Meteor.users.remove({_id:data});

	  } catch (e) {
		  throw e
	  }
 }
});