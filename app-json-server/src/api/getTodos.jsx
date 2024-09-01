import axios from "axios";
import { DB_TODOS_URL } from "../constants";

export const getTodos = async () => {
	return await axios
		.get(DB_TODOS_URL)
		.then((res) => {
			if (res.status === 200) {
				return res.data;
			}
		})
		.catch((e) => {
			throw e;
		});
};
