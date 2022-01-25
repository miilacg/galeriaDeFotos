import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { headerStyle } from './HeaderStyle';


export function Header({ page, setPage, user }) {
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <Typography variant='p'>Olá, { user.username }</Typography>
              <Button variant='transparent' style={{ padding: '.2rem 0 0', margin: '0', minWidth: 'auto' }} onClick={ logout }>Sair</Button>
            </div>
          )
        )}		   
      </div>
    </header> 
  )
}