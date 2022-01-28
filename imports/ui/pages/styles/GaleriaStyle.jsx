import { makeStyles } from "@mui/styles";


const galeriaStyle = makeStyles(() => ({
  container: {
    margin: '2rem'
  },

  iconFoto: {
    display: 'flex',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#72838359'
  },

  botao: {
    position: 'fixed !important',
    bottom: '4%',
    right: '4%'
  }
}));


export {
  galeriaStyle
};