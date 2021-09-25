import { createTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: grey[600],
      dark: grey[800],
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    // accent: {
    //   ...amber,
    // },
  },
  components:{
    MuiAppBar: {
      styleOverrides:{
        root:{
          height: 100
        }
      }
    },
  }
})
