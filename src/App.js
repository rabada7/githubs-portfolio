// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Container maxW="xl" py="8">
          <Box bg="black" p="6" borderRadius="md" boxShadow="lg" color="white">
            <Routes>
              <Route path="/" element={<RepoList />} />
              <Route path="/repo/:repoName" element={<RepoDetail />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
