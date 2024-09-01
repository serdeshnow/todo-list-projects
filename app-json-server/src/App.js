import "./styles/App.scss";
import "./styles/components.scss";
import "./components/Form/Form.scss";
import { Header, Loader, Todos } from "./components";
import { useGetTodos, useEditTodo, useDebounce } from "./hooks";

import { CreateInput } from "./components/Form/components/CreateInput/CreateInput";
import { SearchInput } from "./components/Form/components/SearchInput/SearchInput";
import EditInput from "./components/Form/components/EditInput/EditInput";
import { useEffect, useState } from "react";
import { getTodos } from "./api";

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

	const [isSorted, setIsSorted] = useState(false);

	const handleSortClick = () => {
		setIsSorted((prev) => !prev);
		if (!isSorted) {
			setTodos(todos.sort((a, b) => a.title.localeCompare(b.title)));
		} else {
			setTodos(todos.sort((a, b) => a.id - b.id));
		}
	};

	const [searchValue, setSearchValue] = useState("");
	const debounceData = useDebounce(searchValue, 1000);

	useEffect(() => {
		getTodos(debounceData).then((data) => {
			setTodos(data);
		});
	}, [debounceData]);

	return (
		<section className="app padding--width flex--column">
			<Header />
			<form className="form flex--column">
				<SearchInput
					todos={todos}
					setTodos={setTodos}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					isSorted={isSorted}
					handleSortClick={handleSortClick}
				/>
				{isEditing ? (
					<EditInput
						editInputRef={editInputRef}
						currentTodoId={currentTodoId}
						input={input}
						setInput={setInput}
						setIsEditing={setIsEditing}
						refreshTodos={refreshTodos}
						setIsSorted={setIsSorted}
					/>
				) : (
					<CreateInput refreshTodos={refreshTodos} />
				)}
			</form>
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
