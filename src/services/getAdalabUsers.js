const AdalabUsersUrl = 'https://api.github.com/orgs/adalab/public_members';

const fetchAdalabUsers = () => fetch(AdalabUsersUrl).then(response => response.json());
// const mockAdalabUsers = [
//     {
//         "login": "AilatanGH",
//         "id": 26969648,
//         "node_id": "MDQ6VXNlcjI2OTY5NjQ4",
//         "avatar_url": "https://avatars2.githubusercontent.com/u/26969648?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/AilatanGH",
//         "html_url": "https://github.com/AilatanGH",
//         "followers_url": "https://api.github.com/users/AilatanGH/followers",
//         "following_url": "https://api.github.com/users/AilatanGH/following{/other_user}",
//         "gists_url": "https://api.github.com/users/AilatanGH/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/AilatanGH/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/AilatanGH/subscriptions",
//         "organizations_url": "https://api.github.com/users/AilatanGH/orgs",
//         "repos_url": "https://api.github.com/users/AilatanGH/repos",
//         "events_url": "https://api.github.com/users/AilatanGH/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/AilatanGH/received_events",
//         "type": "User",
//         "site_admin": false
//     },
//     {
//         "login": "Alienah",
//         "id": 33132944,
//         "node_id": "MDQ6VXNlcjMzMTMyOTQ0",
//         "avatar_url": "https://avatars2.githubusercontent.com/u/33132944?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/Alienah",
//         "html_url": "https://github.com/Alienah",
//         "followers_url": "https://api.github.com/users/Alienah/followers",
//         "following_url": "https://api.github.com/users/Alienah/following{/other_user}",
//         "gists_url": "https://api.github.com/users/Alienah/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/Alienah/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/Alienah/subscriptions",
//         "organizations_url": "https://api.github.com/users/Alienah/orgs",
//         "repos_url": "https://api.github.com/users/Alienah/repos",
//         "events_url": "https://api.github.com/users/Alienah/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/Alienah/received_events",
//         "type": "User",
//         "site_admin": false
//     },
// ]

export default fetchAdalabUsers;
// export default mockAdalabUsers;