import { makeStyles } from "@mui/styles";


const cardAlbumStyle = makeStyles(() => ({
  card: {
    width: '25%',
    padding: '1rem',
    boxSizing: 'border-box'
  },

  foto: {
    width: '100%',
    height: '10rem',
    background: 'grey'
  },

  textos: {
    padding: '.5rem'
  }
}));


export {
  cardAlbumStyle
};