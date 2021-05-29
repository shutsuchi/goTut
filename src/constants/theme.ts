import { createMuiTheme } from '@material-ui/core/styles'

// PrimaryColor
export const PRIMARY_COLOR = '#90b83f'
export const PRIMARY_DEEP_COLOR = '#709e27'
export const PRIMARY_PALE_COLOR = '#e9f1d9'

// SecondaryColor
export const SECONDARY_COLOR = '#666666'
export const SECONDARY_DEEP_COLOR = '#4d4d4d'
export const SECONDARY_PALE_COLOR = '#999999'

// White
export const WHITE_COLOR = '#fff'

// DeepBlue
export const DEEP_BLUE_COLOR = '#153149'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
})

