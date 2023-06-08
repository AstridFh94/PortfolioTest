

function scrollFunction() {
  const scroll = document.getElementById("aboutPage");
  scroll.scrollIntoView({behavior: "smooth"});
}


function scrollFunction2() {
  const scroll = document.getElementById("skillsPage");
  scroll.scrollIntoView({behavior: "smooth"});
}

function scrollFunction3() {
  const scroll = document.getElementById("projectsPage");
  scroll.scrollIntoView({behavior: "smooth"});
}


window.onbeforeunload = function(){
  window.scrollTo(0, 0);
}


/*
function aboutMe() {
  conmst
  button.addEventListener(`click`, () = > {
  document.getElementById("aboutMe").innerText = "About me"
  
  })
}

function skills() {
  document.getElementById("skills").innerText = "Skills"
}

function projects() {
  document.getElementById("projects").innerText = "Projects"
}



function emailBtn(){

}



function aboutMe2 () {
const button = document.createElement("button");
button.innerText = "About me"
button.addEventListener(`click`, () => {
  document.getElementById("menu").innerText = "Hellåå"
})
*/