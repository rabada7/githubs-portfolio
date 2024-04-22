const handleUpdateRepo = async () => {
  try {
    
    const updatedRepo = { ...selectedRepo, name: updatedRepoName, description: updatedRepoDescription };
    const response = await axios.patch(`https://api.github.com/repos/rabada7/${selectedRepo.name}`, updatedRepo);
    console.log('Repository updated:', response.data);
    
    // Update the repositories list with the updated repository
    const updatedRepos = repos.map(repo => (repo.id === selectedRepo.id ? response.data : repo));
    setRepos(updatedRepos);
    
    // Close the modal
    closeUpdateModal();
  } catch (error) {
    console.error('Error updating repository:', error);
  }
};

const handleDeleteRepo = async (repoToDelete) => {
  try {
    await axios.delete(`https://api.github.com/repos/rabada7/${repoToDelete.name}`);
    console.log('Repository deleted:', repoToDelete.name);
    
    // Update the repositories list by filtering out the deleted repository
    const updatedRepos = repos.filter(repo => repo.id !== repoToDelete.id);
    setRepos(updatedRepos);
  } catch (error) {
    console.error('Error deleting repository:', error);
  }
};