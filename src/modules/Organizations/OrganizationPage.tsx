import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
  Tag,
  Grid,
  Button,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { Organization } from './types';
import { GET_ORGANIZATION } from './graphql';

interface Data {
  organization: Organization;
}

export function OrganizationPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading } = useQuery<Data>(GET_ORGANIZATION, {
    variables: {
      slug,
    },
  });

  if (loading || !data) {
    return <Box>Is Loading...</Box>;
  }

  return (
    <Box>
      <Box h="420px" bg="gray.200"></Box>
      <Box px="10em">
        <Box mt="-120px" mb="50px">
          <Flex
            w="240px"
            h="240px"
            borderRadius="3xl"
            overflow="hidden"
            background="white"
            boxShadow="0px 0px 10px rgba(17, 17, 17, 0.1);"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={data.organization.logo}
              alt={data.organization.name}
              // width="100%"
              // height="100%"
            />
          </Flex>
        </Box>
        <Grid templateColumns="2fr 1fr" gap={12}>
          <Box>
            <Breadcrumb mb="50px">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Docs</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box mb="48px">
              {data.organization.causes.map(cause => (
                <Tag key={cause.id} mr="2">
                  {cause.name}
                </Tag>
              ))}
            </Box>
            <Heading size="lg" mb="48px">
              {data.organization.name}
            </Heading>
            <Text fontSize="md" mb="48px">
              {data.organization.goal}
              {data.organization.description}
            </Text>
            <Heading size="md" mb="48px">
              ¿Cómo usamos las donaciones que recibimos?
            </Heading>
            <Text fontSize="md" mb="48px">
              {data.organization.useDonationsFor}
            </Text>
          </Box>
          <Box>
            <Button color="white" bg="gentem.purple" mb="48px">
              Haz tu donacion online
            </Button>
            <Heading size="md" mb="24px" color="gentem.purple">
              Consigna a una cuenta bancaria
            </Heading>
            <Text fontSize="md" mb="48px">
              {data.organization.donationBankAccountName}
              <br />
              {data.organization.donationBankAccountNumber}
              <br />
              {data.organization.donationBankAccountType}
              <br />
            </Text>
            <Heading size="md" mb="24px" color="gentem.purple">
              Donar productos
            </Heading>
            <Text fontSize="md" mb="48px">
              sdfsdffsd
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
