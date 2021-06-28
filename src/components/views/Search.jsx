import React from 'react';
import PropTypes from 'prop-types';
import style from './Search.css';

const Search = ({ handleSearchInput, handleFormSubmit, inputValue }) => (
	<form
		aria-label="article-search"
		className={style.searchForm}
		onSubmit={handleFormSubmit}
	>
		<input 
			placeholder="Enter search terms"
			aria-label="search-input"
			value={inputValue}
			onInput={handleSearchInput}
		/>
		
		<button aria-label="form-submit">
			Search
		</button>

	</form>
);

Search.propTypes = {
	handleSearchInput: PropTypes.func.isRequired,
	handleFormSubmit: PropTypes.func.isRequired,
	inputValue: PropTypes.string.isRequired
};

export default Search;