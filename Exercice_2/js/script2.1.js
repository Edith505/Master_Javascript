"use strict";

// Bornes
const POIDS_MIN = 10;
const POIDS_MAX = 600;
const TAILLE_MIN = 0.5;
const TAILLE_MAX = 3;

// Fonction de saisie générique
function saisirValeur(message, min, max) {
    let valeur;
    do {
        valeur = prompt(message);
        if (valeur === null) return null;
        valeur = parseFloat(valeur);
    } while (isNaN(valeur) || valeur < min || valeur > max);
    return valeur;
}

// Calcul IMC
function calculImc(poids, taille) {
    return poids / (taille * taille);
}

// Classification IMC sans constante
function classificationImc(imc) {
    let classificationImc =''
    if (imc < 18.5) {
        classificationImc = "Poids insuffisant";
    } else if (imc < 25) {
        classificationImc = "Poids normal";
    } else if (imc < 30) {
        classificationImc = "Excès de poids";
    } else if (imc < 35) {
        classificationImc = "Obésité de classe I";
    } else if (imc < 40) {
        classificationImc = "Obésité de classe II";
    } else {
        classificationImc = "Obésité de classe III";
    }
    return classificationImc
}

// Fonction principale
function main() {
    let monImcElem = document.getElementById("monImc");
    let amiImcElem = document.getElementById("amiImc");
    let conclusionElem = document.getElementById("conclusion");
    let erreurElem = document.getElementById("erreur");

    // Saisie et gestion annulation
    let monPoids = saisirValeur(`Entrez votre poids en kg (${POIDS_MIN} à ${POIDS_MAX}) :`, POIDS_MIN, POIDS_MAX);
    if (monPoids === null) return afficherErreur("Saisie annulée. Calcul impossible.");

    let maTaille = saisirValeur(`Entrez votre taille en mètre (${TAILLE_MIN} à ${TAILLE_MAX}) :`, TAILLE_MIN, TAILLE_MAX);
    if (maTaille === null) return afficherErreur("Saisie annulée. Calcul impossible.");

    let amiPoids = saisirValeur(`Entrez le poids de votre ami en kg (${POIDS_MIN} à ${POIDS_MAX}) :`, POIDS_MIN, POIDS_MAX);
    if (amiPoids === null) return afficherErreur("Saisie annulée. Calcul impossible.");

    let amiTaille = saisirValeur(`Entrez la taille de votre ami en mètre (${TAILLE_MIN} à ${TAILLE_MAX}) :`, TAILLE_MIN, TAILLE_MAX);
    if (amiTaille === null) return afficherErreur("Saisie annulée. Calcul impossible.");

    // Calculs et affichage
    let monImc = calculImc(monPoids, maTaille);
    let amiImc = calculImc(amiPoids, amiTaille);

    monImcElem.textContent = `Le résultat de mon IMC est ${monImc.toFixed(2)}, ce qui signifie : ${classificationImc(monImc)}`;
    amiImcElem.textContent = `Le résultat de l'IMC de mon ami est ${amiImc.toFixed(2)}, ce qui signifie : ${classificationImc(amiImc)}`;

    let conclusion = "Égalité";
    if (monImc > amiImc) {
        conclusion = "Oui";
    } else if (monImc < amiImc) {
        conclusion = "Non";
    }
    conclusionElem.textContent = `Est-ce que mon IMC est supérieur à celui de mon ami ? ${conclusion}`;
    erreurElem.textContent = "";
}

function afficherErreur(msg) {
    document.getElementById("monImc").textContent = "";
    document.getElementById("amiImc").textContent = "";
    document.getElementById("conclusion").textContent = "";
    document.getElementById("erreur").textContent = msg;
}

// Lancement
main();