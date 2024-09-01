import axios from "axios";
import { DB_TODOS_URL } from "../constants";

// export const createTodo = async (title) => {
// 	return fetch(DB_TODOS_URL, {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json;charset=utf-8" },
// 			body: JSON.stringify({
// 				title: title,
// 			}),
// 		})
// 		.then((res) => {
// 			if (res.status === 201) {
// 				return res.data;
// 			}
// 		})
// 		.catch((e) => {
// 			throw e;
// 		});
// };

export const createTodo = async (title) => {
	return await axios
		.post(
			DB_TODOS_URL,
			{ title: title },
			{
				method: "POST",
				headers: { "Content-Type": "application/json;charset=utf-8" },
			},
		)
		.then((res) => {
			if (res.status === 201) {
				return res.data;
			}
		})
		.catch((e) => {
			throw e;
		});
};
