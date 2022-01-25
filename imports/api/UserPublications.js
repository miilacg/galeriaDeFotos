import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';



Meteor.methods ({
	'users.insert'(username, password, email) {
		check(username, String);
		check(password, String);
		check(email, String);	

    if(!Accounts.findUserByEmail(email)) {
			Accounts.createUser({
				username: username,
				password: password,
        email: email
			});
		} else {
			throw new Meteor.Error('E-mail já existe');
		}
	},
	
	'users.edit'(username, password, email) {
		check(username, String);
		check(password, String);
		check(email, String);	

		if (!this.userId) {
			throw new Meteor.Error('Not authorized.');
		}

		const user = Meteor.users.findOne({ _id: this.userId });
			
		if(user.username != username) {
			if(!Accounts.findUserByUsername(username)) {
				Meteor.users.update({ _id: this.userId }, {
					$set: {
						username: username,
						email: email,
						date: date,
						gender: gender,
						company: company, 
						photo: photo,
					},
				});
				Accounts.setPassword(this.userId, password);
			} else {
				throw new Meteor.Error('Usuário já existe');
			}	
		} else { // se o username for igual ao user não precisa alterar		
			Meteor.users.update({ _id: this.userId }, {
				$set: {
					email: email,
					date: date,
					gender: gender,
					company: company, 
					photo: photo,
				},
			});
			Accounts.setPassword(this.userId, password);
		}			
	},
	
	'users.remove'(userId) {
		check(userId, String);

		if (!this.userId) {
			throw new Meteor.Error('Not authorized.');
		}

		Meteor.users.remove({ _id: userId });
	}
})