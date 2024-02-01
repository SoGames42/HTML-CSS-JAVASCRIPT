"use strict"

// Formulaire

class Humain{
    nom;
    mail;
    mdp;
    saisonPreferee;
    evenementPrefere = [];
}

let body = document.body;
let boutonEnvoyer = body.querySelector("#envoyer");

function onSumbitForm(e){
    e.preventDefault();
    let humain = new Humain;
    let nom = document.querySelector("#nom");
    humain.nom = nom.value;
    let mail = document.querySelector("#mail");
    humain.mail = mail.value;
    let mdp = document.querySelector("#mdp");
    humain.mdp = mdp.value
    
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        if(input.type == "radio"){
            if(input.checked == true){
                humain.saisonPreferee = input.value;
            }
        }
        if(input.type == "checkbox"){
            if(input.checked == true){
                humain.evenementPrefere.push(input.value)
            }
        }
    });
    console.log(humain);
}

boutonEnvoyer.addEventListener("click", onSumbitForm);

//Mode sombre

let darkModeBouton = document.querySelector("#darkmodebouton");
console.log(darkModeBouton);
let contourJaune = document.querySelectorAll("div.fond > a");
console.log(contourJaune);
let texte = document.querySelectorAll("p, input, label, legend, li > a");
console.log(texte);

function DarkMode(){
    let modeSombre = darkModeBouton.checked;
    if(modeSombre == true){
        console.log("Mode sombre activé!");
        document.body.style.background = "url(Image/fond_nuit.jpg) no-repeat fixed center center / cover";
        contourJaune.forEach(function (contour){
            contour.style.outlineColor = "#aaaaaa";
        });
        texte.forEach(function (texte){
            texte.style.color = "#ffffff";
        });
    }
    else{
        console.log("Mode clair activé!");
        document.body.style.background = "url(Image/Vfrond.jpg) no-repeat fixed center center / cover";
        contourJaune.forEach(function (contour){
            contour.style.outlineColor = "#e0a100";
        });
        texte.forEach(function (texte){
            texte.style.color = "black";
        });
    }
}

darkModeBouton.addEventListener("change", DarkMode);

//Menu Burger

function toggleMenu() {
    const navMenu = document.querySelector(".burgernavigation");
    navMenu.classList.toggle("show");
}