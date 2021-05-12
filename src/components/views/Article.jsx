import React from 'react';
import PropTypes from 'prop-types';
// import style from './Article.css';

const Article = ({ title, author, description }) => (
	<>
		<h3>{title}</h3>
		<p>{author}</p>
		<p>{description}</p>
	</>
);

Article.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Article;