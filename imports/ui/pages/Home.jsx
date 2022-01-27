import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Header } from '../components/Header/Header';

import { homeStyle } from './styles/HomeStyle';



export function Home() {
  const style = homeStyle();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const [page, setPage] = useState('login');

  const [error, setError] = useState('');
   

  async function handleSubmit(event) { 
    event.preventDefault();

    if(!password || !email) {
      return;
    }

    if(page == 'login') {
      Meteor.loginWithPassword(email, password, function (error) {
				if(!error) {
					navigate('/galeria');
				} else {
          alert(error);
          setError('Erro!');
				}
			});
    } else {
      Meteor.call('users.insert', username, password, email, function (error) {
				if(!error) {
					navigate('/galeria');
				} else {
          alert(error);
          setError('Erro!');
				}
			})   
    } 

    setEmail('');
    setUsername('');
		setPassword('');
  }
  

  return (
    <div className={ style.app }>
      <Header setPage={ setPage } page={ page }/>
      
      <div className={ style.main }>      
        <form onSubmit={ handleSubmit } className={ style.form }>
          <Typography variant='h4'>{ page === 'login' ? 'Autentique-se' : 'Faça seu cadastro' }</Typography>

          { page === 'signUp' && (
            <TextField						
              type="text"
              placeholder="Nome"
              value={ username }				
              onChange={ (e) => setUsername(e.target.value) }
              required
            />
          )}

          <TextField						
            type="text"
            placeholder="E-mail"
            value={ email }				
            onChange={ (e) => setEmail(e.target.value) }
            required
          />

          <TextField						
            type="password"
            placeholder="Senha"
            value={ password }				
            onChange={ (e) => setPassword(e.target.value) }
            required
          />		

          <Button style={{ margin: '2rem 0 0' }} type='submit' variant="contained" size='large'>{ page === 'login' ? 'Entrar' : 'Concluir' }</Button>
        </form>	 

        { error && <h1>{ error } </h1> }
      </div>
    </div>
  )
}