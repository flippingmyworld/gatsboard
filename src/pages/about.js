import React from "react";
import { Box} from "rebass/styled-components";
import Layout from "../components/Layout";
import Logo from "../components/Logo"
const Page = () => {
  return (
    <Layout>
    <Logo/>
      <Box variant="container" textAlign="center">
        <h1 style={{ paddingTop: "30px" }}>About</h1>
        <h2>What?</h2>
        <p>
          The Funky Gatsboard
        </p>
        <h2>Why?</h2>
        <p>
          Because <a
          href="https://www.gatsbyjs.com/func-jam-21/"
          target="_blank"
          rel="noreferrer"
        >
        GatsbyJS functions
        </a> are Groovylicious!
        </p>
        <h2>How?</h2>
        <p>By using:</p>
        <p>
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
            GatsbyJS
          </a>{" "}
          with{" "}
          <a
            href="https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#creating-client-only-routes"
            target="_blank"
            rel="noreferrer"
          >
            Functions
          </a>
        </p>
        <p>
          <a href="https://firebase.com" target="_blank" rel="noreferrer">
            FireStore for... guess what... storing the data.
          </a>
        </p>
        
        <h2>Who?</h2>
        <p>
          <strong>Julien C. , just another groovy human being</strong>
        </p>
      </Box>
    </Layout>
  );
};
export default Page;
