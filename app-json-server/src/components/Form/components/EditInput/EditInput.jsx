import "./EditInput.scss";
import accept_img from "../../../../assets/svg/accept.svg";
import deny_img from "../../../../assets/svg/deny.svg";
import { editTodo } from "../../../../api";

export const EditInput = ({
	editInputRef,
	input,
	setInput,
	currentTodoId,
	setIsEditing,
	refreshTodos,
	setIsSorted,
}) => {
	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleAcceptClick = (event, todoValue, todoId) => {
		event.preventDefault();
		editTodo(todoValue, todoId)
			.then((response) => {
				refreshTodos();
				setIsSorted(false);
				console.log("TODO updated, ответ сервера:", response);
			})
			.finally(() => setIsEditing(false));
	};

	const handleDenyClick = (event) => {
		event.preventDefault();
		setIsEditing(false);
		setInput("");
		console.log("TODO update denied");
	};

	return (
		<span className="span__edit flex">
			<input
				type="text"
				className="input__edit input"
				placeholder="Edit task..."
				value={input}
				onChange={handleInput}
				ref={editInputRef}
			/>
			<button
				className="btn btn--accept"
				type="submit"
				onClick={(event) => handleAcceptClick(event, input, currentTodoId)}
			>
				<img src={accept_img} alt="accept" />
			</button>
			<button className="btn btn--deny" type="submit" onClick={handleDenyClick}>
				<img src={deny_img} alt="deny" />
			</button>
		</span>
	);
};
