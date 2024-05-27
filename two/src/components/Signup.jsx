import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

const Signup = () => {
const [values,setValues] = useState({
    name:"",
    email:"",
    pass:"",
});

const handleSubmission =()=>{

    createUserWithEmailAndPassword(auth,values.email, values.pass).then((res)=>{
        console.log(res);
    })
    .catch((err)=> console.log("Error-",err));
};

    return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
        <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
        >
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />

            <Input
            onChange={(event)=> setValues((prev)=>({...prev, name: event.target.value}))}
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
            />
            <Input
        
        
        onChange={(event)=> setValues((prev)=>({...prev, email: event.target.value}))}
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
            />
            <Input
onChange={(event)=> setValues((prev)=>({...prev, pass: event.target.value}))}
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
            />
            <Button onClick={handleSubmission} colorScheme={'purple'} type={'submit'}>
            Sign Up
            </Button>

            <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/login'}>Login In</Link>
            </Button>
            </Text>
        </VStack>
        </form>
    </Container>
    );
};

export default Signup;
