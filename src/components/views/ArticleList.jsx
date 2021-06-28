import React from 'react';
import PropTypes from 'prop-types';
import style from './ArticleList.css';
import Article from './Article';

const ArticleList = ({ articles }) => (
	<ul className={style.articleList} aria-label="article-list">
		{articles.map(article => (
			<li key={`${article.title}-${article.author}`}>
				<Article 
					title={article.title}
					author={article.author}
					description={article.description}
				/>
			</li>
		))}
	</ul>
);

ArticleList.propTypes = {
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired
		})
	).isRequired
};

export default ArticleList;