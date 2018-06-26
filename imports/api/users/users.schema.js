export const usersSchema = new SimpleSchema({
  username: {
    type: String,
    label: "User pseudo",
    max: 20,
	min : 3
  },
  firstName: {
    type: String,
    label: "User first name",
	optional: true, 
	max: 20,
	min : 0
  },
  lastName: {
    type: String,
    label: "User last name",
	optional: true,
	max: 20,
	min : 0,
	autoValue : function(){
		if(this.isSet){return}
		else {return this.field('username').value}
	}
  },
  password : {
	type: String,
    label: "User password",
	max: 20,
	min : 4  
  },
  email : {
	 type : String,
	  regEx : SimpleSchema.RegEx.Email,
  },
  createdAt: {
    type: Date,
    label: "Date of user creation",
	optional: true,
  },
  type : {
	  type : String,
	  allowedValues : ["admin", "user", "visitor"],
	  defaultValue : "user",
	  optional: true,
  },
  location : {
	type: String,
    label: "User location",
	optional: true,
  },
  coord : {
	  type : [Number],
	  optional: true,
	  minCount: 1,
      maxCount: 2  
  },
  function: {
    type: String,
    label: "User function",
	optional: true,
	max: 20,
	min : 3
  },
  tel : {
	type : String,
	optional: true,
	max: 20,
	min : 10 
  },
  port : {
	type : String,
	optional: true,
	max: 20,
	min : 10  
  },
  status : {
	 type : String,
	 allowedValues : ["admin", "user", "visitor"],
	 optional: true,
  }
});

