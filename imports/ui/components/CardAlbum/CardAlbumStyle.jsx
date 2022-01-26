import { makeStyles } from "@mui/styles";


const cardAlbumStyle = makeStyles(() => ({
  card: {
    width: '27.86%',
    padding: '1rem 2rem'
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