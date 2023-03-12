import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './app/components/Router';
import { darkTheme } from './app/config/theme';
import store from './app/store/store';
import './styles/style.scss';
import { Layout } from './ui';

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<Layout>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Layout>
			</ThemeProvider>
		</Provider>
	);
}
