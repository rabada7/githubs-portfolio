import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Stack, Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { handleUpdateRepo } from './UpdateRepoModal';
import CreateRepoModal from './CreateRepoModal'; 
import handleCreateRepo from './handleCreateRepo';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [updatedRepoName, setUpdatedRepoName] = useState('');
  const [updatedRepoDescription, setUpdatedRepoDescription] = useState('');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/rabada7/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreateRepo = () => {
    // Implement logic to create a new repository
    console.log('Creating new repository...');
  };

  const handleUpdateRepo = () => {
    // Implement logic to update repository details
    console.log('Updating repository...');
  };

  const handleDeleteRepo = () => {
    // Implement logic to delete repository
    console.log('Deleting repository...');
  };

  const openUpdateModal = (repo) => {
    setSelectedRepo(repo);
    setUpdatedRepoName(repo.name);
    setUpdatedRepoDescription(repo.description);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p="6">
      <Heading as="h1" size="xl" mb="4">My Repositories</Heading>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search repositories..."
        mb="4"
      />
      <Stack spacing="4">
        {repos.map(repo => (
          <Box key={repo.id} p="4" shadow="md" borderWidth="1px" rounded="md">
            <Heading as="h2" size="md">
              <div>{repo.name}</div>
            </Heading>
            <Text mt="2">{repo.description}</Text>
            <Text mt="2">Language: {repo.language}</Text>
            <Button mt="2" colorScheme="blue" onClick={() => openUpdateModal(repo)}>Update</Button>
            <Button mt="2" colorScheme="red" onClick={() => handleDeleteRepo(repo)}>Delete</Button>
          </Box>
        ))}
      </Stack>
      <Button mt="6" colorScheme="blue" onClick={handleCreateRepo}>
        Create New Repository
      </Button>

      {/* Update Repository Modal */}
      <Modal isOpen={isModalOpen} onClose={closeUpdateModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Repository</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input mb="4" value={updatedRepoName} onChange={(e) => setUpdatedRepoName(e.target.value)} />
            <Input value={updatedRepoDescription} onChange={(e) => setUpdatedRepoDescription(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateRepo}>Update</Button>
            <Button onClick={closeUpdateModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RepoList;