import "./Loader.scss";

export const Loader = () => {
	return (
		<li className="loader__wrapper flex--column">
			<p className="loader__description">Loading...</p>
			<div className="loader" />
		</li>
	);
};
