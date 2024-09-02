import "./styles/App.scss";
import "./styles/components.scss";
import "./components/Form/Form.scss";
import { Form, Header, Loader, Todos } from "./components";
import { useGetTodos, useEditTodo } from "./hooks";

function App() {
	const { todos, setTodos, isLoading, refreshTodos } = useGetTodos();
	const {
		editInputRef,
		currentTodoId,
		input,
		setInput,
		isEditing,
		setIsEditing,
		handleEditClick,
	} = useEditTodo();

	return (
		<section className="app padding--width flex--column">
			<Header />
			<Form
				todos={todos}
				setTodos={setTodos}
				refreshTodos={refreshTodos}
				isEditing={isEditing}
				editInputRef={editInputRef}
				currentTodoId={currentTodoId}
				input={input}
				setInput={setInput}
				setIsEditing={setIsEditing}
			/>
			{isLoading ? (
				<Loader />
			) : (
				<Todos
					todos={todos}
					refreshTodos={refreshTodos}
					setIsEditing={setIsEditing}
					handleEditClick={handleEditClick}
				/>
			)}
		</section>
	);
}

export default App;
