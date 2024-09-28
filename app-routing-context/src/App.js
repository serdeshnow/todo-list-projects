import './styles/App.scss';
import './styles/components.scss';
import { AppRoutes } from './routes/AppRoutes.jsx';
import { AppContext } from './context.js';
import { useEffect, useState } from 'react';
import { getTodos } from './api';
import { useDebounce } from './hooks';

function App() {
	const [ todos, setTodos ] = useState([]);
	const [ sortBy, setSortBy ] = useState({order: 'asc'});

	const [ searchInput, setSearchInput ] = useState('');
	const debounceData = useDebounce(searchInput, 500);

	const handleSort = () => {
		setSortBy({order: sortBy.order === 'asc' ? 'desc' : 'asc'});
	};

	useEffect(() => {
		try {
			getTodos()
				.then((data) => {
					setTodos(data);
					console.log(data);
				});
		} catch (error) {
			console.error(error);
		}
	}, []); // first todos render effect

	useEffect(() => {
		try {
			getTodos('', sortBy.order)
				.then((data) => {
					setTodos(data);
				});
		} catch (error) {
			console.error(error);
		}
	}, [ sortBy.order ]); // sort effect

	useEffect(() => {
		try {
			getTodos(debounceData)
				.then((data) => {
					setTodos(data);
				});
		} catch (error) {
			console.error(error);
		}
	}, [ debounceData ]); // search query effect

	return (
		<AppContext.Provider value={{todos, setTodos, searchInput, setSearchInput, handleSort}}>
			<AppRoutes/>
		</AppContext.Provider>
	);
}

export default App;
