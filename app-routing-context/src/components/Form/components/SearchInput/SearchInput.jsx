import './SearchInput.scss';
import search_input_img from '../../../../assets/svg/search.svg';
import { useContext } from 'react';
import { AppContext } from '../../../../context.js';

export const SearchInput = () => {
	const {searchInput, setSearchInput} = useContext(AppContext);

	return (
		<div className="search-input input-wrapper">
			<input type="text" className="search-input__field" placeholder="Search task..."
			       value={searchInput} onChange={({target}) => setSearchInput(target.value)}/>
			<img src={search_input_img} alt="search todo" className="search-input__img"/>
		</div>
	);
};
