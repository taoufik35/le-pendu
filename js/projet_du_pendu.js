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

function choix_du_mot(){
    let tab = vocabulaire.length;
    let nombre = Math.random() * (tab);
    nombre = Math.round(nombre);
    mot_a_deviner = vocabulaire[nombre];
 
}
choix_du_mot();

function compare (lettre, mot){
    var sortie;
    for(i = 0 ; i < mot.length;i++){
        if(mot[i]==lettre){
            sortie=true;
            break;
        
        }
        else {
            sortie = false;
        }
    }
          return sortie;
}


