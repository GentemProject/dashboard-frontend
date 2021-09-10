import React from 'react';
import GoogleMapReact from 'google-map-react';
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
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { Organization } from './types';
import { GET_ORGANIZATION } from './graphql';
import { env } from 'config';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { CustomIcon } from 'components';

interface Data {
  organization: Organization;
}

export function OrganizationPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, loading, error } = useQuery<Data>(GET_ORGANIZATION, {
    variables: {
      slug,
    },
  });

  if (loading || !data) {
    return (
      <Box>
        <Box h="420px" bg="gray.200"></Box>
      </Box>
    );
  }

  if (error || !data.organization?.isPublished) {
    return (
      <Box>
        <Box h="420px" bg="gray.200"></Box>
        <Box>
          <Heading size="xl" my="30" textAlign="center">
            No encontramos esa organización o tuvimos problemas al cargar
          </Heading>
        </Box>
      </Box>
    );
  }

  const organization = data.organization;

  return (
    <Box>
      <Box h="420px" bg="gray.200">
        {organization.locations.length > 0 && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: env.GOOGLE_API_KEY }}
            center={{
              lat: organization.locations[0].coordenateY,
              lng: organization.locations[0].coordenateX,
            }}
            zoom={12}
          >
            {organization.locations.map(location => (
              <Box
                key={location.coordenateX}
                lat={location.coordenateY}
                lng={location.coordenateX}
                w="200px"
                display="flex"
                alignItems="center"
              >
                <Box bg="red.100" p="2" marginRight="2" borderRadius="full">
                  <Box bg="red" w="3" h="3" borderRadius="full" />
                </Box>
                <Box bg="white" px="4" py="2" borderRadius="lg">
                  <Text fontSize="sm">
                    {location.address} {location.city} {location.state} {location.country}
                  </Text>
                </Box>
              </Box>
            ))}
          </GoogleMapReact>
        )}
      </Box>

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
            zIndex="10"
            position="relative"
          >
            <img src={organization.logo} alt={organization.name} />
          </Flex>
        </Box>

        <Grid templateColumns="2fr 1fr" gap={12}>
          <Box>
            <Breadcrumb mb="50px" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
              <BreadcrumbItem>
                <BreadcrumbLink color="gray.700" as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink color="gray.700" as={Link} to="/organizations">
                  Organizations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  color="gentem.purple"
                  as={Link}
                  to={`/organizations/${organization.slug}`}
                >
                  {organization.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Box mb="48px">
              {organization.causes.map(cause => (
                <Tag key={cause.id} mr="2" mb="2">
                  {cause.name}
                </Tag>
              ))}
            </Box>

            <Heading size="xl" mb="48px" whiteSpace="pre-wrap">
              {organization.name}
            </Heading>
            <Text fontSize="md" mb="48px" whiteSpace="pre-wrap">
              {organization.goal}
              <br />
              {organization.description}
            </Text>

            {organization.useDonationsFor && (
              <>
                <Heading size="md" mb="48px">
                  ¿Cómo usamos las donaciones que recibimos?
                </Heading>
                <Text fontSize="md" mb="48px" whiteSpace="pre-wrap">
                  {organization.useDonationsFor}
                </Text>
              </>
            )}
          </Box>
          <Box>
            <Button color="white" bg="gentem.purple" mb="48px">
              Haz tu donacion online
            </Button>

            {organization.donations.map(donation => (
              <Box key={donation.key} mb="48px">
                <Heading size="md" mb="24px" color="gentem.purple">
                  {donation.title}
                </Heading>
                <Text fontSize="md" whiteSpace="pre-wrap">
                  {donation.description}
                </Text>
              </Box>
            ))}

            {organization.socialMedia.length > 0 && (
              <Box mb="48px">
                <Heading size="md" mb="24px" color="gentem.purple">
                  Redes sociales
                </Heading>
                <Flex alignItems="flex-start">
                  {organization.socialMedia.map(socialMedia => (
                    <a
                      key={socialMedia.key}
                      href={socialMedia.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CustomIcon name={socialMedia.key} mr="4" size="sm" />
                    </a>
                  ))}
                </Flex>
              </Box>
            )}

            {organization.locations.length > 0 && (
              <Box mb="48px">
                <Heading size="md" mb="24px" color="gentem.purple">
                  Ubicación
                </Heading>
                <Text fontSize="md">
                  {organization.locations.map((location, index) => (
                    <Flex key={index} alignItems="flex-start">
                      <Box mr="4">
                        <svg
                          width="26"
                          height="35"
                          viewBox="0 0 26 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.75 34.5896C12.75 34.5896 25.5 20.3812 25.5 13.3396C25.5 6.29797 19.7916 0.5896 12.75 0.5896C5.70837 0.5896 0 6.29797 0 13.3396C0 20.3812 12.75 34.5896 12.75 34.5896ZM12.7501 17.5895C15.5668 17.5895 17.8501 15.3062 17.8501 12.4895C17.8501 9.67288 15.5668 7.38954 12.7501 7.38954C9.93348 7.38954 7.65013 9.67288 7.65013 12.4895C7.65013 15.3062 9.93348 17.5895 12.7501 17.5895Z"
                            fill="#47398E"
                          />
                        </svg>
                      </Box>
                      <Box>
                        <Text fontSize="md">
                          {location.address} {location.city} {location.state} {location.country}{' '}
                          {location.countryCode}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Text>
              </Box>
            )}

            {(organization.email || organization.website || organization.phone) && (
              <Box mb="48px">
                <Heading size="md" mb="24px" color="gentem.purple">
                  Contacto
                </Heading>
                <Text fontSize="md">{organization.email}</Text>
                <Text fontSize="md">{organization.website}</Text>
                <Text fontSize="md">{organization.phone}</Text>
              </Box>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
