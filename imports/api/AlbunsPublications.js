import { Meteor } from 'meteor/meteor';
import { AlbunsCollection } from '/imports/db/AlbunsCollection';


Meteor.publish('albuns', function publishAlbum() { // não pode usar o => pq ta usando o this dentro da função
	return AlbunsCollection.find({ userId: this.userId });
});