import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

import { AlbunsCollection } from '../../db/AlbunsCollection';
import { FotosCollection } from '../../db/FotosCollection';

import { FormFoto } from '../components/Formulario/FormFoto';
import { Header } from "../components/Header/Header";

import { albumStyle } from './styles/AlbumStyle';



export function Album() {
  const style = albumStyle();

  const [openFormFoto, setOpenFormFoto] = useState(false);

  const user = useTracker(() => Meteor.user());
  const { albumId } = useParams();
	const { album, isLoading, fotos } = useTracker(() => {
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

    const album = AlbunsCollection.findOne({ _id: albumId });
    const fotos = FotosCollection.find({ albumId: albumId }).fetch();

    return { album, fotos };
  });

  const handleOpenFormFoto = () => {
    setOpenFormFoto(true);
  };


  return (
    <div>
      { !isLoading && user ? (
        <>
          <Header page='album' user={ user }/>

          <div className={ style.container }>
            <div className={ style.cabecalho }>
              <div>
                <Typography variant='h2'> { album.titulo }</Typography>
                <Typography variant='h5'> { album.descricao }</Typography>
              </div>
            </div>

            <ImageList style={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
              { fotos.map((foto) => (
                <ImageListItem key={ foto._id }>
                  <img
                    src={ foto.foto }
                    alt= 'teste'
                    loading="lazy"
                  />

                  <ImageListItemBar
                    title={ foto.titulo }
                    subtitle={ foto.descricao }
                    position="below"
                  />
                </ImageListItem>              
              ))}
            </ImageList>
          </div>

          { openFormFoto && <FormFoto acao='criar' album={ album } setOpenFormFoto={ setOpenFormFoto }/> }

          <Button className={ style.botao } variant="contained" onClick={ handleOpenFormFoto }>Adicionar fotos</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}