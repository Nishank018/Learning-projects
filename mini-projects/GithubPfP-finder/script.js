const button = document.querySelector('button');
const input = document.querySelector('input');
const profile = document.getElementById('profile');

button.addEventListener('click', getGithubProfile);

async function getGithubProfile() {
    const username = input.value.trim();

    if (!username) {
        profile.innerHTML = '<h2>Please enter a username</h2>';
        return;
    }

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();

       profile.innerHTML = `
<div class="profile-card">
    <img src="${data.avatar_url}">
    
    <h2>${data.name || data.login}</h2>

    <p class="bio">
        ${data.bio || "No bio available"}
    </p>

    <div class="stats">

        <div class="stat">
            <span>${data.followers}</span>
            <p>Followers</p>
        </div>

        <div class="stat">
            <span>${data.following}</span>
            <p>Following</p>
        </div>

        <div class="stat">
            <span>${data.public_repos}</span>
            <p>Repos</p>
        </div>

    </div>
</div>
`;
    } catch (error) {
        profile.innerHTML = `<h2>${error.message}</h2>`;
    }
}