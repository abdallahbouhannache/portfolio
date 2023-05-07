const repoName = "username/repo";
const apiUrl = `https://api.github.com/repos/${repoName}`;

const accessToken = "your-access-token"; // replace with your actual access token

const grapme = () => {
  fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // do something with the data
      console.log(data);
    })
    .catch((error) => console.error(error));
};
