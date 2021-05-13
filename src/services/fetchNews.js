// I'm using the Animal Crossing API and pretending it delivers news articles

export const fetchNews = async (param) => {
	const response = await fetch('https://ac-vill.herokuapp.com/villagers');
	const articles = await response.json();

	return articles.map(article => ({
		title: article.phrase,
		author: article.name,
		description: article.quote
	}));
};