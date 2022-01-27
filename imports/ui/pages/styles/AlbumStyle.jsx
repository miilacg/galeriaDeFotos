import { makeStyles } from "@mui/styles";


const albumStyle = makeStyles(() => ({
  container: {
    margin: '2rem'
  },

  cabecalho: {
    marginBottom: '2rem'
  },

  botao: {
    position: 'fixed !important',
    bottom: '4%',
    right: '4%'
  }
}));


export {
  albumStyle
};