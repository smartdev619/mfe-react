import { render } from '@testing-library/react';

import MfeReactComponents from './components';

describe('MfeReactComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MfeReactComponents />);
    expect(baseElement).toBeTruthy();
  });
});
