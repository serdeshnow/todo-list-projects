import "./Loader.scss";

export const Loader = () => {
	return (
		<div className="loader__wrapper flex--column">
			<p className="loader__description">Loading...</p>
			<div className="loader" />
		</div>
	);
};
