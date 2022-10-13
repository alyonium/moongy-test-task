import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Content } from '../Content';

describe('<Content> unit tests', () => {
  test('show data', () => {
    render(<Content summary="some summary" subTitle="sub title" rating={5} title="Big Title" image="image" />);
    expect(screen.getByText(/some summary/)).toBeInTheDocument();
    expect(screen.getByText(/sub title/)).toBeInTheDocument();
    expect(screen.getByText(/Big Title/)).toBeInTheDocument();
  });

  test('show placeholders', () => {
    render(<Content
      summary={undefined}
      subTitle="sub title"
      rating={null}
      title="Big Title"
      image={undefined}
      preTitle="pre Title"
    />);
    expect(screen.getByText(/pre Title/)).toBeInTheDocument();
    expect(screen.getByText(/no description/)).toBeInTheDocument();
    expect(screen.getByText(/no ratings yet/)).toBeInTheDocument();
  });
});
