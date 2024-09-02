import "./Form.scss";
// import { useEffect, useState } from "react";
import { CreateInput, EditInput, SearchInput } from "./components";
// import { useDebounce } from "../../hooks";

export const Form = ({
	todos,
	setTodos,
	isEditing,
	editInputRef,
	currentTodoId,
	input,
	setInput,
	setIsEditing,
	isSorted,
	setIsSorted,
	searchValue,
	setSearchValue,
	handleSortClick,
}) => {
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
				/>
			) : (
				<CreateInput />
			)}
		</form>
	);
};
