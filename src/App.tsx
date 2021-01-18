import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyles';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@components/Header/Header';

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
