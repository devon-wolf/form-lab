import React, { Component } from 'react';
import style from './NewsSearch.css';
import ArticleList from '../components/views/ArticleList';
import Search from '../components/views/Search';
import { fetchNews } from '../services/fetchNews';

export default class NewsSearch extends Component {
	state = {
		loading: false,
		articles: [],
		searchParams: ''
	}

	componentDidMount = async () => {
		this.setState({ loading: true });

		const articles = await fetchNews();

		this.setState({
			loading: false,
			articles
		});
	}

	handleSearchInput = e => this.setState({ searchParams: e.target.value });

	render() {
		console.log(this.state.searchParams);
		const { loading, articles, searchParams } = this.state;
		return (
			<div className={style.newsSearch}>
				<Search
					handleSearchInput={this.handleSearchInput}
					handleFormSubmit={() => {}}
					inputValue={searchParams}
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
