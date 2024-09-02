import "./CreateInput.scss";
import create_img from "../../../../assets/svg/add.svg";
import { useCreateTodo } from "../../../../hooks/useCreateTodo";

export const CreateInput = () => {
	const { createValue, setCreateValue, handleCreateClick, isCreating } = useCreateTodo();

	return (
		<span className="span__create flex">
			<input
				type="text"
				className="input__create input"
				placeholder="Create task..."
				value={createValue}
				onChange={({ target }) => setCreateValue(target.value)}
			/>
			<button
				className="btn btn--create"
				type="submit"
				onClick={(e) => handleCreateClick(e)}
				disabled={isCreating}
			>
				<img src={create_img} alt="create" />
			</button>
		</span>
	);
};
