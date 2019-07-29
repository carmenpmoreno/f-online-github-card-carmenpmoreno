const AdalabUsersUrl = 'https://api.github.com/orgs/adalab/public_members';
const fetchAdalabUsers = () => fetch(AdalabUsersUrl).then(response => response.json());

export default fetchAdalabUsers;
