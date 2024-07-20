const projectCards = document.getElementById("project-cards");
const myPortfolio = [
  {
    name: "Music Player",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    link: "musicPlayer",
    number: 7
  },
  {
    name: "Football Cards",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    link: "footballCards",
    number: 10
  }
]


Object.freeze(myPortfolio);


const renderCards = (arr = myPortfolio) => {
  console.log("setPlayerCards");
  projectCards.innerHTML += arr
    .map(({ name,description, languages }) =>
        `
        <div class="project-card">
          <h2>${name}</h2>
          <p>${description}</p>
          <p>Languages: ${languages}</p>
          <p><a href="{% url 'music_player' %}">View</a></p>
        </div>
      `
    ).join("");
};

renderCards();
