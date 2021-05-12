import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('News search component', () => {
  afterEach(() => cleanup());

  it('renders news search page', () => {
    render(<NewsSearch />);

	screen.getByText('Loading...');
	
  });

});
