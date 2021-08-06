import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { CREATE_CAUSE } from '../graphql';
import { client } from 'api';
import { schemaResolver } from '../schema';
import { Form } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalCreateCause({ isOpen, onClose }: Props) {
  const form = useForm<Form>({ resolver: schemaResolver });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const [createCause, { loading }] = useMutation(CREATE_CAUSE);

  const onSubmit = async (data: Form) => {
    await createCause({ variables: { input: data } });
    onClose();
    reset();
    await client.refetchQueries({
      include: ['getCauses'],
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Create Cause</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="4" id="email" isInvalid={Boolean(errors.name)}>
              <Input {...register('name')} placeholder="Name" />
              <FormErrorMessage mt="1">{errors.name?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="solid"
              background="gentem.yellow"
              color="white"
              isLoading={loading}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
