import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const RepoDetail = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/rabada7/${repoName}`);
        setRepo(response.data);
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };

    fetchRepository();
  }, [repoName]);

  if (!repo) return <div>Loading...</div>;

  const handleUpdate = async () => {
    // Implement update logic
  };

  const handleDelete = async () => {
    // Implement delete logic
  };

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default RepoDetail;




