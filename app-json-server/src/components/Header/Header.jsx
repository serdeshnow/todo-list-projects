import "./Header.scss";

const TECHS = ["React.js", "useState()", "useEffect()", "JSON Server"];

export const Header = () => {
	return (
		<header className="header">
			<h1 className="header__logo logo">
				<a href="/" className="header__logo-link">
					born to do
				</a>
			</h1>
			<ul className="header__techs-list">
				{TECHS.map((tech, index) => {
					return (
						<li className="header__techs-item" key={index}>
							<code>{tech}</code>
						</li>
					);
				})}
			</ul>
		</header>
	);
};
