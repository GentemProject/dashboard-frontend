import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Fade,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link as ChakraLink,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, useAnimation } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { useFirebaseAuth } from 'hooks';
import { LOGIN } from './queries';
import { UserType } from 'modules';
import { useLoadingStore, useUserStore } from 'stores';
import { useEffect } from 'react';
import { sleep } from 'utils';
// import { sleep } from 'utils';

interface Form {
  email: string;
  password: string;
}

interface Response {
  user: UserType;
}

const schema = yup.object().shape({
  email: yup.string().required().email().lowercase().trim(),
  password: yup.string().required(),
});

export function Login() {
  const [isLargeScreen] = useMediaQuery('(min-width: 48em)');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const firebase = useFirebaseAuth();
  const controls = useAnimation();
  const [mutation] = useMutation<Response, Form>(LOGIN);
  const userStore = useUserStore();
  const loadingStore = useLoadingStore();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Form) => {
    try {
      setIsLoading(true);
      const { email, password } = data;
      const firebaseResponse = await firebase.signInWithEmailAndPassword(email, password);

      if (firebaseResponse.user) {
        const serverResponse = await mutation({
          variables: { email, password },
        });

        if (serverResponse.data) {
          if (isLargeScreen) {
            await controls.start({ width: 0, zIndex: -1, transition: { duration: 0.8 } });
          }
          loadingStore.setIsLoading(true);
          await sleep(500);
          history.push('/');
          await sleep(200);
          userStore.setUser(serverResponse.data.user);
          loadingStore.setIsLoading(false);
        }

        if (serverResponse.errors) {
          console.log('logging out from login');
          await firebase.signOut();
        }
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Flex>
      <motion.div animate={controls}>
        <Box width={{ md: '600px', base: '100%' }} px={{ md: '128px', base: '64px' }} py="128px">
          <Heading mb="6" lineHeight="1">
            Bienvenido a{' '}
            <Text color="gentem.purple" fontWeight="600" display="inline">
              gentem
            </Text>
          </Heading>
          <Text mb="6" lineHeight="1" fontSize="lg" fontWeight="400" color="gentem.grey">
            Ingresar
          </Text>
          {error && (
            <Alert status="error" mb="6" fontSize="sm" borderRadius="base">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb="4" id="email" isInvalid={Boolean(errors.email)}>
              <Input
                {...register('email')}
                placeholder="Organización o correo electrónico"
                type="email"
              />
              <FormErrorMessage mt="1">{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" mb="4" isInvalid={Boolean(errors.password)}>
              <Input {...register('password')} placeholder="Contraseña" type="password" />
              <FormErrorMessage mt="1">{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <ChakraLink mb="8" to="/auth/forgot" fontSize="sm" display="block">
              Olvidaste la contraseña
            </ChakraLink>
            <Button mb="6" width="100%" type="submit" isLoading={isLoading}>
              Continuar
            </Button>
            <Text fontSize="sm" textAlign="center">
              No tienes cuenta?{' '}
              <ChakraLink as={Link} to="/auth/register">
                Regístrate
              </ChakraLink>
            </Text>
            <Box display="flex" justifyContent="center" mt="100px">
              <ChakraLink mx="2">Ayuda</ChakraLink>
              <ChakraLink mx="2">Preguntas frecuentes</ChakraLink>
              <ChakraLink mx="2">Nosotros</ChakraLink>
            </Box>
          </form>
        </Box>
      </motion.div>
      <Box
        flex="1"
        justifyContent="center"
        alignItems="center"
        background="gentem.yellow"
        height="100vh"
        display={{ base: 'none', md: 'flex' }}
      >
        {isLargeScreen && (
          <Fade in={!isLoading}>
            <img src="/logoDefault.png" />
          </Fade>
        )}
      </Box>
    </Flex>
  );
}
