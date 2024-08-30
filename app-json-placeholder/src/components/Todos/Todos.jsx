import React from "react";

export const Todos = ({ todos }) => {
	return (
		<>
			{todos.map((todo) => (
				<li key={todo.id} className="todos__item flex">
					<span className="todos__num">{todo.id}</span>
					<p className="todos__item-description">{todo.title}</p>
					<button className="todos__btn btn--delete" disabled>
						Delete task
					</button>
				</li>
			))}
		</>
	);
};
