import './CreateInput.scss';
import create_input_img from '../../../../assets/svg/create.svg';
import { useContext, useState } from 'react';
import { createTodo } from '../../../../api';
import { AppContext } from '../../../../context.js';

export const CreateInput = () => {
	const {todos, setTodos} = useContext(AppContext);

	const [ createTaskValue, setCreateTaskValue ] = useState('');
	const [ isCreating, setIsCreating ] = useState(false); // POST

	const handleCreateInput = ({target}) => {
		setCreateTaskValue(target.value);
	};

	const requestAddTodo = (createTaskValue) => {
		setIsCreating(true);

		createTodo(createTaskValue)
			.then((newTodo) => (setTodos([ ...todos, newTodo ])))
			.finally(() => setIsCreating(false));
	};

	const handleCreateTodo = (event) => {
		event.preventDefault();
		if (createTaskValue) {
			requestAddTodo(createTaskValue);
			setCreateTaskValue('');
		}
	};

	return (
		<div className="create-input input-wrapper">
			<input type="text" className="create-input__field" placeholder="Create task..."
			       value={createTaskValue || ''} onChange={handleCreateInput}/>
			<button className="create-btn btn" type="submit" onClick={handleCreateTodo}
			        disabled={isCreating}>
				<img src={create_input_img} alt="create todo" className="create-input__img"/>
			</button>
		</div>
	);
};
