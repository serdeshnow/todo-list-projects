import './Todos.scss';
import { useContext } from 'react';
import { AppContext } from '../../context.js';
import { Loader } from '../';
import { Todo } from './Todo/Todo.jsx';

export const Todos = () => {
	const {todos, setSearchInput} = useContext(AppContext);

	return (
		todos ? (
			todos.length === 0 ? (
				<div className="todos__not-found flex--column">
					<p className="todos__not-found-title">No todos found :(</p>
					<button className="btn-text todos__clear-query-btn"
					        onClick={() => setSearchInput('')}>Clear query
					</button>
				</div>
			) : (
				<ul className="todos flex--column">
					{todos.map((todo) => (
						<Todo todo={todo} key={todo.id}/>
					))}
				</ul>)
		) : (
			<Loader/>
		)
	);
};
