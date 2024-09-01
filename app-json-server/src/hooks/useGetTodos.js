import { getRandomLoad } from "../utils";
import { useEffect, useState } from "react";
import { getTodos } from "../api";

export const useGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
			getTodos()
				.then((data) => {
					setTodos(data);
				})
				.finally(() => setIsLoading(false));
		}, getRandomLoad());
	}, [refreshTodosFlag]);

	return { todos, setTodos, isLoading, refreshTodos };
};
