import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Input } from '@chakra-ui/react';

const CreateRepoModal = ({ isOpen, onRequestClose }) => {
  const handleCreateRepo = () => {
   
    console.log("Creating new repository...");
    onRequestClose(); 
  };

  return (
    <Modal isOpen={isOpen} onClose={onRequestClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Repository</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Repository Name" />
          <Input placeholder="Description" mt="4" />
          <Input placeholder="Public or Private" mt="4" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateRepo}>
            Create
          </Button>
          <Button onClick={onRequestClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepoModal;
