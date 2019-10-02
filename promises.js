/* Initial HTML Tags */
const inputUser = document.querySelector('#search');
const searchButton = document.querySelector('#button');
const container = document.querySelector('.container');

/* API Base URL */
const baseUrl = 'https://api.github.com/users/';

/* Get repos from Github API */
const getUserRepos = async (username) => {
  const api_call = await fetch(`${baseUrl + username}/repos`);
  const data = await api_call.json();
  return { data }
};

/* Event listener on click */
searchButton.addEventListener("click", async () => {
  // cleanErrorMessage();
  // cleanUserDetails();
  // cleanRepos();
  const data = await getUserData(inputUser.value);
  if (data.userDetails.message) {
    const errorContainer = handleCreateTag("div", container);
    errorContainer.className = "error-message"
    handleCreateTag("P", errorContainer).innerHTML = data.userDetails.message;
  } else {
    renderUserDetails(data);
    renderReposList(data);
  };
});

/* Handles creation of html tags to show user's repos */
const renderReposList = ({ reposList }) => {
  //"Repositories Title Section"
  const reposTitleSection = handleCreateTag("h3", container);
  reposTitleSection.innerHTML = "Repositories";
  reposTitleSection.className = "repo-title-section";

  return reposList.data.forEach(repo => {
    createRepoCard(repo)
  });
};