import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('News search component', () => {
  afterEach(() => cleanup());

  it('renders news search page', async () => {
    render(<NewsSearch />);
	screen.getByText('Loading...');
	
	const searchInput = screen.getByRole('textbox', { name: 'search-input' });

	const submitButton = screen.getByRole('button', { name: 'form-submit' });

	const searchForm = screen.getByRole('form', { name: 'article-search' });

	const articleList = await screen.findByRole('list', { name: 'article-list' });

	expect(articleList).toMatchSnapshot();
	expect(submitButton).toMatchSnapshot();
	expect(searchForm).toMatchSnapshot();

	userEvent.type(searchInput, 'Alli');
	userEvent.click(submitButton);

	return waitFor(async () => {
		const searchList = await screen.findByRole('list', { name: 'article-list' });

		expect(searchList.childElementCount).toEqual(1);
	});

  });

});
