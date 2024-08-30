import "./Form.scss";
import search_img from "../../assets/svg/search_blue.svg";
import create_img from "../../assets/svg/plus.svg";

export const Form = () => {
	return (
		<form className="form flex--column">
			<span className="span__search flex">
				<input type="text" className="input__search input" placeholder="Search task..." />
				<img src={search_img} alt="create" className="search__logo" />
			</span>
			<span className="span__create flex">
				<input type="text" className="input__create input" placeholder="Create task..." />
				<button className="btn btn--create" type="submit">
					<img src={create_img} alt="create" />
				</button>
			</span>
		</form>
	);
};
