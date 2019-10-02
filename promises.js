/* Initial HTML Tags */
const inputValue = document.querySelector("#search");
const searchButton = document.querySelector("#button");
const container = document.querySelector(".container");
const reposContainer = document.querySelector(".profile-repos");
let reposArray = [];

const handleUserNameError = str => {
  let errorDiv = document.createElement("div");
  errorDiv.innerHTML = `oopsi, the user ${str} does not exist`;
  reposContainer.appendChild(errorDiv);
};

const clearData = () => {
  console.log("data cleared");
  reposContainer.innerHTML = "";
};

const displayReposList = () => {
  console.log("display list");
  reposArray.forEach(el => {
    let reposDiv = document.createElement("p");
    reposDiv.innerHTML = el;
    reposContainer.appendChild(reposDiv);
  });
  reposArray = [];
};

const handleReposError = str => {
  clearData();
  reposArray = [];
  let errorDiv = document.createElement("div");
  errorDiv.innerHTML = `oopsi, the user ${str} does not have any repo at the moment`;
  reposContainer.appendChild(errorDiv);
};

const fetchUsers = async user => {
  const api_call = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await api_call.json();

  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value)
    .then(response => {
      clearData();
      console.log("STATUS:", response.body, response.data);
      if (response.data.length > 0) {
        response.data.map(e => {
          reposArray.push(e.name);
        });
        displayReposList();
      } else if (response.data.length === 0) {
        handleReposError(inputValue.value);
      } else {
        handleUserNameError(inputValue.value);
      }
    })
    .catch(err => console.log(err));
};

searchButton.addEventListener("click", () => {
  showData();
});
