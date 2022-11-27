import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Center,
  Heading,
  Stack,
  Highlight,
  Input,
  Textarea,
  LinkBox,
  LinkOverlay,
  Container,
  Flex,
  Spacer,
  Image,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';



export function ScrollingHeader() {


  return (

          <Flex p = {3} bg = "rgb(1, 22, 39)" boxShadow = "md" top = "0" position = "sticky" w = "100%" pr = {48} pl = {48} zIndex ='10'>
            <Image mt={1} src = {require('./house.png')} boxSize = {10} ml = {10} mr = {3}/>
            <Heading mt={1} mb = {2} size = 'xl' color = 'white'>
              volunteller
            </Heading>
            <Spacer/>
            <LinkBox>
              <LinkOverlay href="#footer">
            <Button mt = {2} background = "rgb(1, 22, 39)" border="0" borderRadius = "full" _hover = {{bg: 'rgb(226, 232, 240)', color: 'black'}} color = 'white' mr = {10}>
              <Heading size = "xs" mt = {0}> About </Heading>
            </Button>
            </LinkOverlay>
          </LinkBox>
            <LinkBox>
              <LinkOverlay href="#post-opportunity">
                <Button mt = {2} background = "rgb(1, 22, 39)" border="0" borderRadius = "full" _hover = {{bg: 'rgb(226, 232, 240)', color: 'black'}} color = 'white' mr = {10}>
                  <Heading size = "xs" mt = {0}> Post an opportunity </Heading>
                </Button>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="#find-opportunity">
                <Button mt = {2} background = "rgb(1, 22, 39)" border="0" borderRadius = "full" _hover = {{bg: 'rgb(226, 232, 240)', color: 'black'}} color = 'white' mr = {16}>
                  <Heading size = "xs" mt = {0}> Find opportunities </Heading>
                </Button>
              </LinkOverlay>
            </LinkBox>


          </Flex>

        );
        // <Grid minH="50" p={3}>
        //   <ColorModeSwitcher justifySelf="flex-end" />
        // </Grid>
}

// export default ScrollingHeader;
