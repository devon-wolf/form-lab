import React, { Component } from 'react';
import style from './NewsSearch.css';
import ArticleList from '../components/views/ArticleList';

export default class NewsSearch extends Component {
	render() {
		return (
			<div className={style.newsSearch}>
				<p>Loading...</p>
				<ArticleList 
					articles={[{
						title: 'Test Article',
						author: 'me',
						description: 'this is only a test'
					}]}
				/>
			</div>
		)
	}
}
