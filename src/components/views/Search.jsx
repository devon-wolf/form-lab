import React from 'react';
import PropTypes from 'prop-types';
import style from './Search.css';

const Search = ({ handleSearchInput, handleFormSubmit }) => (
	<form
		aria-label="article-search"
		className={style.searchForm}
		onSubmit={handleFormSubmit}
	>
		<input 
			placeholder="Enter search terms"
			aria-label="search-input"
			onInput={handleSearchInput}
		/>
		
		<button aria-label="form-submit">
			Search
		</button>

	</form>
);

Search.propTypes = {
	handleSearchInput: PropTypes.func.isRequired,
	handleFormSubmit: PropTypes.func.isRequired
};

export default Search;