import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../FallBack/';

describe('ErrorBoundary', () => {
  it('renders the children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test child</div>
      </ErrorBoundary>,
    );

    expect(getByText('Test child')).toBeInTheDocument();
  });

  it('renders an error message and a retry button when there is an error', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    const { getByText, getByRole } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(getByText('Error Title')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();

    fireEvent.click(getByRole('button'));
    expect(getByText('Test child')).toBeInTheDocument();
  });
});
