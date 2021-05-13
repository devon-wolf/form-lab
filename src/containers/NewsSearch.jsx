import React, { Component } from 'react';
import style from './NewsSearch.css';
import ArticleList from '../components/views/ArticleList';
import Search from '../components/views/Search';
import { fetchNews } from '../services/fetchNews';

export default class NewsSearch extends Component {
	state = {
		loading: false,
		articles: []
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
		const { loading, articles } = this.state;
		return (
			<div className={style.newsSearch}>
				<Search
					handleSearchInput={() => {}}
					handleFormSubmit={() => {}}
				/>
				{loading
					? 	<p>Loading...</p>
					: 	<ArticleList 
							articles={articles}
						/>
				}
			</div>
		)
	}
}
