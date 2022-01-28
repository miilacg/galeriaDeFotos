import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import { AlbunsCollection } from '../../db/AlbunsCollection';
import { FotosCollection } from '../../db/FotosCollection';

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

    const handlerAlbuns = Meteor.subscribe('albuns');
    if (!handlerAlbuns.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const handlerFotos = Meteor.subscribe('fotos');
    if (!handlerFotos.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const albuns = AlbunsCollection.find({ createdby: user._id }, { sort: { titulo: 1 }}).fetch();
    let foto = [];
    albuns.map((album, index) => (
      foto[index] = FotosCollection.findOne({ albumId: album._id }, { sort: { createdAt: -1 }}),
      album.foto = foto[index] && foto[index].foto
    ));

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
                      style={{ height: '15rem' }}
                      src={ album.foto }
                      alt={ album.descricao }
                      loading="lazy"
                    />
                  ) : (
                    <div style={{ height: '15rem', background: '#83a5a559' }}>
                      <InsertPhotoIcon className={ style.iconFoto } />
                    </div>
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

          { openFormAlbum && <FormAlbum acao='criar' setOpenFormAlbum={ setOpenFormAlbum }/> }
          
          <Button className={ style.botao } variant="contained" onClick={ handleOpenFormAlbum }>Criar novo álbum</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}