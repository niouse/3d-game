import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';
import './../imports/api/tasks/server';
import './../imports/api/cubes/server';
import  './../imports/startup/server';

import "/imports/api/streamer-config.js"

Meteor.startup(() => {
loadUsers();
loadCubes();
});
