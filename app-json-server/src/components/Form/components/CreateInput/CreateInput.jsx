import "./CreateInput.scss";
import { useState } from "react";
import create_img from "../../../../assets/svg/add.svg";
import { createTodo } from "../../../../api";

export const CreateInput = ({ refreshTodos }) => {
	const [createValue, setCreateValue] = useState("");
	const [isCreating, setIsCreating] = useState(false); // POST

	const requestAddTodo = (title) => {
		setIsCreating(true);

		createTodo(title)
			.then((response) => {
				refreshTodos();
				console.log("TODO created, ответ сервера:", response);
			})
			.finally(() => setIsCreating(false));
	};

	const handleCreateClick = (event) => {
		event.preventDefault();
		console.log("createValue:", createValue);
		if (createValue !== "") {
			requestAddTodo(createValue);
			setCreateValue("");
		}
	};

	return (
		<span className="span__create flex">
			<input
				type="text"
				className="input__create input"
				placeholder="Create task..."
				value={createValue}
				onChange={({ target }) => setCreateValue(target.value)}
			/>
			<button
				className="btn btn--create"
				type="submit"
				onClick={handleCreateClick}
				disabled={isCreating}
			>
				<img src={create_img} alt="create" />
			</button>
		</span>
	);
};
