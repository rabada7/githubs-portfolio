import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Stack, Button, Input } from '@chakra-ui/react';
import CreateRepoModal from './CreateRepoModal'; 

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRepo = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
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
        {filteredRepos.map(repo => (
          <Box key={repo.id} p="4" shadow="md" borderWidth="1px" rounded="md">
            <Heading as="h2" size="md">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </Heading>
            <Text mt="2">{repo.description}</Text>
            <Text mt="2">Language: {repo.language}</Text>
          </Box>
        ))}
      </Stack>
      <Button mt="6" colorScheme="blue" onClick={handleCreateRepo}>
        Create New Repository
      </Button>

      {/* Render the modal component */}
      <CreateRepoModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Box>
  );
};

export default RepoList;
