import React from 'react';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { modalFotoStyle } from './ModalFotoStyle';



export function ModalFoto({ foto, setOpenFoto }) {
  const classes = modalFotoStyle();

  const handleClose = () => {
    setOpenFoto(false);
  };


  return (
    <Modal
			open={ setOpenFoto }
			onClose={ handleClose }
		>
      <div className={ classes.modal }>
        <Typography>{ foto.titulo }</Typography>
        <img
          src={ foto.foto }
          alt= { foto.descricao }
          className={ classes.imagem }
        />
        <Typography variant='p'>{ foto.descricao }</Typography>
      </div>      
		</Modal>
  )
}
