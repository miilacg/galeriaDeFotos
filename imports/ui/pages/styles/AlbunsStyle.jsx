import { makeStyles } from "@mui/styles";


const albumStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '2rem 0'
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