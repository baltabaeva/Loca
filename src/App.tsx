import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './app/components/Router';
import { darkTheme } from './app/config/theme';
import store from './app/store/store';
import './styles/style.scss';
import { Layout } from './ui';
import CreateEventPage from "./pages/CreateEventPage";


export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<Layout>
					<BrowserRouter>
						<Router />
						<Routes>
							<Route path="/" element={<CreateEventPage/>}/>
						</Routes>
					</BrowserRouter>
				</Layout>
			</ThemeProvider>
		</Provider>

	);
}
