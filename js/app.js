const container = document.querySelector(".container")
const clothes = [
  { name: "adidas", image: "images/adidas.jpg" },
  { name: "coke", image: "images/coke.jpg" },
  { name: "harley", image: "images/harley.jpg" },
  { name: "harley2", image: "images/harley2.jpg" },
  { name: " nike", image: "images/nike.jpg" },
  { name: " polo", image: "images/polo.jpg" },
  { name: "ralph", image: "images/ralph.jpg" },
  { name: "rl", image: "images/rl.jpg" },
  { name: "wolf", image: "images/wolf.jpg" },
]

const showClothes = () => {
  let output = ""
  clothes.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Try on</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showClothes)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}