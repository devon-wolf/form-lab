import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('News search component', () => {
  afterEach(() => cleanup());

  it('renders news search page', async () => {
    render(<NewsSearch />);

	screen.getByRole('textbox', { name: 'search-input' });
	screen.getByRole('button', { name: 'form-submit' });
	screen.getByRole('form', { name: 'article-search' });
	screen.getByText('Loading...');

	const articleList = await screen.findByRole('list', { name: 'article-list' });

	expect(articleList).not.toBeEmptyDOMElement();

  });

});
