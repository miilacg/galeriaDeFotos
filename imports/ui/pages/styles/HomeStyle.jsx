import { makeStyles } from "@mui/styles";


const homeStyle = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },

	main: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: '1',
		overflow: 'auto',
		background: 'white',
		padding: '2rem'
	},

	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '35%',
		height: '100%',

		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto'
	}
}));


export {
  homeStyle
};