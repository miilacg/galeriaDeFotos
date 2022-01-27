import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import { AlbunsCollection } from '../../db/AlbunsCollection';
import { FotosCollection } from '../../db/FotosCollection';

import { FormAlbum } from '../components/Formulario/FormAlbum';
import { FormFoto } from '../components/Formulario/FormFoto';
import { Header } from "../components/Header/Header";

import { albumStyle } from './styles/AlbumStyle';



function TablePaginationActions(props) {
  const { count, page, fotosPorPagina, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / fotosPorPagina) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={ handleFirstPageButtonClick }
        disabled={ page === 0 }
        aria-label="primeira página"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={ handleBackButtonClick }
        disabled={ page === 0 }
        aria-label="página anterior"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={ handleNextButtonClick }
        disabled={ page >= Math.ceil(count / fotosPorPagina) - 1 }
        aria-label="próxima página"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={ handleLastPageButtonClick }
        disabled={ page >= Math.ceil(count / fotosPorPagina) - 1 }
        aria-label="última página"
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  fotosPorPagina: PropTypes.number.isRequired,
};


export function Album() {
  const style = albumStyle();

  const [modoExibicao, setModoExibicao] = useState('miniatura');
  const [openFormAlbum, setOpenFormAlbum] = useState(false);
  const [openFormFoto, setOpenFormFoto] = useState(false);

  const [page, setPage] = React.useState(0);
  const [fotosPorPagina, setFotosPorPagina] = React.useState(10);  
  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeFotosPorPagina = (event) => {
    setFotosPorPagina(+event.target.value);
    setPage(0);
  }; 

  function calculaDataAquisicao(dataAquisicao) {
    const data = new Date(dataAquisicao);    
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');

    return dia + '/' + mes + '/' + ano + '  ' + hora + ':' + minutos;
  }


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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                <Button variant='transparent' onClick={ () => setOpenFormAlbum(true) } style={{ margin: '0', padding: '0 .5rem' }}>Editar álbum</Button>
                <Typography variant='caption'> 
                  Vizualizar como:
                  <Button 
                    variant='transparent'  
                    style={{ 
                      margin: '0',
                      fontSize: '0.85rem',
                      color: modoExibicao === 'miniatura' ? 'black' : '',
                      textDecoration: modoExibicao === 'miniatura' ? 'none' : 'underline', 
                      fontWeight: modoExibicao === 'miniatura' ? 'bold' : 'normal' 
                    }}
                    onClick={ () => setModoExibicao('miniatura') }
                  >
                    Miniatura
                  </Button>
                  { ' / ' }
                  <Button 
                    variant='transparent'  
                    onClick={ () => setModoExibicao('tabela') }
                    style={{ 
                      margin: '0',
                      padding: '0',
                      fontSize: '0.85rem',
                      color: modoExibicao === 'tabela' ? 'black' : '',
                      textDecoration: modoExibicao === 'tabela' ? 'none' : 'underline', 
                      fontWeight: modoExibicao === 'tabela' ? 'bold' : 'normal' 
                    }}
                  >
                    Tabela
                  </Button>
                </Typography>
              </div>
            </div>

            { openFormAlbum && <FormAlbum acao='editar' album={ album } setOpenFormAlbum={ setOpenFormAlbum }/> }

            { modoExibicao === 'tabela' ? (
              <TableContainer component={ Paper } style={{ display: 'flex', margin: '0 auto', width: '70%' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        key='foto'
                        align='center'
                        style={{ width: '25%' }}
                      >
                        Foto
                      </TableCell>
                      <TableCell
                        key='tamanho'
                        align='center'
                        style={{ width: '25%' }}
                      >
                        Tamanho
                      </TableCell>
                      <TableCell
                        key='dataAquisicao'
                        align='center'
                        style={{ width: '25%' }}
                      >
                        Data de aquisição
                      </TableCell>
                      <TableCell
                        key='cor'
                        align='center'
                        style={{ width: '25%' }}
                      >
                        Cor predominante
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {( fotosPorPagina > 0 ? fotos.slice(page * fotosPorPagina, page * fotosPorPagina + fotosPorPagina) : fotos).map((foto) => (
                      <TableRow key={ foto._id }>
                        <TableCell style={{ width: '25%' }} align="center">
                          <img
                            style={{ width: '50%' }}
                            src={ foto.foto }
                            alt={ foto.descricao }
                            loading="lazy"
                          />
                        </TableCell>
                        <TableCell style={{ width: '25%' }} align="center">
                          { foto.tamanho }
                        </TableCell>
                        <TableCell style={{ width: '25%' }} align="center">
                          { calculaDataAquisicao(foto.dataDeAquisicao) }
                        </TableCell>                        
                        <TableCell style={{ width: '25%' }} align="center">
                          { foto.cor }
                        </TableCell>
                      </TableRow>
                    ))}          
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPagesOptions={ [5, 10, 25, { label: 'All', value: -1 }] }
                        colSpan={ 3 }
                        count={ fotos.length }
                        rowsPerPage={ fotosPorPagina }
                        page={ page }
                        SelectProps={{
                          inputProps: { 'aria-label': 'fotos por página' },
                          native: true
                        }}
                        onPageChange={ handleChangePage }
                        onRowsPerPageChange={ handleChangeFotosPorPagina }
                        ActionsComponent={ TablePaginationActions }
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            ) : (              
              <ImageList style={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
                { fotos.map((foto) => (
                  <ImageListItem key={ foto._id }>
                    <img
                      src={ foto.foto }
                      alt= { foto.descricao }
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
            )}
          </div>

          { openFormFoto && <FormFoto acao='criar' album={ album } setOpenFormFoto={ setOpenFormFoto }/> }

          <Button className={ style.botao } variant="contained" onClick={ () => setOpenFormFoto(true) }>Adicionar fotos</Button>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}      
    </div>
  )
}