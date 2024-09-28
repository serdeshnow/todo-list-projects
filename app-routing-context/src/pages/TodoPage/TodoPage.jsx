import './TodoPage.scss';
import { TodoFooter } from '../../components';
import pencil_img from '../../assets/svg/pencil.svg';
import delete_img from '../../assets/svg/delete.svg';
import accept_img from '../../assets/svg/accept.svg';
import deny_img from '../../assets/svg/deny.svg';
import { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteTodo, editTodo } from '../../api';
import { AppContext } from '../../context.js';

export const TodoPage = () => {
	const {todos, setTodos} = useContext(AppContext);
	const navigate = useNavigate();
	const location = useLocation(); // get certain todo data
	const todo = location.state.todo;
	// console.log(todo)

	const editInputRef = useRef(null);
	const [ isEditing, setIsEditing ] = useState(false);
	const [ editInput, setEditInput ] = useState(todo.title || '');
	const [ currentTodoId, setCurrentTodoId ] = useState(null);

	const handleEditClick = (todo) => {
		setIsEditing(true);
		setEditInput(todo.title);
		setCurrentTodoId(todo.id);
		setTimeout(() => {
			editInputRef.current.focus();
		}, 0);
	};

	const handleDeleteClick = (todoId) => {
		console.log('handleDeleteClick');
		deleteTodo(todoId)
			.then((res) => {
				if (res.ok) {
					setTodos(todos.filter((todo) => todo.id !== todoId));
				}
			})
			.catch((error) => {
				throw error;
			});
		navigate(-1);
	};

	const handleEditInput = ({target}) => {
		setEditInput(target.value);
	};

	const handleDenyClick = (event) => {
		event.preventDefault();
		setEditInput(todo.title);
		setIsEditing(false);
		console.log('TODO update denied');
	};

	const handleAcceptClick = (event, todoId, todoTitle) => {
		event.preventDefault();
		editTodo(todoId, todoTitle, todo.completed)
			.then((updatedTodo) => {
				const todosCopy = todos.slice();
				const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
				if (index) {
					todosCopy[index] = updatedTodo;
					setTodos(todosCopy);
					setEditInput(updatedTodo.title);
				}
				console.log('TODO updated, ответ сервера:', updatedTodo);
			})
			.finally(() => setIsEditing(false));
	};

	return (
		<article className="todo-page flex--column">
			<div className="flex todo-page__todo-wrapper">
				{
					!isEditing ? (
						<p className="todo-page__todo-title">{editInput}</p>
					) : (
						<textarea className="todo-page__todo-title-textarea" value={editInput} readOnly={false}
						          onChange={handleEditInput} ref={editInputRef}/>
					)
				}

				<section className="btn__section flex">
					{
						!isEditing ? (
							<>
								<button className="btn btn__edit" onClick={() => handleEditClick(todo)}>
									<img src={pencil_img} alt="edit"/>
								</button>
								<button className="btn--secondary btn__delete"
								        onClick={() => handleDeleteClick(todo.id)}>
									<img src={delete_img} alt="delete"/>
								</button>
							</>
						) : (
							<>
								<button className="btn btn__accept">
									<img src={accept_img} alt="edit"
									     onClick={(event) => handleAcceptClick(event, currentTodoId, editInput)}/>
								</button>
								<button className="btn--secondary btn__deny"
								        onClick={(event) => handleDenyClick(event)}>
									<img src={deny_img} alt="delete"/>
								</button>
							</>
						)
					}
				< /section>
			</div>
			<TodoFooter todo={todo}/>
		</article>
	)
		;
};
