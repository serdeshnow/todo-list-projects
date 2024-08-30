import "./styles/App.scss";
import "./styles/components.scss";
import { Header, Form, Loader } from "./components";
import { getRandomLoad } from "./utils";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			axios
				.get("https://jsonplaceholder.typicode.com/todos")
				.then((responce) => {
					setTodos(responce.data);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, getRandomLoad());
	}, []);

	return (
		<section className="app padding--width flex--column">
			<Header />
			{/* <Form /> */}
			<ul className="todos__list flex--column">
				{isLoading ? (
					<Loader />
				) : (
					todos.map((todo) => {
						return (
							<li key={todo.id} className="todos__item flex">
								<span className="todos__num">{todo.id}</span>
								<p className="todos__item-description">{todo.title}</p>
								<button className="todos__btn btn--delete" disabled>
									Delete task
								</button>
							</li>
						);
					})
				)}
			</ul>
		</section>
	);
}

export default App;
