import React , {useEffect} from 'react';
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
  Flex,
  Spacer,
  Button,
  theme,
  HStack,
  InputGroup,
  InputRightElement,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputLeftAddon,
  FormControl,
  Image,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import {Search2Icon, ArrowRightIcon, EditIcon, StarIcon, ExternalLinkIcon} from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ScrollingHeader } from './ScrollingHeader';
import { Logo } from './Logo';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';
import CardList from './CardList.js';



const firebaseConfig = {
  apiKey: "AIzaSyDlLhtYGieAmp9a_jJvSH1wVZMnK45MlRc",
  authDomain: "volunteller.firebaseapp.com",
  projectId: "volunteller",
  storageBucket: "volunteller.appspot.com",
  messagingSenderId: "791672953586",
  appId: "1:791672953586:web:de10530c69a6f191158e6b",
  measurementId: "G-867BP4VWYX"
};

const app = firebase.initializeApp(firebaseConfig);
let database = firebase.database();
// database.ref("zipcodes/76051/Library/name").on('value', (snapshot) => {
//   console.log(snapshot.val());
// });


// database.ref("zipcodes/76051/Library/name").get().then((snapshot) => {
//   db = snapshot.val();
//   console.log(db);
// });


//database.ref("zipcodes/76051/Library/name").set("yay");


function App() {
  const [zipCode, setZipCode] = React.useState('');
  var db;
  const [items, setItems] = React.useState([]);
  const toast = useToast();
  const [mounts, setMounts] = React.useState(false);
  database.ref("zipcodes").on('value', (snapshot) => {
     db = snapshot.val();
  });

  // ------------------------ FORM CONTROL --------------------------
  const [name, setName] = React.useState(''); // name
  const handleNameChange = (e) => setName(e.target.value);
  let isNameError = name === '';

  const [description, setDescription] = React.useState(''); // name
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  let isDescriptionError = description === '';

  const [imagelink, setImagelink] = React.useState(''); // name
  const handleImagelinkChange = (e) => setImagelink(e.target.value);
  let isImagelinkError = imagelink === '';

  const [location, setLocation] = React.useState(''); // location
  const handleLocationChange = (e) => setLocation(e.target.value);
  let isLocationError = location === '';

  const [time, setTime] = React.useState(''); // time
  const handleTimeChange = (e) => setTime(e.target.value);
  let isTimeError = time === '';

  const [requirements, setRequirements] = React.useState(''); // requirements
  const handleRequirementsChange = (e) => setRequirements(e.target.value);
  let isRequirementsError = requirements === '';

  const [website, setWebsite] = React.useState(''); // requirements
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  let isWebsiteError = website === '';

  const [city, setCity] = React.useState(''); // requirements
  const handleCityChange = (e) => setCity(e.target.value.toUpperCase());
  let isCityError = city === '';

  const handleFormSubmit = (e) => {
    if (!isCityError && !isWebsiteError &&!isRequirementsError && !isTimeError && !isLocationError && !isImagelinkError && !isDescriptionError && !isNameError) {
      toast({
        title: 'Success!',
        description: "We've added your opportunity to our list",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      let opp = {description: description,
                imagelink: "https://" + imagelink,
                location: location,
                name: name,
                requirements: requirements,
                website: "https://" + website,
                time: time};


      database.ref("zipcodes/" + city).push(opp);




    } else {
      toast({
        title: 'Error',
        description: "One or more field is invalid",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }



  const handleChange  = (e) => {
    setZipCode(e.target.value.toUpperCase());
    console.log(items);
    //setItems([]);
    setMounts(false);
    const timer = setTimeout(() => {setItems([])}, 300);

  }
  const handleClick  = (e) => {
    setZipCode(e.target.value);

    setMounts(true);
    var blank = [];
    setItems(blank);
    for (var i in db[zipCode]){

      var newArr = items;
      newArr.push(db[zipCode][i])
      setItems(newArr);
    }


  }

  useEffect(() => {
    const btn = document.getElementById("grid");
    console.log(btn);
  }, []);

  return (
    <ChakraProvider theme={theme}>
    <Box fontSize="xl">
    <ScrollingHeader/>
      <Grid>

          <Flex minH = {0} bg = "rgb(247, 250, 252)" p = {20} px = {52}>
            <Box textAlign="left" >
              <Stack spacing = {4}>
                <Heading lineHeight='tall' as = 'h1' size = "4xl" >Find <Highlight query='easy'   styles={{px: '1', rounded: 'full', pb: '2', pt: '0', px: '4', bg: 'red.100'}}>easy</Highlight> ways to give </Heading>
                <Heading lineHeight='tall' as = 'h1' size = "4xl" >back, <Highlight query='faster'  styles={{ px: '1', rounded: 'full', pb: '2', pt: '1', px: '4', bg: 'red.100'}}>faster</Highlight></Heading>
              </Stack>

              <Center>
              <Text maxW = "750px" spacing = {100} >
                <br/>
                Our program allows you to find and post volunteer opportunities in your community. This way you don't have to go looking for places to volunteer, and you can spend your time helping the comminity instead
              </Text>
              </Center>
            </Box>
            <Spacer/>
            <Image src = "https://img.icons8.com/fluency/800/null/oak-leaf.png" boxSize = '400px'/>
          </Flex>
          <Grid  gap = {20} p = {20} px = {72} textAlign = "center">
            <Heading size = '3xl' ><Highlight query="It's a 3 three step process"   styles={{px: '1', rounded: 'xl', py: '3', px: '8', bg: 'blue.100'}}>It's a 3 three step process</Highlight>
            </Heading>
            <Flex alignItems = "center">

              <Stack alignItems = "center">

                <EditIcon boxSize = {140}/>
                <Heading size= "2xl" color = "#2d3748">Step 1.</Heading>
                <Heading size = "md" color = "#2d3748"> Enter your zip code</Heading>

              </Stack>
              <Spacer/>
              <ArrowRightIcon color = '#4a5568'/>
              <Spacer/>
              <Stack alignItems = "center">

                <Search2Icon boxSize = {140}/>
                <Heading size= "2xl" color = "#2d3748">Step 2.</Heading>
                <Heading size = "md" color = "#2d3748"> Find an opportunity</Heading>

              </Stack>
              <Spacer/>
              <ArrowRightIcon color = "#4a5568"/>
              <Spacer/>
              <Stack alignItems = "center">

                <StarIcon boxSize = {140}/>
                <Heading size= "2xl" color = "#2d3748">Step 3.</Heading>
                <Heading size = "md" color = "#2d3748"> Sign up and make a difference!</Heading>

              </Stack>

            </Flex>

          </Grid>
          <Box minH = {0} p = {50} bg = "hsl(179, 51%, 40%)" pb = {100} id = "find-opportunity">
            <Center>
              <Box borderWidth='1px' borderRadius='lg' overflow='hidden' minH = "200px" minW = "800" bg = "papayawhip" p = {10} >
              <Stack spacing = {4}>
                <Heading maxW = "700px" ml={1} size = "base">
                  Just enter your city's name and we will show you volunteer opportunities in your area
                  </Heading >
                <Box borderWidth = {1} borderColor = "gray.400" p ={3} borderRadius = "xl" bg = "white">
                <InputGroup size = "md" >
                  <Input pr='4.5rem' bg = "white" placeholder = "Enter your city" onChange = {handleChange} value = {zipCode}/>
                  <InputRightElement width = "4.5rem">
                    <Button variant = "solid"  h='1.75rem' size = "sm" onClick = {handleClick}>
                      Find
                    </Button>
                  </InputRightElement>
                </InputGroup>
                </Box>

                </Stack>
              </Box>
            </Center>

            <CardList cardItems = {items} mounteds = {mounts}/>
          </Box>
          <Box bg = 'rgb(247, 250, 252)' p = {50} textAlign = "center" id = "post-opportunity">
            <Heading mb = {5} size = 'xl'><Highlight query="Post an opportunity"   styles={{ rounded: 'xl', py: '2', px: '6', bg: 'red.100'}}>
              Post an opportunity
            </Highlight> </Heading>
            <Text mb = {10}>
              Volunteller is a site maintained by its users, and we need you to post any volunteer opportunities you find.
            </Text>
            <Center>
              <Box minW = {1200} maxW = {1200} textAlign = 'left' borderWidth = {1} borderColor = "gray.400" p ={12} borderRadius = "xl" bg = "white">

                <Flex>

                  <FormControl isInvalid = {isNameError}>
                    <FormLabel>Name of opportunity</FormLabel>
                    <Input name = "name" onChange = {handleNameChange} maxW = {500} value = {name}/>
                      {!isNameError ? (<FormHelperText textAlign>Enter the name of the opportunity.</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>

                  <FormControl isInvalid = {isDescriptionError}>
                    <FormLabel>Description of opportunity</FormLabel>
                    <Input name = "description" onChange = {handleDescriptionChange} maxW = {500} value = {description}/>
                      {!isDescriptionError ? (<FormHelperText textAlign>Provide a brief description of the opportunity.</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl mt = {5} isInvalid = {isLocationError}>
                    <FormLabel>Location</FormLabel>
                    <Input name = "location" onChange = {handleLocationChange} maxW = {500} value = {location}/>
                      {!isLocationError ? (<FormHelperText textAlign>Enter the location where this will take place.</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>

                  <FormControl mt = {5} isInvalid = {isTimeError}>
                    <FormLabel>Time</FormLabel>
                    <Input name = "time" onChange = {handleTimeChange} maxW = {500} value = {time}/>
                      {!isTimeError ? (<FormHelperText textAlign>Enter the time/times when this will take place.</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl mt = {5} isInvalid = {isRequirementsError}>
                    <FormLabel>Requirements</FormLabel>
                    <Input name = "Requirements" onChange = {handleRequirementsChange}  maxW = {500} value = {requirements}/>
                      {!isRequirementsError ? (<FormHelperText textAlign>Please enter the requirements to participate in this event (e.g age, city of resident)</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>

                  <FormControl mt = {5} isInvalid = {isImagelinkError}>
                    <FormLabel>Link to Image</FormLabel>
                    <InputGroup  maxW = {500}>
                      <InputLeftAddon children='https://' />
                      <Input name = "Requirements" onChange = {handleImagelinkChange} value = {imagelink}/>
                    </InputGroup>
                      {!isImagelinkError ? (<FormHelperText textAlign>Please enter a link to an image you would like to display</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>
                </Flex>
                <Flex>
                  <FormControl mt = {5} isInvalid = {isWebsiteError}>
                    <FormLabel>Link to website</FormLabel>
                    <InputGroup  maxW = {500}>
                      <InputLeftAddon children='https://' />
                      <Input name = "Requirements" onChange = {handleWebsiteChange} value = {website}/>
                    </InputGroup>
                      {!isWebsiteError ? (<FormHelperText textAlign>Please enter a link to sign up</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>

                  <FormControl mt = {5} isInvalid = {isCityError}>
                    <FormLabel>City</FormLabel>
                    <Input name = "Requirements" onChange = {handleCityChange} value = {city} maxW = {500}/>
                      {!isCityError ? (<FormHelperText textAlign>Please enter the city where this is located</FormHelperText>) : (<FormErrorMessage>This field is required</FormErrorMessage>)}
                  </FormControl>
                </Flex>

                <Button mt = {5} onClick = {handleFormSubmit} colorScheme = "teal"> Submit
                </Button>


              </Box>
            </Center>
          </Box>
          <Box p = '10' textAlign = 'center' bg = "white" id = "footer">
            <Heading size = "sm">
              Made by <Link _hover = {{color: 'teal.500'}} href = "https://github.com/Shaubby" isExternal><u>Rishabh Agarwal</u></Link> for <Link color='teal.500' href = "https://give-back-hacks-3.devpost.com/" isExternal>Give Back Hacks 3 <ExternalLinkIcon mx='2px' verticalAlign = "center" /> </Link>
            </Heading>
          </Box>

      </Grid>




    </Box>
    </ChakraProvider>
  );
}

export default App;
