import './HomePage.scss';
import { Form, Todos } from '../../components';

export const HomePage = () => {
	return (
		<section className="home-page flex--column">
			<Form/>
			<Todos/>
		</section>
	);
};
