import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyles';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@components/Header/Header';
import PageItems from '@components/PageItems/PageItems';
import { StyledDiv } from './App.styled';
import { TeslaData } from './utils/teslaData';

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
          <StyledDiv>
            {TeslaData.map((tesla) => {
              return <PageItems {...tesla} key={tesla.title} />;
            })}
          </StyledDiv>
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
