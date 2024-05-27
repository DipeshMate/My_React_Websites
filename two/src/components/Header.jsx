import React from 'react';
import {Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, DrawerHeader, VStack, HStack,} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import{BiMenuAltLeft} from 'react-icons/bi'
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <>
    <Button  pos={"fixed"} 
    top={"4"} left={"4"} 
    colorScheme="purple" 
    p={"0"} 
    w={"10"} 
    h={"10"} 
    borderRadius={"full"}
    zIndex={'overlay'}
    onClick={onOpen}
    >
<BiMenuAltLeft size={"20"}/>
    </Button>

    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>Welcome To My WebSite</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={"start"}> {/*already in vertical column*/} 
                    <Button  onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                        <Link to={'/videos?categoty=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                    </VStack>

                    <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'} alignItems={"center"} justifyContent={'space-evenly'}>
                        <Button colorScheme={'purple'}>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                        <Button colorScheme={'purple'} variant={'outline'}>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>

                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    </>
    );
};

export default Header