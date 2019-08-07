import { createMuiTheme } from "@material-ui/core";
import PWCentraTtf from './fonts/PWCentraNo2-Bold.tff';

const pwCentra = {
    fontFamily: 'PWCentra',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('PWCentra'),
    local('PWCentraNo2-Black'),
    url(${PWCentraTtf}) format('truetype')`,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF', 
}

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'PWCentra'
        ].join(',')
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [pwCentra]
            }
        }
    }
})