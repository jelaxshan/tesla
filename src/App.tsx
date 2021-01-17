import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyles';
import { ErrorBoundary } from 'react-error-boundary';

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
          Hello
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
