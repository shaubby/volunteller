import React , {useEffect, useState} from 'react';
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
  SimpleGrid,
  theme,
  useToast,
  useClipboard,
} from '@chakra-ui/react';
import {CopyIcon, ExternalLinkIcon} from '@chakra-ui/icons';
 import DisplayCard from './DisplayCard.js';



export default function CardList({cardItems, mounteds}) {
    const [items, setItems] = useState(cardItems);
    const [mounts, setMounts] = useState(mounteds);
    useEffect(() => {
      setItems([])
      setItems(cardItems)
      setMounts(mounteds);
      if(mounteds == false) {
        const timer = setTimeout(() => {
        setItems([])
  }, 300);
      }
      console.log(items)
    }, [cardItems, mounteds]);
    const list = items.map((item) => <DisplayCard databaseObject = {item} mounted = {mounts}/>);

    return(

      <SimpleGrid mt = {20} spacing = {30} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
        {list}
      </SimpleGrid>

    );


}
// <CardHeader alignItems = "center">
//   <Heading size = "l">
//     {name}
//   </Heading>
// </CardHeader>
// export default ScrollingHeader;
