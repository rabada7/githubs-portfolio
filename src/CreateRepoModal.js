import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const CreateRepoModal = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 
  };

  return (
    <Modal isOpen={isOpen} onClose={onRequestClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Repository</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Repository Name</FormLabel>
              <Input type="text" placeholder="Enter repository name" />
            </FormControl>
            {/* Add more form fields as needed */}
            <Button mt="4" colorScheme="blue" type="submit">Create</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onRequestClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepoModal;