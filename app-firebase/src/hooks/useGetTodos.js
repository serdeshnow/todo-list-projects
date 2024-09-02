import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import { DB_TODOS_REF } from "../constants";

export const useGetTodos = () => {
	const [todos, setTodos] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		return onValue(DB_TODOS_REF, (snapshot) => {
			const loadedTodos = snapshot.val() || {};
			setTodos(loadedTodos);
			setIsLoading(false);
		});
	}, []);

	return { todos, setTodos, isLoading };
};
