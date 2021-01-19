import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/globalStyles';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@components/Header/Header';
import PageItems from '@components/PageItems/PageItems';
import TeslaModel3 from './assets/model3.jpeg';
import TeslaModelS from './assets/models.jpeg';
import TeslaModelX from './assets/modelx.jpeg';
import TeslaModelY from './assets/modely.jpeg';
import Powerwall from './assets/solarPanels.jpeg';
import TeslaAccessories from './assets/accessories.jpeg';

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
          <PageItems
            title={'Model S'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={TeslaModel3}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
          <PageItems
            title={'Powerwall'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={Powerwall}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
          <PageItems
            title={'Model s'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={TeslaModelS}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
          <PageItems
            title={'Model X'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={TeslaModelX}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
          <PageItems
            title={'Model Y'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={TeslaModelY}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
          <PageItems
            title={'Accessories'}
            desc={'0% Company Car Tax.'}
            //descLink={'https://www.tesla.com/en_GB/benefit-in-kind'}
            backgroundImage={TeslaAccessories}
            // leftButton={'https://www.tesla.com/en_gb/model3/design'}
            // leftButtonText={'CUSTOM ORDER'}
            // rightButton={'https://www.tesla.com/en_gb/inventory/new/m3'}
            // rightButtonText={'AVAILABLE INVENTORY'}
            // twoButtons={true}
            // first={true}
          />
        </>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
