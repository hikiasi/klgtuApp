import { NavigationProvider } from '@app/navigation-provider';
import { AppThemeProvider } from '@app/theme-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, html,
  body {
    box-sizing: border-box;
    margin: 0;
  }
`

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <GlobalStyles />
        <NavigationProvider />
      </AppThemeProvider>
    </QueryClientProvider>
  );
};
