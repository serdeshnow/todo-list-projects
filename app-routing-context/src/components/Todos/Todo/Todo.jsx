import './Todo.scss';
import arrow_right_img from '../../../assets/svg/arrow-right.svg';
import { editTodo } from '../../../api/index.js';
import { useNavigate } from 'react-router-dom';

export const Todo = ({todo}) => {
	const navigate = useNavigate();

	const handleChangeCheckbox = (isChecked) => {
		editTodo(todo.id, todo.title, !todo.completed)
			.then((res) => {
				console.log(res);
			});
	};

	const handleGoToTodoClick = (event, todo) => {
		event.preventDefault();
		navigate(`todo/${todo.id}`, {state: {todo}});
		console.log(`GoToTodo ${todo.id} worked!`);
	};

	return (
		<li className="todo flex">
			<input className="todo__checkbox" type="checkbox" defaultChecked={todo.completed}
			       onChange={handleChangeCheckbox}/>
			<p className="todo__description">{todo.title}</p>
			<button
				className="btn__go-to-todo btn margin-left--auto"
				onClick={(e) => handleGoToTodoClick(e, todo)}
				disabled={todo.checked}
			>
				<img src={arrow_right_img || undefined} alt="go to todo"/>
			</button>
		</li>
	);
};
