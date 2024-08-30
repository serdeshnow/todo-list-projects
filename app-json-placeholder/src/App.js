import "./styles/App.scss";
import "./styles/components.scss";
import { Header, Form } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/todos").then((responce) => {
			setTodos(responce.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<section className="app padding--width">
			<Header />
			{/* <Form/> */}
			<ul className="todos__list">
				{isLoading ? (
					<>loading...</>
				) : (
					todos.map((todo) => {
						return (
							<div key={todo.id} className="todos__item">
								<span className="todos__num">{todo.id}</span>
								{todo.title}
							</div>
						);
					})
				)}
			</ul>
		</section>
	);
}

export default App;
