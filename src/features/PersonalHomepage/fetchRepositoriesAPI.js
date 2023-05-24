import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const fetchRepositoriesAPI = (username) =>
    axios.get(`${githubAPIBaseURL}/users/${username}/repos`)
        .then(response => response.data);