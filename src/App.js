import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { AuthProvider } from './contexts/Auth';

const App = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Hero />
			<Features />
		</AuthProvider>
	);
};

export default App;
