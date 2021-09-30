import React from 'react';
import { Box,Flex } from 'rebass/styled-components';
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image"
const Page = () => {
  return (
    <Layout >
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
    <Flex textAlign="center" alignItems="center" flexDirection="column">
    <StaticImage
     src="../../static/img/gatsboard.png"
     alt="Gatsboard"
     placeholder="blurred"
     layout="fixed"
     width={300}
   />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Flex>
  </Flex>
    </Layout>
  );
};
export default Page;