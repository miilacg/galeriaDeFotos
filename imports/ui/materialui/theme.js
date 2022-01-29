import { createTheme } from '@mui/material/styles';
import * as appStyles from './styles';


export const theme = createTheme({    
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 700,
    h2: appStyles.h2,
    h3: appStyles.h3,
    h4: appStyles.h4,
    h5: appStyles.h5,
    h6: appStyles.h6,
    caption: appStyles.caption
  },
  components: {
    MuiAlert: {
      defaultProps: {},
      styleOverrides: {
        root: {
          alignItems: 'center',
          height: '1.5rem',
          margin: '.5rem auto',
          padding: '.5rem 1.5rem',
          '& svg': {
            fontSize: '1.8rem'
          }
        },
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'secondary'
      },
      variants: [
        {
          props: { variant: 'transparent' },
          style: {
            margin: '0',
            padding: '10px',
            backgroundColor: 'transparent',
            fontSize: '1.05rem',
            color: appStyles.buttonColor,
            textDecoration: 'underline',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              color: appStyles.buttonColorHover
            },
            '&:focus': {
              outline: 'none'
            }
          }
        }
      ],
      styleOverrides: {
        root: {            
          padding: '.5rem 2rem',
          margin: '0',
          background: appStyles.buttonColor,
          textTransform: 'none',
          borderRadius: '8px',
          transition: 'filter 0.2s',
          '&.MuiButton-sizeSmall': {
            padding: '6px 16px'
          },
          '&.MuiButton-sizeLarge': {
            width: '100%',
            padding: '10px 2rem'
          },
          '&:hover': {
            backgroundColor: appStyles.buttonColorHover,
            filter: 'brightness(0.9)'
          }
        }
      }
    },
    MuiFormControl: {
      defaultProps: {},
      styleOverrides: {
        root: {
          display: 'flex',
          width: '100%',
          margin: '.5rem 0'
        }
      }
    },
    MuiImageListItemBar: {
        defaultProps: {},
          styleOverrides: {
            root: {
                color: appStyles.primaryColor,
                textDecoration: 'none'
            }
        }
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
      styleOverrides: {
        root: {
          fontSize: '1.1rem',
          borderRadius: '4px',
          '&.Mui-disabled': {
            color: appStyles.textDisabled
          }
        }
      }
    },
    MuiSvgIcon: {
        defaultProps: {},
        styleOverrides: {
            root: {
                fontSize: '5rem',
            },
        },
    },
    MuiTextField: {
        defaultProps: { },
        styleOverrides: {
            root: {
                width: '100%',
                margin: '1.5rem 0 0.5rem 0'
            }
        }
    }
  }
});