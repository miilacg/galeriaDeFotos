import React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import { modalFotoStyle } from './ModalFotoStyle';



export function ModalFoto({ foto, setOpenFoto }) {
  const classes = modalFotoStyle();

  const handleClose = () => {
    setOpenFoto(false);
  };

  async function deleteFoto(_id) {
    if(window.confirm('Tem certeza que você deseja excluir a foto?')) {
      await Meteor.call('fotos.remove', _id);
      setOpenFoto(false);
    }  
  }


  return (
    <Modal
			open={ setOpenFoto }
			onClose={ handleClose }
      style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}
		>
      <div className={ classes.container }>
        <div className={ classes.modal }>
          <Typography>{ foto.titulo }</Typography>
          <img
            src={ foto.foto }
            alt= { foto.descricao }
            className={ classes.imagem }
          />
          <Typography variant='p'>{ foto.descricao }</Typography>
        </div>

        <Button 
          variant='transparent' 
          style={{ position: 'fixed', top: '4%', right: '4%', color: 'red' }}
          onClick={ () => deleteFoto(foto._id) }
        >
          Excluir foto
        </Button>
      </div>      
		</Modal>
  )
}
