import { makeStyles } from "@mui/styles";
import * as appStyle from '../../materialui/styles';


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
	},

	botaoCreateGoogle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

		background: '#ea4335',

		color: '#FFF',
		fontWeight: '500',

		border: '0',
		borderRadius: '8px',
    cursor: 'pointer'
  },

	logoGoogle: {
		marginRight: '.5rem'
	}

	/*
	titulo: {
		marginRight: '3rem',
		[theme.breakpoints.down('sm')]: {
			marginRight: '1rem',
		},
	}*/
}));


export {
  homeStyle
};

/*header {
	z-index: 9999;
	position: relative;
	padding: 1.4rem 4% 1.4rem 3.5%;

	background: #d2edf4;
  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);  
  box-shadow: 0 3px 3px rgba(34, 25, 25, 0.4);

	
	.app-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	
		overflow: hidden;
		text-overflow: ellipsis;

		a h1, h1 {
			margin: 0;

			font-size: 1.8rem;
			color: black;

			span {
				font-size: 2.2rem;
				line-height: 1.4;
			}
		}

		a,
		button.user {
			font-size: 1.25rem;
			text-decoration: none;
			font-weight: 700;
			color: #0c566b;
		}

		a:hover {
			color: #082c38;
		}

		button.user {
			box-shadow: none;
			padding: 0;

			.MuiButton-label {
				width: auto;
				height: auto;
			}

			.MuiSvgIcon-root {
				width: 3rem;
				height: auto;
			}

			.imgProfile {
				width: 3rem;
				height: 3rem;

				img {
					width: 100%;
					border-radius: 50%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}
		}

		button.user:focus-visible,
		button.user:focus {
			outline: none;
		}
	} 
}*/

/*form {
  margin: 1rem;

	div.MuiFormControl-root {
		display: flex;
    width: 100%;
    margin: .5rem;
	}

	.MuiFormLabel-root {
		margin-left: .25rem;
		padding-left: .6rem;
		font-size: 1.45rem;
	}

	.MuiFormLabel-root.Mui-focused {
		color: var(--textLabel);
	}

	.MuiInputBase-input {
    padding: .5rem;
		margin-top: .5rem;
		font-size: 1.1rem;
	}

	.radio { 
		.label.MuiFormLabel-root { // Tituto do radio
			margin-top: 1rem;
    	font-size: 1rem;
		}

		.MuiFormGroup-root {
			padding-left: .1rem;
		}

		.MuiFormControlLabel-root {
			margin-right: 2rem;
		}

		span.MuiFormControlLabel-label { // Label de cada opção
			color: var(--textLabel);
			font-size: 1.03rem;
		}

		.MuiIconButton-root {
			padding: .36rem .5rem .5rem;
		}
	}
	
	span.MuiIconButton-label {
		justify-content: flex-start;
	}
	
	.MuiListItemSecondaryAction-root {
		left: 2.5rem;
	}
		
	// Texto do checked
	.MuiFormControl-root  .MuiListItemSecondaryAction-root .MuiInputLabel-formControl {
		top: 0;
		left: 0;
		position: absolute;
		transform: translate(0, -40%) scale(1);
		margin: 0;
	}

	.MuiButton-contained {
		width: 100%;
		height: auto;
		margin-top: 2rem;
		padding: .5rem;
		border-radius: .5rem;
		background-color: var(--button);
		color: white;
	}
}

.userForm { // Login e criação do usuário
	display: flex;
	flex-direction: column;
	width: 35%;
	height: 100%;

	justify-content: center;
	align-items: center;
	margin: 0 auto;

	h1 { 
		margin-bottom: 2.5rem;
		text-align: center;
    font-size: 1.95rem;
    font-weight: bold;
	}

	.MuiInputBase-root {
		font-size: 1.15rem;
	}

	.MuiButton-label {
		color: white;
		font-size: 1.45rem;
		font-family: inherit;
		font-weight: bold;		
		text-transform: none; 
	}

	.MuiInputBase-input {
		height: auto;
    padding: .9rem .5rem .7rem;
	}
}


// Drawer
.MuiDrawer-paper {
	left: auto;
	right: 0;
	background: #d2edf4;
	background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
	padding: 2.4rem 1% 1.4rem 1%;
	box-shadow: 0 3px 3px rgba(34, 25, 25, 0.4);

	h1 {
		margin: 0 2.4rem 0 2rem;

		font-size: 1.95rem;
		font-weight: 600;
		color: black;
		
		span {
			font-size: 2.3rem;
		}
	}

	.MuiList-root {
		display: flex;
		flex-direction: column;
		margin: 2.2rem 0;

		.MuiListItem-root {
			padding: .5rem 1rem;
		}

		a:hover {
			text-decoration: none;
		}

		.MuiSvgIcon-root {
			font-size: 2.2rem;
			color: #0c566b;
		}	

		.arrow.MuiSvgIcon-root {
			font-size: 1.6rem;
		}
	
		.MuiTypography-displayBlock {
			margin-left: .7rem;
			font-size: 1.2rem;
			font-weight: bold;
			color: #0c566b;
		}
	}

	.MuiCollapse-wrapper {
		margin-bottom: 1rem;

		.MuiListItem-root {
			padding: .3rem 1rem;
		}

		.nested {
			padding-left: 2rem;
		}

		.MuiList-root {
			margin: 0;
			
			.MuiSvgIcon-root {
				font-size: 1.75rem;
			}
		}

		.MuiTypography-displayBlock {
			font-size: 1rem;
		}	
	}
}



@media (max-width: 1000px) {
	header {
    padding: 1.25rem 5% 1.35rem 3.5%;

		.app-header a h1, 
		.app-header h1 {
			margin: 0;
			font-size: 1.7rem;
			color: black;
			line-height: 1.6rem;
	
			span {
				line-height: 1.2;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: 1.13rem;
		}
	}
}

@media (max-width: 900px) {
	header {
    padding: 1.2rem 5% 1.2rem 3.5%;

		.app-header a h1, 
		.app-header h1 {
			font-size: 1.5rem;
			line-height: 1.5;
	
			span {
				font-size: 2rem;
    		line-height: 1.2;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: 1rem;
    	margin-top: .22rem;
		}
	}

	.MuiDrawer-paper {	
		h1 {
			margin: 0 2.2rem 0 1.9rem;
    	font-size: 1.75rem;

			span {
				font-size: 2.25rem;
			}
		}
	
		.MuiList-root {		
			.MuiSvgIcon-root {
				font-size: 2.15rem;
			}	
	
			.arrow.MuiSvgIcon-root {
				margin-top: .35rem;
				font-size: 1.45rem;
			}
		
			.MuiTypography-displayBlock {
				margin-top: .25rem;
				margin-left: .7rem;
    		font-size: 1.1rem;
			}
		}
	
		.MuiCollapse-wrapper {		
			.MuiList-root {				
				.MuiSvgIcon-root {
					font-size: 1.6rem;
				}
			}
	
			.MuiTypography-displayBlock {
				font-size: .92rem;
			}	
		}
	}
}

@media (max-width: 800px) {
	header {
    padding: 1.2rem 5% 1.2rem 3.5%;

		.app-header a h1, 
		.app-header h1 {
			font-size: 1.43rem;
    	line-height: 1;
	
			span {
				font-size: 1.95rem;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: .96rem;
			margin-top: .1rem;
		}
	}
}

@media (max-width: 600px) {
	header {
    padding: 1.05rem 5.4% 1.2rem 4%;

		.app-header a h1, 
		.app-header h1 {
			font-size: 1.35rem;
	
			span {
				font-size: 1.85rem;
				line-height: 1.3;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: .95rem;
		}
	}
}

@media (max-width: 425px) {
	header {
    padding: 1.1rem 6.5% 1.15rem 5%;

		.app-header a h1, 
		.app-header h1 {
			font-size: 1.25rem;
	
			span {
				font-size: 1.85rem;
				line-height: 1.25;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: .8rem;
		}
	}

	.MuiDrawer-paper {	
		h1 {
    	font-size: 1.5rem;

			span {
				font-size: 2rem;
			}
		}
	
		.MuiList-root {		
			.MuiSvgIcon-root {
				font-size: 2.05rem;
			}	
		
			.MuiTypography-displayBlock {
				margin-top: .2rem;
				font-size: .99rem;
			}
		}
	
		.MuiCollapse-wrapper {		
			.MuiList-root {				
				.MuiSvgIcon-root {
					font-size: 1.5rem;
				}
			}
	
			.MuiTypography-displayBlock {
				font-size: .85rem;
			}	
		}
	}
}

@media (max-width: 320px) {
	header {
    padding: 1.1rem 6.5% 1.15rem 5%;

		.app-header a h1, 
		.app-header h1 {
			font-size: 1.25rem;
	
			span {
				font-size: 1.85rem;
				line-height: 1.25;
			}
		}
	
		.app-header a, 
		.app-header button.user {
			font-size: .8rem;
		}
	}
}*/