import { getRandomLoad } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTodos = () => {
	const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(TODOS_URL)
				.then((response) => {
					if (response.status === 200) {
						setTodos(response.data);
					}
				})
				.catch((error) => {
					throw error;
				})
				.finally(() => setIsLoading(false));
		}, getRandomLoad());
	}, []);

	return { todos, isLoading };
};
