import "./Form.scss";
import { useEffect, useState } from "react";
import { CreateInput, EditInput, SearchInput } from "./components";
import { useDebounce } from "../../hooks";
import { getTodos } from "../../api";

export const Form = ({
	todos,
	setTodos,
	refreshTodos,
	isEditing,
	editInputRef,
	currentTodoId,
	input,
	setInput,
	setIsEditing,
}) => {
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
	);
};
