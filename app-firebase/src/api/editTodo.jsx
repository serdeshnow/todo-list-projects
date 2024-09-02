import axios from "axios";
import { DB_TODOS_URL } from "../constants";

export const editTodo = async (todoValue, todoId) => {
	return await axios
		.put(`${DB_TODOS_URL}/${todoId}`, {
			id: todoId,
			title: todoValue,
		})
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((e) => {
			throw e;
		});
};
