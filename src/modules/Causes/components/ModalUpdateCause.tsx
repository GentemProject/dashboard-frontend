import { useEffect } from 'react';
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
import { client } from 'api';
import { UPDATE_CAUSE } from '../graphql';
import { Cause, Form } from '../types';
import { schemaResolver } from '../schema';

interface Props {
  cause: Cause;
  isOpen: boolean;
  onClose: () => void;
}

export function ModalUpdateCause({ isOpen, onClose, cause }: Props) {
  const form = useForm<Form>({ resolver: schemaResolver });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const [updateCause, { loading }] = useMutation(UPDATE_CAUSE);

  const onSubmit = async (data: Form) => {
    await updateCause({ variables: { id: cause.id, input: data } });
    onClose();
    reset();
    await client.refetchQueries({
      include: ['getCauses'],
    });
  };

  useEffect(() => {
    reset({
      name: cause.name,
    });
  }, [cause, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Update Cause</ModalHeader>
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
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
