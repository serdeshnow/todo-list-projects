import "./Todos.scss";
import delete_img from "../../assets/svg/delete.svg";
import edit_img from "../../assets/svg/edit.svg";
import { ref, remove } from "firebase/database";
import { DB_TODOS_URL } from "../../constants";
import { db } from "../../firebase";

export const Todos = ({
	todos,
	handleEditClick,
	setIsEditing,
	isSorted,
	sortedTodos,
}) => {
	const handleTodoDeleteClick = (todoId) => {
		const todoDbRef = ref(db, `${DB_TODOS_URL}/${todoId}`);

		remove(todoDbRef).then(() => {
			setIsEditing(false);
			console.log("TODO Deleted:", todoId);
		});
	};

	return (
		<ul className="todos__list flex--column">
			{isSorted
				? Object.entries(sortedTodos).map(([id, { title }]) => (
						<li key={id} className="todos__item flex">
							<p className="todos__item-description">{title}</p>
							<button
								className="todos__btn margin-left--auto"
								onClick={() => handleEditClick(id, title)}
							>
								<img src={edit_img} alt="edit button" />
							</button>
							<button
								className="todos__btn btn--delete"
								onClick={() => handleTodoDeleteClick(id)}
							>
								<img src={delete_img} alt="detele button" />
							</button>
						</li>
					))
				: Object.entries(todos).map(([id, { title }]) => (
						<li key={id} className="todos__item flex">
							<p className="todos__item-description">{title}</p>
							<button
								className="todos__btn margin-left--auto"
								onClick={() => handleEditClick(id, title)}
							>
								<img src={edit_img} alt="edit button" />
							</button>
							<button
								className="todos__btn btn--delete"
								onClick={() => handleTodoDeleteClick(id)}
							>
								<img src={delete_img} alt="detele button" />
							</button>
						</li>
					))}
		</ul>
	);
};
