"use strict";
let prenom = prompt("Quel est votre prénom ?");
let nom = prompt("Quel est votre nom ?");
let age = parseInt(prompt("Quel est votre âge ?"));
const ENFANCE = 5;

alert(`Sapristi! On ne m'avait pas prévenu que c'était vous ${prenom} ! Euh... Je veux dire... Monsieur le grand magicien ${nom} ! Cela fait déjà au moins ${age - ENFANCE} ans que vous faites rayonner notre contrée!`);