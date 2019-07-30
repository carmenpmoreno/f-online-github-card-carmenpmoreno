const AdalabUsersUrl = 'https://api.github.com/orgs/adalab/public_members?per_page=100';
const fetchAdalabUsers = () => fetch(AdalabUsersUrl).then(response => response.json());

export default fetchAdalabUsers;
