import './Form.scss';
import { CreateInput, SearchInput } from './components';

export const Form = () => {
	return (
		<form className="form flex--column">
			<SearchInput/>
			<CreateInput/>
		</form>
	);
};
