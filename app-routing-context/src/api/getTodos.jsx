import { DB_TODOS_URL } from '../constants';

export const getTodos = async (search = '', order = 'asc') => {
	try {
		const response = await fetch(`${DB_TODOS_URL}?q=${search}&_sort=title&_order=${order}`);
		return await response.json();
	} catch (error) {
		throw error;
	}
};
