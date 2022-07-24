let planet = document.getElementsByClassName("sun");
let border = document.getElementsByClassName("borderSun");

class Header {
  constructor(planets, container) {
    this.planets = planets;
    this.container = document.querySelector(container);
    this.render();
  }
  render() {
    let cards = document.getElementById("cards");
    let box = document.querySelector(".box");
    let box2 = document.querySelector(".box2");
    let box3 = document.querySelector(".box3");
    let box4 = document.querySelector(".box4");
    let box5 = document.querySelector(".box5");

    ///

    let img = document.createElement("img");
    img.setAttribute("src", this.planets[0].planet);
    img.setAttribute("class", "sun");

    box.appendChild(img);
    box2.innerHTML += `<img src="${this.planets[1].planet}" class='sun'  alt="">`;

    box3.innerHTML += `<img src="${this.planets[2].planet}" class='sun'  alt="">`;

    box4.innerHTML += `<img src="${this.planets[3].planet}" class='sun'  alt="">`;

    box5.innerHTML += `<img src="${this.planets[4].planet}" class='sun'  alt="">`;
    ///

    let card = document.createElement("div");
    let namePlanet = document.createElement("h1");
    let aboutPlanet = document.createElement("p");

    cards.appendChild(card);
    card.setAttribute("class", "card");
    card.appendChild(namePlanet);
    card.appendChild(aboutPlanet);

    for (let i = 0; i < planet.length; i++) {
      planet[i].addEventListener("click", function() {
        document.querySelector(".container").style.transform = "translateY(0%)";
        namePlanet.innerText = planets[i].name;
        aboutPlanet.innerText = planets[i].sun;
      });
    }
  }
}

const header = new Header(planets, ".container");

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

//////////////////Земля
planet[2].style.width = "85%";
planet[2].style.marginTop = "-185px";
planet[2].style.marginLeft = "15px";
//////////////////Марс
planet[1].style.width = "80%";
planet[1].style.marginTop = "-180px";
planet[1].style.marginLeft = "20px";
//////////////////Місяць
planet[3].style.width = "35%";
planet[3].style.marginTop = "-85px";
planet[3].style.marginLeft = "15px";
border[3].style.border = "none";
/////////////////Colors border
border[1].style.borderColor = "#BE3F0F";
border[2].style.borderColor = "#5262CA";
border[4].style.borderColor = "#DB956A";
////////////////Yupiter
planet[4].style.width = "90%";
planet[4].style.marginLeft = "10px";
planet[4].style.marginTop = "-190px";

for (let a = 0; a < border.length; a++) {
  console.log(border[3]);
  planet[a].addEventListener("mouseover", function() {
    border[a].style.transform = "rotateZ(360deg)";
  });
  planet[a].addEventListener("mouseout", function() {
    border[a].style.transform = "rotateZ(0deg)";
  });
}

//
