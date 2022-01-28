import { makeStyles } from "@mui/styles";


const headerStyle = makeStyles(() => ({
  appBar: {
    zIndex: '999',
    position: 'relative',
    padding: '1.4rem 4% 1.4rem 3.5%',

    background: '#d2edf4',
    backgroundImage: 'linear-gradient(to bottom, #d0edf5, #e1e5f0 100%)',  
    boxShadow: '0 3px 3px rgba(34, 25, 25, 0.4)'
  },

	appHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}
}));


export {
  headerStyle
};