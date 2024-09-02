import { useState } from "react";
import { push } from "firebase/database";
import { DB_TODOS_REF } from "../constants";

export const useCreateTodo = () => {
	const [isCreating, setIsCreating] = useState(false); // POST
	const [createValue, setCreateValue] = useState("");

	const handleCreateClick = (event) => {
		event.preventDefault();
		setIsCreating(true);

		if (createValue !== "") {
			push(DB_TODOS_REF, {
				title: createValue,
			})
				.then((response) => {
					console.log("TODO created:", response);
				})
				.finally(() => setIsCreating(false));

			setCreateValue("");
		}
	};

	return { createValue, setCreateValue, handleCreateClick, isCreating };
};
