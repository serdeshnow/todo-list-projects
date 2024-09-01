import { useState } from "react";
import search_img from "../../../../assets/svg/search_blue.svg";

export const SearchInput = ({ handleSortClick, isSorted }) => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<span className="span__search flex">
			<input
				type="text"
				className="input__search input"
				placeholder="Search task..."
				value={searchValue}
				onChange={({ target }) => setSearchValue(target.value)}
			/>
			<img src={search_img} alt="create" className="search__logo" />
			<div
				className={isSorted ? "form__sort form__sort--active" : "form__sort"}
				onClick={handleSortClick}
			>
				<span className="form__sort-line"></span>
				<span className="form__sort-line"></span>
				<span className="form__sort-line"></span>
			</div>
		</span>
	);
};
