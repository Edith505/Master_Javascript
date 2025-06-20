"use strict";

// Constantes
const MIN_TAILLE = 0.5; // mètre
const MAX_TAILLE = 3; // mètre

// Fonction de calcul de l'IMC
function calculImc(poids, taille) {
    return poids / (taille * taille);
}

// Fonction de classification à partir de l'IMC
let classification = '';
function classificationImc(imc) {
    if (imc < 18.5) {
        classificationv = "Poids insuffisant";
    } else if (imc < 24.9) {
        classification = "Poids normal";
    } else if (imc < 29.9) {
        classification = "Excès de poids";
    } else if (imc < 34.9) {
        classification = "Obésité de classe I";
    } else if (imc < 39.9) {
        classification = "Obésité de classe II";
    } else {
        classification = "Obésité de classe III";
    }
    return classification;
}

// Saisie et vérification des données
let monPoids = Number(prompt("Entrez votre poids en kg :"));
let maTaille = Number(prompt("Entrez votre taille en mètre (valeur entre 0.5 et 3m) :"));
while (isNaN(maTaille) || maTaille < MIN_TAILLE || maTaille > MAX_TAILLE) {
    maTaille = Number(prompt("Taille invalide. Entrez votre taille en mètre (valeur entre 0.5 et 3m) :"));
}

let amiPoids = Number(prompt("Entrez le poids de votre ami en kg :"));
let amiTaille = Number(prompt("Entrez la taille de votre ami en mètre (valeur entre 0.5 et 3m) :"));
while (isNaN(amiTaille) || amiTaille < MIN_TAILLE || amiTaille > MAX_TAILLE) {
    amiTaille = Number(prompt("Taille invalide. Entrez la taille de votre ami en mètre (valeur entre 0.5 et 3m) :"));
}

// Calcul des IMC
let monImc = calculImc(monPoids, maTaille);
let amiImc = calculImc(amiPoids, amiTaille);

// Classifications individuelles
let classificationMoi = classificationImc(monImc);
let classificationAmi = classificationImc(amiImc);

let afficheMonImc = `Le résultat de mon IMC est ${monImc.toFixed(2)} , ce qui signifie : ${classificationMoi}`;
let afficheAmiImc = `Le résultat de l'IMC de mon ami est ${amiImc.toFixed(2)} , ce qui signifie : ${classificationAmi}`;

// Fonction de comparaison
function conclusionImc() {
    if (monImc > amiImc) {
        return "Oui";
    } else if (monImc < amiImc) {
        return "Non";
    } else {
        return "Égalité";
    }
}

let moiAmi = `Est-ce que mon IMC est supérieur à celui de mon ami ? ${conclusionImc()}`;

// DOM
document.getElementById("monImc").textContent = afficheMonImc;
document.getElementById("amiImc").textContent = afficheAmiImc;
document.getElementById("conclusion").textContent = moiAmi;