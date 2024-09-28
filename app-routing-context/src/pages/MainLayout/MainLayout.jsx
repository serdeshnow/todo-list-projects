import { Header } from '../../components';
import { Outlet } from 'react-router-dom';

// Layout of all pages with path

export const MainLayout = () => {
	return (
		<>
			<Header/>
			<Outlet/>
		</>
	);
};
