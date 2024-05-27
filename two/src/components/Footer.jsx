import { Box, Button,Stack,VStack,Heading, HStack,Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiOutlineYoutube,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'



const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            {/* left part start*/}
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            >
            Subscribe to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} py="2">
            <Input
            placeholder="Enter Email Here..."
            border={'none'}
            borderRadius="none"
            outline={'none'}
            focusBorderColor="none"
            />
            <Button
            p={'0'}
            colorScheme={'purple'}
            variant={'ghost'}
            borderRadius={'0 20px 20px 0'}
            >
            <AiOutlineSend size={20} />
            </Button>
        </HStack>
        </VStack>
            {/* left part ends*/}



            {/* center part Starts*/}

        <VStack w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
        >
        <Heading textTransform={'uppercase'} textAlign={'center'}>
            DIPESH VIDEO HUB
        </Heading>
        <Text>©All rights Reserved</Text>
            
            </VStack> 
            
            {/* center part ends*/}


            {/* Right part Starts*/}

            <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
        </Heading>
        <Button variant={'link'} colorScheme={'white'}>
            <AiOutlineYoutube size={'2rem'} /> 
            <a target={'black'} href="https://youtube.com/@dipesh8136">
                YouTube  
            </a>
        </Button>
        <Button variant={'link'} colorScheme={'white'}>
        <AiOutlineInstagram size={'2rem'} /> 
            <a target={'black'} href="https://instagram.com/dipesh_mate1610">
            Instagram
            </a>
        </Button>

        <Button variant={'link'} colorScheme={'white'}>
        <AiOutlineGithub size={'2rem'} /> 

            <a target={'black'} href="https://github.com/dipeshmate">
            Github
            </a>
        </Button>
        </VStack>

            {/* Right part Ends*/}
        </Stack>

    </Box>
)
}

export default Footer