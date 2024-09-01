// import { useState } from "react";
// import { createTodo } from "../api";
// // import { useGetTodos } from "./useGetTodos";

// ----------/// IN PROCESS ///---------- //

// export const useCreateTodo = (refreshTodos) => {
// 	// const { refreshTodos } = useGetTodos();
// 	// const [createValue, setCreateValue] = useState("");
// 	const [isCreating, setIsCreating] = useState(false); // POST

// 	const requestAddTodo = (title) => {
// 		setIsCreating(true);

// 		createTodo(title)
// 			.then((response) => {
// 				refreshTodos();
// 				console.log("TODO created, ответ сервера:", response);
// 			})
// 			.finally(() => setIsCreating(false));
// 	};

// 	// const handleCreateClick = (event) => {
// 	// 	event.preventDefault();
// 	// 	console.log("createValue:", createValue);
// 	// 	if (createValue !== "") {
// 	// 		requestAddTodo(createValue);
// 	// 		setCreateValue("");
// 	// 	}
// 	// };

// 	return { isCreating, requestAddTodo };
// };
