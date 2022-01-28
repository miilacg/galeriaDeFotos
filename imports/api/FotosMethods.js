import { check } from 'meteor/check';
import { FotosCollection } from '../db/FotosCollection';



Meteor.methods ({
	'fotos.insert'(foto, albumId, titulo, descricao, dataDeAquisicao, tamanho, cor) {
		check(foto, String);
		check(albumId, String);
		check(titulo, String);
    check(descricao, String);
		check(dataDeAquisicao, String);
    check(tamanho, Number);
		check(cor, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		FotosCollection.insert({
			foto,
			albumId,
			titulo,
      descricao,
      dataDeAquisicao,
      tamanho,
      cor,
			createdAt: new Date,			
			createdby: this.userId
		});
	},

	'fotos.remove'(fotoId) {
		check(fotoId, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		// verificando a permissão do usuario
		const foto = FotosCollection.findOne({ _id: fotoId, createdby: this.userId });

		if(!foto) {
			throw new Meteor.Error('Access denied.');
		}

		FotosCollection.remove(fotoId);
	},
	
	'fotos.edit'(fotoId, foto, titulo, descricao, dataDeAquisicao, tamanho, cor) {
		check(fotoId, String);
		check(foto, String);
		check(titulo, String);
    check(descricao, String);
		check(dataDeAquisicao, String);
    check(tamanho, Number);
		check(cor, String);

		if (!this.userId) {
			throw new Meteor.Error('Você não tem autorização.');
		}

		// verificando a permissão do usuario
		const fotografia = FotosCollection.findOne({ _id: fotoId, createdby: this.userId });

		if(!fotografia) {
			throw new Meteor.Error('Access denied.');
		}

		FotosCollection.update(fotoId, {
			$set: {
				foto: foto,
				titulo: titulo,
        descricao: descricao,
        dataDeAquisicao: dataDeAquisicao,
        tamanho: tamanho,
        cor: cor,
				updatedat: new Date,
				updatedby: this.userId
			}
		});
	}
});