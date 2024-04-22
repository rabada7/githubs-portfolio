const handleCreateRepo = async () => {
  try {
    const response = await axios.post('https://api.github.com/user/repos', {
      name: 'YourNewRepositoryName',
      description: 'Your repository description', //
      private: false, 
    }, {
      headers: {
        Authorization: `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`, 
      }
    });
    console.log('New repository created:', response.data);
    
  } catch (error) {
    console.error('Error creating repository:', error);
  }
};