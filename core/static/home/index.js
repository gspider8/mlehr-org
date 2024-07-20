const projectCards = document.getElementById("project-cards");
const myPortfolio = [
  {
    name: "Music Player",
    id: "music_player",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    link: "musicPlayer",
    number: 7
  },
  {
    name: "Football Cards",
    id: "football_cards",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    link: "footballCards",
    number: 10
  }
]


myPortfolio.forEach((obj) => {
  projectCards.innerHTML += `
    <div class="project-card">
      <h2>${obj.name}</h2>
      <p>${obj.description}</p>
      <p>Languages: ${obj.languages}</p>
      <p><a href="${obj.id}/">View</a></p>
    </div>`
})

