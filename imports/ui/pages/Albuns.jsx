import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';

import { CreateAlbum } from '../components/CreateAlbum/CreateAlbum';
import { Header } from '../components/Header/Header';


export function Albuns() {
  const user = useTracker(() => Meteor.user());

  const [openCreateAlbum, setOpenCreateAlbum] = useState(false);


  const handleOpenCreateAlbum = () => {
    setOpenCreateAlbum(true);
  };


  return (
    <div>
      { user ? (
        <>
          <Header page='album' user={ user }/>

          { openCreateAlbum && <CreateAlbum setOpenCreateAlbum={ setOpenCreateAlbum }/> }
          
          <Button variant="contained" onClick={ handleOpenCreateAlbum }>Criar novo álbum</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}