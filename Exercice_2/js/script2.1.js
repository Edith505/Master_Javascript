"use strict";

// Constantes
const MIN_TAILLE = 0.5; // mètre
const MAX_TAILLE = 3; // mètre
 

// Collection des données
let monPoids = prompt("Entrez votre poids en kg :");
let maTaille = prompt("Entrez votre taille en mètre (valeur entre 0.5 et 3m) :");
let amiPoids = prompt("Entrez le poids de votre ami en kg :");
let amiTaille = prompt("Entrez la taille de votre ami en mètre (valeur entre 0.5 et 3m) :");



// Calcul de l'IMC
let monImc = monPoids / (maTaille * maTaille);
let amiImc = amiPoids / (amiTaille * amiTaille);

let afficheMonImc = `Le résultat de mon IMC est ${monImc.toFixed(2)} , ce qui signifie :`;
let afficheAmiImc = `Le résultat de l'IMC de mon ami est ${amiImc.toFixed(2)} , ce qui signifie :`;


function conclusionImc() {
    let conclusion = "";
    if(monImc < amiImc) {
        conclusion = "nom";
    }else {
        conclusion = "oui";
    }
    return conclusion;
};

let moi_ami = `Est-ce que mon IMC est supérieur à celui de mon ami? ${conclusionImc()}`;


// DOM
document.getElementById("monImc").textContent = afficheMonImc;
document.getElementById("amiImc").textContent = afficheAmiImc;
document.getElementById("conclusion").textContent = moi_ami;
