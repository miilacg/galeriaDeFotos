import { makeStyles } from "@mui/styles";


const galeriaStyle = makeStyles(() => ({
  container: {
    //display: 'flex',
    //flexWrap: 'wrap',
    margin: '2rem'
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