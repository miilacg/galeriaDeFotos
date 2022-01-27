import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { formularioStyle } from './FormularioStyle';



export function FormFoto({ setOpenFormFoto }) {
	const classes = formularioStyle();

	const { albumId } = useParams();

  const [cor, setCor] = useState('');
  const [dataDeAquisicao, setDataDeAquisicao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [tamanho, setTamanho] = useState(0);
  const [titulo, setTitulo] = useState('');


	const handleClose = () => {
    setOpenFormFoto(false);
  };

  function uploadImg (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
			setFoto(e.target.result);
    };
    
    const data = e.target.files[0].lastModifiedDate;
    
    const tempDate = data.getTime();
    const day = String(data.getDate()).padStart(2, '0');
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();
    const hour = String(data.getHours()).padStart(2, '0');
    const minute = String(data.getMinutes()).padStart(2, '0');

    setDataDeAquisicao(year + '-' + month + '-' + day + 'T' + hour + ':' + minute)
    setTamanho(e.target.files[0].size)
    reader.readAsDataURL(e.target.files[0]);
	};


  const handleSubmit = e => {
		e.preventDefault();

		if(!cor || !dataDeAquisicao || !descricao || !foto || !titulo) return;

    const tempCurrentDate = new Date();
		const tempDateSelected = new Date(dataDeAquisicao);

    if(tempCurrentDate.getTime() >= tempDateSelected.getTime()) {
      console.log("Data em que a foto foi tirada é superior a data atual. Digite uma data valida")
			return; 
		}   

		Meteor.call('fotos.insert', foto, albumId, titulo, descricao, dataDeAquisicao, tamanho, cor);				

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
            className={ classes.textField }
            required
          />

          <TextField					
            value={ descricao }
            label="Descrção da foto"
            type="text"
            onChange={ (e) => setDescricao(e.target.value) }
            className={ classes.textField }
            required
            multiline
          />

          <TextField
            id="datetime-local"
            label="Data e hora em que a foto foi tirada"
            type="datetime-local"
            value={ dataDeAquisicao }
            onChange={ (e) => setDataDeAquisicao(e.target.value) } 
            className={ classes.textField }
            InputLabelProps={{
              shrink: true,
            }}
            required
          />

          <TextField					
            value={ titulo }
            label="Cor predominante da foto"
            type="color"
            onChange={ (e) => setCor(e.target.value) }
            className={ classes.textField }
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