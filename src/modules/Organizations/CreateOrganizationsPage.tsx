import React, { useState } from 'react';
import { Heading, Box, Text, Button, Grid, Flex } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Information, Contact, Step3, Step4, Step5 } from './components/CreateForm';
interface Form {
  causesId: string[];
  ownersId: string[];
  isPublished: boolean;
  name: string;
  logo: string;
  goal: string;
  description: string;
  useDonationsFor: string;
  email: string;
  phone: string;
  website: string;
  adminFullName: string;
  adminEmail: string;
  locations: {
    address: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    coordenateX: number;
    coordenateY: number;
  }[];
  socialMedia: {
    key: string;
    name: string;
    url: string;
  }[];
  donations: {
    key: string;
    title: string;
    description: string;
  }[];
  sponsors: {
    name: string;
    img: string;
    link: string;
  }[];
}

const schema = yup.object().shape({
  name: yup.string().required().trim(),
  goal: yup.string().required().trim(),
  description: yup.string().required().trim(),
});

export function CreateOrganizationsPage() {
  const form = useForm<Form>({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, watch } = form;

  const [step, setStep] = useState(1);

  const handlePrevStep = () => {
    setStep(step => step - 1);
  };
  const handleNextStep = () => {
    setStep(step => step + 1);
  };

  const onSubmit = (data: Form) => {
    console.log('created!!');
    console.log(data);
  };

  return (
    <Box px="5em" mt={8}>
      <Box mt="28" mx="auto" w="900px">
        <Box textAlign="center" mb="12">
          <Heading as="h2" size="2xl" color="blackAlpha.600">
            Create a new organization
          </Heading>
          <Text color="gray.500" mb="4" fontSize="lg">
            We have 200 organizations that are changing the world.
          </Text>
        </Box>
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="1fr 1fr" gap={6} mb="8">
              <Box>
                {step === 1 && <Information />}
                {step === 2 && <Contact />}
                {step === 3 && <Step3 />}
                {step === 4 && <Step4 />}
                {step === 5 && <Step5 />}
              </Box>
              <Box
                boxShadow="0px 0px 10px rgba(17, 17, 17, 0.1);"
                background="white"
                borderRadius="3xl"
                overflow="hidden"
              >
                <Box h="120px" bg="gray.200"></Box>
                <Box px="1em">
                  <Box mt="-40px" mb="25px">
                    <Flex
                      w="80px"
                      h="80px"
                      borderRadius="3xl"
                      overflow="hidden"
                      background="white"
                      boxShadow="0px 0px 10px rgba(17, 17, 17, 0.1);"
                      alignItems="center"
                      justifyContent="center"
                      zIndex="10"
                      position="relative"
                    >
                      <img
                        src="https://www.gentem.org/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fgentem.org%2Fngos%2F0%2Flogo.png&w=1920&q=75"
                        alt="Prev Logo"
                      />
                    </Flex>
                  </Box>
                  <Box mb="8">
                    {step === 1 && (
                      <>
                        <Heading size="lg" mb="5px" color="gentem.purple">
                          {watch('name') || 'Title'}
                        </Heading>
                        <Text fontSize="md" mb="24px" whiteSpace="pre-wrap">
                          {watch('goal') || 'Your goal'}
                          <br />
                          {watch('description') || 'Your description'}
                        </Text>

                        {watch('useDonationsFor') && (
                          <>
                            <Heading size="sm" mb="5px" color="gentem.purple">
                              ¿Cómo usamos las donaciones que recibimos?
                            </Heading>
                            <Text fontSize="md" whiteSpace="pre-wrap">
                              {watch('useDonationsFor')}
                            </Text>
                          </>
                        )}
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <Heading size="md" mb="24px" color="gentem.purple">
                          Contacto
                        </Heading>
                        <Text fontSize="md">{watch('email') || 'your@email.com'}</Text>
                        <Text fontSize="md">{watch('website') || 'https://yourwebsite.com'}</Text>
                        <Text fontSize="md">{watch('phone') || '0987654321'}</Text>
                      </>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button leftIcon={<ArrowBackIcon />} disabled={step === 1} onClick={handlePrevStep}>
                Prev
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                disabled={step === 5}
                onClick={handleNextStep}
              >
                Next
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
}
