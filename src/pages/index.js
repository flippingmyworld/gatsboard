import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "rebass/styled-components";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Page = () => {
  return (
    <Layout>
      <Box sx={{ position: "fixed", top: 0, width: "100%" }}>
        <Box variant="container" py={10}>
          <Flex px={2} alignItems="center" sx={{ position: "relative" }}>
            <Box mx="auto" />
            <Button variant="ninja" px={1} href="#!">
              Create
            </Button>
            <Button variant="ninja" px={1} href="#!">
              Share
            </Button>
            <Button variant="ninja" px={1} href="#!">
              Discover
            </Button>
            <Button  href="#!" ml={2}>
              Go to the Gatsboard now!
            </Button>
          </Flex>
        </Box>
      </Box>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage:
            "linear-gradient(to right top, #0f2026, #082c3a, #003750, #004267, #174c7e)",
        }}
      >
        <Flex textAlign="center" alignItems="center" flexDirection="column">
        <Heading sx={{fontSize:"6vw !important"}}>Say welcome to</Heading>
          <StaticImage
            src="../../static/img/gatsboard.png"
            alt="Gatsboard"
            placeholder="blurred"
            width={600}
          />
          <Button variant='primaryBig'>More Infos</Button>
        </Flex>
        <div class="custom-shape-divider-bottom-1632970288">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </Flex>

      <Box backgroundColor="text" color="background">
        <Box variant="container">
          <Flex
            alignItems="center"
            justifyContent="center"
            py={12}
            flexWrap="wrap"
          >
            <Box width={[1, 1, 1 / 2]}>
              <Flex alignItems="center" justifyContent="center" p={2}>
                <StaticImage
                  src="../../static/img/2.jpg"
                  alt="Gatsboard"
                  placeholder="blurred"
                  width={400}
                />
              </Flex>
            </Box>
            <Box width={[1, 1, 1 / 2]} py={2}>
              <Heading>Create!</Heading>
              <Text py={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap{" "}
              </Text>
              <Button>Let's Create!</Button>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Box variant="container">
          <Flex
            alignItems="center"
            justifyContent="center"
            py={12}
            flexWrap="wrap"
          >
            <Box width={[1, 1, 1 / 2]} py={2}>
              <Heading>Create!</Heading>
              <Text py={3}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap{" "}
              </Text>
              <Button>Let's Create!</Button>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <Flex alignItems="center" justifyContent="center" p={2}>
                <StaticImage
                  src="../../static/img/1.jpg"
                  alt="Gatsboard"
                  placeholder="blurred"
                  width={400}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box backgroundColor="text" color="background">
        <Box variant="container" py={12}>
          <Heading textAlign="center" pb={6}>
            Featured Gasboards!
          </Heading>
          <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
            <Box width={[1, 1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center" p={2}>
                <StaticImage
                  src="../../static/img/3.jpg"
                  alt="Gatsboard"
                  placeholder="blurred"
                  width={300}
                />
              </Flex>
            </Box>
            <Box width={[1, 1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center" p={2}>
                <StaticImage
                  src="../../static/img/4.jpg"
                  alt="Gatsboard"
                  placeholder="blurred"
                  width={300}
                />
              </Flex>
            </Box>
            <Box width={[1, 1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center" p={2}>
                <StaticImage
                  src="../../static/img/5.jpg"
                  alt="Gatsboard"
                  placeholder="blurred"
                  width={300}
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box variant="container" py={10}>
        <Flex px={2} alignItems="center">
          <Text p={2} fontWeight="bold">
            Gatsboard
          </Text>
          <Box mx="auto" />
          <Link variant="nav" href="#!">
            Profile
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
};
export default Page;
