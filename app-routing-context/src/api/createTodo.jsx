import { DB_TODOS_URL } from '../constants';

export const createTodo = async (title) => {
	return fetch(DB_TODOS_URL, {
		method: 'POST',
		headers: {'Content-Type': 'application/json;charset=utf-8'},
		body: JSON.stringify({
			title: title,
		}),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.catch((e) => {
			throw e;
		});
};
