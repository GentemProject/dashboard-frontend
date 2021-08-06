import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useErrorStore } from 'stores';

export function ErrorModal() {
  const { errorModal, setErrorModal } = useErrorStore();

  return (
    <Modal isOpen={Boolean(errorModal)} onClose={() => setErrorModal(null)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{errorModal?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{errorModal?.message}</ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            background="gentem.yellow"
            color="white"
            onClick={() => setErrorModal(null)}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
