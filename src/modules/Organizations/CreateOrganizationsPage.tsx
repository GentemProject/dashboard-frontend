import React, { useState } from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Information, Contact, Location, Step4, Step5 } from './components/CreateOrganizationForm';
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
  const { handleSubmit } = form;

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
      <Box mt="28" mx="auto" w="700px">
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
            {step === 1 && <Information />}
            {step === 2 && <Contact />}
            {step === 3 && <Location />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}

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
