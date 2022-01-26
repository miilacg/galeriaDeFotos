import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';

import { AlbunsCollection } from '../../db/AlbunsCollection';

import { CardAlbum } from '../components/CardAlbum/CardAlbum'
import { FormAlbum } from '../components/FormAlbum/FormAlbum';
import { Header } from '../components/Header/Header';

import { albumStyle } from './styles/AlbunsStyle';


export function Albuns() {
  const style = albumStyle();

  const [openFormAlbum, setOpenFormAlbum] = useState(false);

  const user = useTracker(() => Meteor.user());
  const { albuns, isLoading } = useTracker(() => {
    const noDataAvailable = { albuns: [] };
    if (!Meteor.user()) {
      return noDataAvailable;
    }

    const handler = Meteor.subscribe('albuns');
    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const albuns = AlbunsCollection.find({ createdby: user._id }, { sort: { titulo: 1 }}).fetch();

    return { albuns };
  });

  const handleOpenFormAlbum = () => {
    setOpenFormAlbum(true);
  };


  return (
    <div>
      { !isLoading && user ? (
        <>
          <Header page='album' user={ user }/>

          <div className={ style.container }>
            { albuns.map(album => ( 
              <CardAlbum 
                descricao={ album.descricao }
                titulo={ album.titulo }
              />
            )) }            
          </div>

          { openFormAlbum && <FormAlbum setOpenFormAlbum={ setOpenFormAlbum }/> }
          
          <Button className={ style.botao } variant="contained" onClick={ handleOpenFormAlbum }>Criar novo álbum</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}