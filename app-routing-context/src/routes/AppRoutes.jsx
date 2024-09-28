import { Route, Routes } from 'react-router-dom';
import { HomePage, MainLayout, NotFoundPage, TodoPage } from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route index element={<HomePage/>}/>
				<Route path="todo/:id" element={<TodoPage/>}/>
			</Route>
			<Route path="*" element={<NotFoundPage/>}/>
		</Routes>
	);
};
