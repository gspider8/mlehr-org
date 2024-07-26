const projectCards = document.getElementById("project-cards");
const typeFilter = document.getElementById("type-filter");
const languageFilter = document.getElementById("language-filter");
const frameworkFilter = document.getElementById("framework-filter");

const myPortfolio = [
  {
    name: "Dragon Fighting RPG",
    id: "dragon_rpg",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 3,
    frameworks: []
  },
  {
    name: "Random Background Color",
    id: "random_background_color",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 4
  },
  {
    name: "Calorie Counter",
    id: "calorie_counter",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 5
  },
  {
    name: "Rock Paper Scissors",
    id: "rock_paper_scissors",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 6
  },
  {
    name: "Music Player",
    id: "music_player",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 7
  },
  {
    name: "Football Cards",
    id: "football_cards",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 10
  },
  {
    name: "Statistics Calculator",
    id: "statistics_calculator",
    type: "front-end",
    description: "FreeCodeCamp JavaScript Course",
    languages: "HTML, CSS, JavaScript",
    number: 16
  },
  {
    name: "Bookstore",
    id: "bookstore",
    type: "back-end",
    description: "Django for Professionals Course",
    languages: "Python, HTML",
    frameworks: ["django", "tailwind"]
  }
]

const capitalizeEachWord = (str) => str.split("-").map(
  word => word[0].toUpperCase() + word.substring(1)
).join("-")

function renderProjectCards(objArray) {
  objArray.forEach((obj) => {
    projectCards.innerHTML += `
      <a href="${obj.id}/"><div class="project-card">
        <h2>${obj.name}</h2>
        <p>${capitalizeEachWord(obj.type)} Project</p>
        <p>${obj.description}</p>
        <p>Languages: ${obj.languages}</p>
        <p><a>GitHub</a> | <a href="${obj.id}/">Preview</a></p>
      </div></a>`
  })
}



const filterProjects = () => {
  projectCards.innerHTML = "";

  const filterByType = (projectCard) => {
    if (typeFilter.value === "all" || typeFilter.value === "0") {
      return true
    } else {
      return typeFilter.value === projectCard.type;
    }
  }

  const filterByLanguage = (projectCard) => {
    if (languageFilter.value === "all" || languageFilter.value === "0") {
      return true;
    } else {
      // return projectCard.languages.includes(languageFilter.value);
      const languagesArray = projectCard.languages.toLowerCase().split(", ")
      return languagesArray.includes(languageFilter.value);
    }
  }

  const filterByFramework = (projectCard) => {
    if (frameworkFilter.value === "all" || frameworkFilter.value === "0") {
      return true
    } else if (projectCard.hasOwnProperty("frameworks")) {
      console.log()
      return projectCard?.frameworks.includes(frameworkFilter.value);
    } else {
      return false
    }
  }

  renderProjectCards(myPortfolio.filter(
    project => filterByType(project)
      && filterByLanguage(project)
      && filterByFramework(project)
  ))
}

renderProjectCards(myPortfolio);

typeFilter.addEventListener("change", filterProjects)
languageFilter.addEventListener("change", filterProjects)
frameworkFilter.addEventListener("change", filterProjects)
