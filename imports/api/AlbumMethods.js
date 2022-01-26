import { check } from 'meteor/check';
import { AlbumCollection } from '../db/AlbumCollection';



Meteor.methods ({
	'album.insert'(titulo, descricao) {
		check(titulo, String);
		check(descricao, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		AlbumCollection.insert({
			titulo,
			descricao,
			createdAt: new Date,			
			createdby: this.userId
		});
	}
});