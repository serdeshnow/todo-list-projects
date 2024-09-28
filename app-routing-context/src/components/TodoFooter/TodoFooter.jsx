import './TodoFooter.scss';
import { Link } from 'react-router-dom';

export const TodoFooter = ({todo}) => {
	return (
		<footer className="footer flex">
			<div className="footer__left-bar flex">
				<h2 className="footer__logo logo">
					<Link to="/" className="footer__logo-link">
						born to do 2024
					</Link>
				</h2>
				<p className="footer__author-description">
					<a href="https://github.com/serdeshnow" className="footer__author-link" target="_blank"
					   rel="noreferrer">
						serdeshnow
					</a>
				</p>
			</div>
			<div className="footer__right-bar flex">
				<p className="footer__todo-info-description">
					todo id: {todo.id}
				</p>
			</div>
		</footer>
	);
};
