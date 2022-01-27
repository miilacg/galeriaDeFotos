import { Meteor } from 'meteor/meteor';
import { FotosCollection } from '/imports/db/FotosCollection';


Meteor.publish('fotos', function publishAlbum() { // não pode usar o => pq ta usando o this dentro da função
	return FotosCollection.find({ createdby: this.userId });
});