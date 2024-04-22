import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const CreateRepoModal = ({ isOpen, onRequestClose, onCreate }) => {
  const [repoName, setRepoName] = useState('');

  const handleSubmit = () => {
    // Validate form inputs
    if (!repoName.trim()) {
      alert('Please enter a repository name.');
      return;
    }

   
    onCreate(repoName);
    
    setRepoName('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onRequestClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Repository</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Repository Name</FormLabel>
            <Input type="text" value={repoName} onChange={(e) => setRepoName(e.target.value)} placeholder="Enter repository name" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>Create</Button>
          <Button variant="ghost" onClick={onRequestClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateRepoModal;