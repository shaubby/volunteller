import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
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
  Container,
  Flex,
  Spacer,
  Image,
  Button,
  ScaleFade,
  CardHeader,
  LinkOverlay,
  CardBody,
  Card,
  CardFooter,
  LinkBox,
  Divider,
  theme,
  useToast,
  useClipboard,
} from '@chakra-ui/react';
import {CopyIcon, ExternalLinkIcon} from '@chakra-ui/icons';



export default function DisplayCard({databaseObject, mounted}) {
  const [mount, setMount] = useState(mounted);
  useEffect(() => {
    setMount(false);
  }, [mounted]);
  const {onCopy, value, setValue, hasCopied} = useClipboard(databaseObject.website);
  const [fade, setFade] = React.useState(true);

  // constructor(props) {
  //   super(props);
  //   state = {
  //     name: props.name,
  //     location: props.location,
  //     time: props.time,
  //     website: props.website,
  //     description: props.description,
  //     requirements: props.requirements,
  //     imagelink: props.imagelink
  //   };
  //}

  const handleSignUp = () => {
    window.open(databaseObject.website, "_blank", "noopener noreferrer");

  }
  const handleCopy = () => {
    toast({
      title: 'Copied!',
      description: "We've copied the link to your clipboard",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onCopy();
  }

  useEffect(function callback() {
    // ...

    return function () {
      console.log("hi");
    }
  }, []);
  

  const toast = useToast();


    return(

      <ScaleFade initialScale={0.5} in={mounted}>
        <Card maxW = '500' bg = 'white' variant = 'elevated' p = {0}>

          <CardBody>
            {databaseObject.imagelink ? <Image src = {databaseObject.imagelink} borderRadius='lg'/> : null}

            <Stack spacing = '3' mt = '6'>
            <Heading size = "l">
              {databaseObject.name}
            </Heading>

          <Text fontSize = "md" lineHeight = '2'>
            {databaseObject.description}

            <br/>
            <Divider pos = 'relative' top = {3}/>
            <br/>
            <Highlight query = "location:" styles={{ borderRadius:'base', mt: 3, px: '2', py: '1', mr: '2', bg: 'orange.100', ml: '-0.5', fontWeight: "bold" }}> Location: </Highlight> {databaseObject.location}
            <br/>
            <br/>
            <Highlight query = "time:" styles={{borderRadius: 'base', px: '2', py: '1', mr: '2', bg: 'orange.100', ml: '-0.5 ', fontWeight: "bold"  }}> Time: </Highlight> {databaseObject.time}
            <br/>
            <br/>
            <Highlight query = "Requirements:" styles={{borderRadius: 'base', px: '2', py: '1', mr: '2', ml: '-0.5', bg: 'orange.100', fontWeight: "bold"  }}> Requirements: </Highlight> {databaseObject.requirements}
          </Text>
          </Stack>

          </CardBody>
          <Divider/>
          <CardFooter>

          <LinkBox>
            <LinkOverlay href={databaseObject.website} isExternal>
            <Button colorScheme = "teal" mr = {4} leftIcon = {<ExternalLinkIcon/>}>Sign up!</Button>
            </LinkOverlay>
          </LinkBox>
            <Button onClick={handleCopy}
              colorScheme = "teal" variant = "ghost" leftIcon={<CopyIcon />}>Share</Button>
          </CardFooter>
        </Card>

      </ScaleFade>
    );


}
// <CardHeader alignItems = "center">
//   <Heading size = "l">
//     {name}
//   </Heading>
// </CardHeader>
// export default ScrollingHeader;
