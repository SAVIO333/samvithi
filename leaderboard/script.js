const leaderboardData = [
    { rank: 1, name: "Player1", score: 5000 },
    { rank: 2, name: "Player2", score: 4500 },
    { rank: 3, name: "Player3", score: 4000 },
    { rank: 4, name: "Player4", score: 3500 },
    { rank: 5, name: "Player5", score: 3000 }
];

function loadLeaderboard() {
    const leaderboardList = document.getElementById("leaderboardList");

    // Clear the existing leaderboard list
    leaderboardList.innerHTML = "";

    // Loop through leaderboard data and create list items
    leaderboardData.forEach(player => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="rank">${player.rank}</span>
            <span class="name">${player.name}</span>
            <span class="score">${player.score} points</span>
        `;
        leaderboardList.appendChild(listItem);
    });
}

// Load leaderboard on page load
window.onload = loadLeaderboard;
