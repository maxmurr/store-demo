import Sidebar from '@/components/Sidebar';
import { store } from '@/store/index';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			{/* <Head>
				<title>Codecrws</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head> */}
			<Sidebar />
			<main>
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}
