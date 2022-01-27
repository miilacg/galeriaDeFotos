import { makeStyles } from "@mui/styles";


const formularioStyle = makeStyles((theme) => ({
	modal: {
    position: 'absolute',
    width: 'auto',
		top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
		borderRadius: '1rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3)
  },

  formulario: {
    margin: '0rem .5rem .5rem'
  },

  botoes: {
    display: 'flex',
    justifyContent: 'space-between'
  },

	botao: {
		margin: '.5rem 0 0'
	}
}));


export {
  formularioStyle
};