import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
	palette: {
		primary: { main: red[700] },
		secondary: { main: yellow[400] },
	},
});

export const MuiThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
