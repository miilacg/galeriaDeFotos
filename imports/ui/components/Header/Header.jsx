import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { headerStyle } from './HeaderStyle';


export function Header({ page, setPage }) {
  const style = headerStyle();
  
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    Meteor.logout();    
  }

  return (
    <header className={ style.appBar }>
      <div className={ style.appHeader }>						
        <Typography variant='h3'> Meus álbuns de foto </Typography>
        
        { page === 'login' ? (
          <Button variant='transparent' onClick={ () => setPage('signUp') }>Criar conta</Button>
        ) : (
          page === 'signUp' ? (
            <Button variant='transparent' onClick={ () => setPage('login') }>Fazer login</Button>
          ) : (
            <Button variant='transparent' onClick={ logout }>Sair</Button>
          )
        )}		   
      </div>
    </header> 
  )
}