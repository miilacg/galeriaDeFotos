import { Meteor } from 'meteor/meteor';
import { AlbumCollection } from '/imports/db/AlbumCollection';


Meteor.publish('album', function publishAlbum() { // não pode usar o => pq ta usando o this dentro da função
	return AlbumCollection.find({ userId: this.userId });
});