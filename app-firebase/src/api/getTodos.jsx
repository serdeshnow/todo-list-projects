import axios from "axios";
import { DB_TODOS_URL } from "../constants";

export const getTodos = async (search = "") => {
	return await axios
		.get(search ? `${DB_TODOS_URL}?q=${search}` : DB_TODOS_URL)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((e) => {
			throw e;
		});
};
