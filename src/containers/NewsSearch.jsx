import React, { Component } from 'react';
import style from './NewsSearch.css';
import ArticleList from '../components/views/ArticleList';
import Search from '../components/views/Search';
import { fetchNews } from '../services/fetchNews';

export default class NewsSearch extends Component {
	state = {
		loading: false,
		articles: null
	}

	componentDidMount = async () => {
		this.setState({ loading: true });

		const articles = await fetchNews();

		this.setState({
			loading: false,
			articles
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className={style.newsSearch}>
				<Search
					handleSearchInput={() => {}}
					handleFormSubmit={() => {}}
				/>

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
