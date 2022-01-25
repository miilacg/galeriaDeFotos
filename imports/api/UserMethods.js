import { Meteor } from 'meteor/meteor';


Meteor.publish('users', function () { 
	return Meteor.users.find({ _id: this.userId });
}); 