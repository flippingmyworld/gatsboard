import React from 'react';
import { Box, } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { GlobalStyle, SiteWrapper } from '../theme/Site.style';
import theme from '../theme';

const Layout = ({children}) => {
  const title = 'Gatsboard';
  const description = 'Gatsboard is a cool soundboard that trigger sounds.';
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SiteWrapper>
        <Helmet>
          <html lang="en" />
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
        </Helmet>
        <Box minHeight="100vh" width="100%" bg="background" color="text">
        {children}
        </Box>

      </SiteWrapper>
    </ThemeProvider>
  );
};
export default Layout;
