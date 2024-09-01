import delete_img from "../../assets/svg/delete.svg";
import edit_img from "../../assets/svg/edit.svg";
import accept_img from "../../assets/svg/accept.svg";
import deny_img from "../../assets/svg/deny.svg";
import { deleteTodo } from "../../api";
import { useState } from "react";

export const Todos = ({ refreshTodos, todos }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editingTodoId, setEditingTodoId] = useState(null);
	const [inputValue, setInputValue] = useState("");

	const onTodoDeleteClick = (todoId) => {
		deleteTodo(todoId)
			.then(() => console.log(todoId, "TODO Deleted"))
			.finally(() => refreshTodos());
	};

	const onTodoEditClick = (todoId) => {
		setIsEditing(true);
		setEditingTodoId(todoId);
	};

	const onTodoAcceptClick = (todo) => {
		setIsEditing(false);
		// setInputValue(todo.title)
	};

	return (
		<ul className="todos__list flex--column">
			{todos.map((todo) => (
				<li key={todo.id} className="todos__item flex">
					<input
						className="todos__item-input-description"
						type="text"
						value={isEditing && editingTodoId === todo.id ? inputValue : todo.title}
						// readOnly={!isEditing}
						onChange={({ target }) => setInputValue(target.value)}
					/>
					{isEditing && todo.id === editingTodoId ? (
						<>
							<button
								className="todos__btn margin-left--auto"
								onClick={() => onTodoAcceptClick(todo)}
							>
								<img src={accept_img} alt="edit button" />
							</button>
							<button
								className="todos__btn btn--delete"
								// onClick={}
							>
								<img src={deny_img} alt="edit button" />
							</button>
						</>
					) : (
						<>
							<button
								className="todos__btn margin-left--auto"
								onClick={() => onTodoEditClick(todo.id)}
							>
								<img src={edit_img} alt="edit button" />
							</button>
							<button
								className="todos__btn btn--delete"
								onClick={() => onTodoDeleteClick(todo.id)}
							>
								<img src={delete_img} alt="detele button" />
							</button>
						</>
					)}
				</li>
			))}
		</ul>
	);
};
