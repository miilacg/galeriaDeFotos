import { makeStyles } from "@mui/styles";


const modalFotoStyle = makeStyles((theme) => ({
  container: {
    '&:focus-visible': {
      outline: 'none'
    }
  },

	modal: {
    zIndex: '1000',

    position: 'absolute',
		top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    flexDirection: 'column',

    textAlign: 'center',

    backgroundColor: 'white',
    border: 'none',
		borderRadius: '1rem',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),

    '&:focus-visible': {
      outline: 'none'
    }
  },

  imagem: {
    maxWidth: '70vh',
    maxHeight: '60vh',
    height: 'auto',
    margin: '1rem'
  }
}));


export {
  modalFotoStyle
};