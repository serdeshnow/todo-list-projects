import "./styles/App.scss";
import "./styles/components.scss";
import { Form, Header, Loader, Todos } from "./components";
import { useGetTodos, useEditTodo, useDebounce } from "./hooks";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "./firebase";
import { DB_TODOS_REF, DB_TODOS_URL } from "./constants";

function App() {
	const { todos, setTodos, isLoading } = useGetTodos();
	const {
		editInputRef,
		currentTodoId,
		input,
		setInput,
		isEditing,
		setIsEditing,
		handleEditClick,
	} = useEditTodo(); // Не самая удачная реализация

	const [isSorted, setIsSorted] = useState(false);
	const [sortedTodos, setSortedTodos] = useState({});

	const handleSortClick = () => {
		setIsSorted(!isSorted);
	};

	const [searchValue, setSearchValue] = useState("");
	const debounceData = useDebounce(searchValue, 1000);

	// useEffect(() => {
	// 	console.log(debounceData);
	// 		setTodos(
	// 			Object.entries(todos).filter(([id, { title }]) => title.includes(debounceData)),
	// 		);
	// }, [debounceData]);
	// useEffect(() => {
	// 	console.log(debounceData);
	// 	setTodos(
	// 		Object.entries(todos).filter(([id, { title }]) =>
	// 			console.log(title.includes(debounceData)),
	// 		),
	// 	);
	// }, [debounceData]);

	// useEffect(() => {
	// 	get(child(db, DB_TODOS_URL)).then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			console.log(snapshot.val());
	// 		}
	// 	// getTodos(debounceData).then((data) => {
	// 	// 	setTodos(data);
	// 	// });

	// }, [debounceData] );

	// useEffect(() => {
	// 	console.log("debounceData", debounceData);
	// 	let newTodos = {};

	// 	if (debounceData) {
	// 		get(DB_TODOS_REF).then((snapshot) => {
	// 			const unfilteredTodos = snapshot.val();
	// 			newTodos = Object.entries(unfilteredTodos).filter(([id, { title }]) =>
	// 				title.includes(debounceData),
	// 			);
	// 			console.log("newTodos upd:", newTodos);
	// 		});
	// 	} else {
	// 		get(DB_TODOS_REF).then((snapshot) => (newTodos = snapshot.val()));
	// 	}

	// 	setTodos(newTodos);
	// }, [debounceData]);

	console.log(getDatabase());

	return (
		<section className="app padding--width flex--column">
			<Header />
			<Form
				todos={todos}
				setTodos={setTodos}
				isEditing={isEditing}
				editInputRef={editInputRef}
				currentTodoId={currentTodoId}
				input={input}
				setInput={setInput}
				setIsEditing={setIsEditing}
				isSorted={isSorted}
				setIsSorted={setIsSorted}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				handleSortClick={handleSortClick}
			/>
			{isLoading ? (
				<Loader />
			) : (
				<Todos
					todos={todos}
					setIsEditing={setIsEditing}
					handleEditClick={handleEditClick}
					isSorted={isSorted}
					sortedTodos={sortedTodos}
				/>
			)}
		</section>
	);
}

export default App;
