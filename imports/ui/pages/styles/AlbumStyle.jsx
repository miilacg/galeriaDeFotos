import { makeStyles } from "@mui/styles";


const albumStyle = makeStyles(() => ({
  container: {
    margin: '2rem'
  },

  cabecalho: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: '2rem'
  },

  botoes: {
    position: 'fixed !important',
    display: 'flex',
    justifyContent: 'space-between',
    bottom: '4%',
    left: '4%',
    right: '4%'
  }
}));


export {
  albumStyle
};