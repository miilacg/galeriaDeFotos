import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';

import { FormAlbum } from '../components/FormAlbum/FormAlbum';
import { Header } from '../components/Header/Header';


export function Albuns() {
  const user = useTracker(() => Meteor.user());

  const [openFormAlbum, setOpenFormAlbum] = useState(false);


  const handleOpenFormAlbum = () => {
    setOpenFormAlbum(true);
  };


  return (
    <div>
      { user ? (
        <>
          <Header page='album' user={ user }/>

          { openFormAlbum && <FormAlbum setOpenFormAlbum={ setOpenFormAlbum }/> }
          
          <Button variant="contained" onClick={ handleOpenFormAlbum }>Criar novo álbum</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}