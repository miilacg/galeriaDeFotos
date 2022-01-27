import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { AlbunsCollection } from '../../db/AlbunsCollection';

import { FormAlbum } from '../components/Formulario/FormAlbum';
import { Header } from '../components/Header/Header';

import { galeriaStyle } from './styles/GaleriaStyle';



export function Galeria() {
  const style = galeriaStyle();

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

          <ImageList className={ style.container } style={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
            { albuns.map((album) => (
              <Link to={ `/album/${ album._id }` } className={ style.card } key={ album._id }>
                <ImageListItem key={ album._id }>
                  { album.foto ? (
                    <img
                      src={ album.foto }
                      alt= 'teste'
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ height: '10rem' }}></div>
                  )}

                  <ImageListItemBar
                    title={ album.titulo }
                    subtitle={ album.descricao }
                    position="below"
                  />
                </ImageListItem>              
              </Link>
            ))}
          </ImageList>

          { openFormAlbum && <FormAlbum setOpenFormAlbum={ setOpenFormAlbum }/> }
          
          <Button className={ style.botao } variant="contained" onClick={ handleOpenFormAlbum }>Criar novo álbum</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}