import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { MuiThemeProvider as ThemeProvider } from './styles/theme';
import { AuthProvider } from './contexts/Auth';

const App = () => {
	return (
		<ThemeProvider>
			<AuthProvider>
				<Navbar />
				<Hero />
				<Features />
			</AuthProvider>
		</ThemeProvider>
	);
};

export default App;
