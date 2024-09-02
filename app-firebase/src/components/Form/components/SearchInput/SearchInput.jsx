import "./SearchInput.scss";
import search_img from "../../../../assets/svg/search_blue.svg";

export const SearchInput = ({
	todos,
	setTodos,
	searchValue,
	setSearchValue,
	isSorted,
	handleSortClick,
}) => {
	// const [isSorted, setIsSorted] = useState(false);

	// const handleSortClick = () => {
	// 	console.log("handle check", todos);

	// 	setIsSorted((prev) => !prev);
	// 	if (!isSorted) {
	// 		setTodos(todos.sort((a, b) => a.title.localeCompare(b.title)));
	// 	} else {
	// 		setTodos(todos.sort((a, b) => a.id - b.id));
	// 	}
	// };

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
