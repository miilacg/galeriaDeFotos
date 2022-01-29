import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Alert from '@mui/material/Alert';

import { formularioStyle } from './FormularioStyle';



export function FormFoto({ album, setOpenFormFoto }) {
	const classes = formularioStyle();

  const [erroData, setErroData] = useState(false);

  const [cor, setCor] = useState('');
  const [dataDeAquisicao, setDataDeAquisicao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [tamanho, setTamanho] = useState(0);
  const [titulo, setTitulo] = useState('');


  const handleClose = () => {
    setOpenFormFoto(false);
  };

  function uploadImg(e) {
    var reader = new FileReader();
    reader.onload = function (e) {
			setFoto(e.target.result);
    };

    const data = e.target.files[0].lastModifiedDate;    
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();
    const hour = String(data.getHours()).padStart(2, '0');
    const minute = String(data.getMinutes()).padStart(2, '0');

    setDataDeAquisicao(year + '-' + month + '-' + day + 'T' + hour + ':' + minute);
    setTamanho(e.target.files[0].size);
    
    reader.readAsDataURL(e.target.files[0]);
	};


  const handleSubmit = e => {
		e.preventDefault();

		if(!cor || !dataDeAquisicao || !descricao || !foto || !titulo) return;

    const dataHoje = new Date();
		const dataInserida = new Date(dataDeAquisicao);

    if(dataInserida.getTime() >= dataHoje.getTime()) {
      setErroData(true);
			return; 
		}

    setErroData(false);
    Meteor.call('fotos.insert', foto, album._id, titulo, descricao, dataDeAquisicao, tamanho, cor);	
  
		setCor('');
		setDataDeAquisicao('');
    setDescricao('');
		setFoto('');
    setTamanho('');
		setTitulo('');
		handleClose();
	};

  
	return (		
		<Modal
			open={ setOpenFormFoto }
			onClose={ handleClose }
		>
			<div className={ classes.modal } style={{ width: '50%' }}>
				<Typography variant='h4'>Preencha os campos</Typography>

        <form onSubmit={ handleSubmit } className={ classes.formulario }>          
          <input
            id="img-input" 
            onChange={ uploadImg } 
            accept="image/png, image/PNG, image/jpeg, image/JPEG, image/jpg, image/JPG" 
            type="file" 
            name="imagem" 
          />

          <TextField					
            value={ titulo }
            label="Título da foto"
            type="text"
            onChange={ (e) => setTitulo(e.target.value) }
            required
          />

          <TextField					
            value={ descricao }
            label="Descrção da foto"
            type="text"
            onChange={ (e) => setDescricao(e.target.value) }
            required
            multiline
          />

          <TextField
            id="datetime-local"
            label="Data e hora em que a foto foi tirada"
            type="datetime-local"
            value={ dataDeAquisicao }
            onChange={ (e) => setDataDeAquisicao(e.target.value) } 
            InputLabelProps={{
              shrink: true,
            }}
            required
          />

          { erroData && <Alert severity="error">Data em que a foto foi tirada deve ser anterior a data atual</Alert> }

          <TextField					
            value={ cor }
            label="Cor predominante da foto"
            type="color"
            onChange={ (e) => setCor(e.target.value) }
            required
          />

          <div className={ classes.botoes }>
            <Button style={{ margin: '1rem 0 0' }} variant="contained" onClick={ () => handleClose() }>Fechar</Button>
            <Button style={{ margin: '1rem 0 0' }} type='submit' variant="contained">Adicionar foto</Button>
          </div>
        </form>	
			</div>
		</Modal>				
	);
};