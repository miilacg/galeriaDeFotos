import { check } from 'meteor/check';
import { AlbunsCollection } from '../db/AlbunsCollection';



Meteor.methods ({
	'albuns.insert'(titulo, descricao) {
		check(titulo, String);
		check(descricao, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		AlbunsCollection.insert({
			titulo,
			descricao,
			createdAt: new Date,			
			createdby: this.userId
		});
	},

	'albuns.remove'(albumId) {
		check(albumId, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		// verificando a permissão do usuario
		const album = AlbunsCollection.findOne({ _id: albumId, createdby: this.userId });

		if(!album) {
			throw new Meteor.Error('Access denied.');
		}

		AlbunsCollection.remove(albumId);
	},
	
	'albuns.edit'(albumId, titulo, descricao) {
		check(albumId, String);
		check(titulo, String);
		check(descricao, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		// verificando a permissão do usuario
		const album = AlbunsCollection.findOne({ _id: albumId, createdby: this.userId });

		if(!album) {
			throw new Meteor.Error('Access denied.');
		}

		AlbunsCollection.update(albumId, {
			$set: {
				titulo: titulo,
				descricao: descricao,
				updatedat: new Date,
				updatedby: this.userId
			}
		});
	}
});