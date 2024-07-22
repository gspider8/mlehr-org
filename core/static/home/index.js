const projectCards = document.getElementById("project-cards");
const myPortfolio = [
  {
    name: "Dragon Fighting RPG",
    id: "dragon_rpg",
    description: "FreeCodeCamp JavaScript Course",
    language: "HTML, CSS, JavaScript",
    number: 3
  },
  {
    name: "Random Background Color",
    id: "random_background_color",
    description: "FreeCodeCamp JavaScript Course",
    language: "HTML, CSS, JavaScript",
    number: 4
  },
  {
    name: "Calorie Counter",
    id: "calorie_counter",
    description: "FreeCodeCamp JavaScript Course",
    language: "HTML, CSS, JavaScript",
    number: 5
  },
  {
    name: "Rock Paper Scissors",
    id: "rock_paper_scissors",
    description: "FreeCodeCamp JavaScript Course",
    language: "HTML, CSS, JavaScript",
    number: 6
  },
  {
    name: "Music Player",
    id: "music_player",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 7
  },
  {
    name: "Football Cards",
    id: "football_cards",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 10
  },
  {
    name: "Statistics Calculator",
    id: "statistics_calculator",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 16
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

