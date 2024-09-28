import { DB_TODOS_URL } from '../constants';

export const deleteTodo = async (todoId) => {
	try {
		return fetch(`${DB_TODOS_URL}/${todoId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		throw error;
	}
};
