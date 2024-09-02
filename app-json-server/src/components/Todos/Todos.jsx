import "./Todos.scss";
import delete_img from "../../assets/svg/delete.svg";
import edit_img from "../../assets/svg/edit.svg";
import { deleteTodo } from "../../api";

export const Todos = ({ todos, refreshTodos, handleEditClick, setIsEditing }) => {
	const handleTodoDeleteClick = (todoId) => {
		deleteTodo(todoId)
			.then(() => {
				setIsEditing(false);
				console.log(todoId, "TODO Deleted");
			})
			.finally(() => refreshTodos());
	};

	return (
		<ul className="todos__list flex--column">
			{todos.map((todo) => (
				<li key={todo.id} className="todos__item flex">
					<p className="todos__item-description">{todo.title}</p>
					<button
						className="todos__btn margin-left--auto"
						onClick={() => handleEditClick(todo)}
					>
						<img src={edit_img} alt="edit button" />
					</button>
					<button
						className="todos__btn btn--delete"
						onClick={() => handleTodoDeleteClick(todo.id)}
					>
						<img src={delete_img} alt="detele button" />
					</button>
				</li>
			))}
		</ul>
	);
};
