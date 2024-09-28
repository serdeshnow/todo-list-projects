import './Header.scss';
import btn_back_img from '../../assets/svg/arrow-left.svg';
import btn_sort_img from '../../assets/svg/sort.svg';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context.js';

const TECHS = [ 'React.js', 'JSON Server', 'React router v.6', 'useContext()' ];

export const Header = () => {
	const navigate = useNavigate();
	const urlHomeMatch = useMatch('/');

	const {handleSort} = useContext(AppContext);

	return (
		<header className="header">
			<div className="header__left-bar flex">
				{!urlHomeMatch &&
					<button className="header__btn-back btn--dark" onClick={() => navigate(-1)}>
						<img src={btn_back_img || undefined} alt="back button"
						     className="header__btn-back-img"/>
					</button>
				}

				<h1 className="header__logo logo">
					<Link to="/" className="header__logo-link">
						born to do
					</Link>
				</h1>
			</div>
			<div className="header__right-bar flex">
				<ul className="header__techs-list">
					{TECHS.map((tech, index) => {
						return (
							<li className="header__techs-item" key={index}>
								<code>{tech}</code>
							</li>
						);
					})}
				</ul>
				{urlHomeMatch &&
					<button className="header__btn-sort btn--dark" onClick={handleSort}>
						<img src={btn_sort_img || undefined} alt="sort todos button"
						     className="header__btn-back-img"/>
					</button>
				}
			</div>
		</header>
	);
};
