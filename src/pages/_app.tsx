import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Provider } from 'next-auth/client';

import GlobalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>

          <GlobalStyles />
          <Component {...pageProps} />

      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
