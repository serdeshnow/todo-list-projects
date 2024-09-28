import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<section className="not-found-page">
			<p className="title">Page not found</p>
			<Link to="/">return to home</Link>
		</section>
	);
};
