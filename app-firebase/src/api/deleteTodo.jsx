import axios from "axios";
import { DB_TODOS_URL } from "../constants";

export const deleteTodo = async (todoId) => {
	return await axios
		.delete(`${DB_TODOS_URL}/${todoId}`)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((e) => {
			throw e;
		});
};
