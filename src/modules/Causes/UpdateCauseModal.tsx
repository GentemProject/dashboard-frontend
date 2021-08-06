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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { UPDATE_CAUSE } from './queries';
import { client } from 'api';
import { Cause } from './types';
import { useEffect } from 'react';

interface Form {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required().trim(),
});

interface Props {
  cause: Cause;
  isOpen: boolean;
  onClose: () => void;
}

export function UpdateCauseModal({ isOpen, onClose, cause }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

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
            <Button variant="solid" background="gentem.yellow" isLoading={loading} type="submit">
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
