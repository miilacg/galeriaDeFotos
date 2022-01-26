import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { formularioStyle } from './FormularioStyle';



export function FormAlbum({ setOpenFormAlbum }) {
	const classes = formularioStyle();

  const [descricao, setDescricao] = useState();
  const [titulo, setTitulo] = useState();


	const handleClose = () => {
    setOpenFormAlbum(false);
  };

  const handleSubmit = e => {
		e.preventDefault();

		if(!titulo || !descricao) return;

		Meteor.call('albuns.insert', titulo, descricao);				

		setDescricao('');
		setTitulo('');
		handleClose();
	};

  
	return (		
		<Modal
			open={ setOpenFormAlbum }
			onClose={ handleClose }
		>
			<div className={ classes.modal }>
				<Typography variant='h4'>Preencha os campos</Typography>

				<form onSubmit={ handleSubmit } className={ classes.formulario }>
          <TextField					
            value={ titulo }
            label="Título do álbum"
            type="text"
            onChange={ (e) => setTitulo(e.target.value) }
            required
          />

          <TextField					
            value={ descricao }
            label="Descrção do álbum"
            type="text"
            onChange={ (e) => setDescricao(e.target.value) }
            required
          />

          <div className={ classes.botoes }>
            <Button style={{ margin: '1rem 0 0' }} variant="contained" onClick={ () => handleClose() }>Fechar</Button>
            <Button style={{ margin: '1rem 0 0' }} type='submit' variant="contained">Criar álbum</Button>
          </div>
        </form>	
			</div>
		</Modal>				
	);
};