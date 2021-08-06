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
import { CREATE_CAUSE } from './queries';
import { client } from 'api';

interface Form {
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required().trim(),
});

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCauseModal({ isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

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
            <Button variant="solid" background="gentem.yellow" isLoading={loading} type="submit">
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
