alert("Bonjour et Bienvenue au jeu du pendu");
//--------------------Variable global--------------------------------
let vocabulaire = ["php","javascript","json", "*objet"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let essais = 7;
let lettre_Restantes = 'abcdefghijklmnopqrstuvwxyz';

//--------------------Autres variable---------------------------------

let mot_a_deviner;
let nb_essais_restans;
let jeu_en_cours;
let victoire;
let affichage;
let lettre_joouee;

//------------------------LES FONCTIONS-------------------------------
//========================Début de partie=============================
jeu_en_cours = true;
victoire = false;
nb_essais_restans = essais;
lettre_Restantes = alphabet;


