import "./styles/App.scss";
import "./styles/components.scss";
import { Header, Loader, Todos } from "./components";
import { useGetTodos } from "./hooks";

function App() {
	const { todos, isLoading } = useGetTodos();

	return (
		<section className="app padding--width flex--column">
			<Header />
			{isLoading ? (
				<Loader />
			) : (
				<ul className="todos__list flex--column">
					<Todos todos={todos} />
				</ul>
			)}
		</section>
	);
}

export default App;
