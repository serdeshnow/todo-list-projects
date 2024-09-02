import { useRef, useState } from "react";

export const useEditTodo = () => {
	const editInputRef = useRef(null);
	const [input, setInput] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [currentTodoId, setCurrentTodoId] = useState(null);

	const handleEditClick = (todo) => {
		setIsEditing(true);
		setInput(todo.title);
		setCurrentTodoId(todo.id);
		setTimeout(() => {
			editInputRef.current.focus();
		}, 0); // focus on the next tick
	};

	return {
		handleEditClick,
		editInputRef,
		input,
		setInput,
		isEditing,
		setIsEditing,
		currentTodoId,
		setCurrentTodoId,
	};
};
