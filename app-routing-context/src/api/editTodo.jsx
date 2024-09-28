import { DB_TODOS_URL } from '../constants';

export const editTodo = async (todoId, todoTitle, todoCompleted) => {
	try {
		const response = await fetch(`${DB_TODOS_URL}/${todoId}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json;charset=utf-8'},
			body: JSON.stringify({
				id: todoId,
				title: todoTitle,
				completed: todoCompleted,
			}),
		});
		return await response.json();
	} catch (error) {
		return error;
	}
};
