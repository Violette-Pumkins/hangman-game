function jeudupendu_01() {
    console.log("jeu_du_pendu:");
    //console.log afficher le mot sous des "_" dans tb2
    var tb1 = [];
    tb1.push("tagada", "reglisse", "marshmallow", "carambar", "rondoudou", "chupachups");
    var word = randomWord(tb1);
    tbWord = word.split('');
    // boucle demander/afficher/compter essais
    var hiddenWord = hideWord(tbWord);
    console.log(hiddenWord);
    var word = showWord(hiddenWord, err)
    var err = 0

    //demander une lettre + test
     var letter = (prompt("entrez une lettre"));

    var usedLetter = usedLetter + lettre
    
    while (letter.length !== 1 && letter <= "a" && letter >= "z" && usedLetter.includes(letter) && tb2.includes(letter)){
        letter = prompt("saisie incorrecte, veuillez rentrer une lettre");
    
    }
    console.log(letter);   





    //si true = afficher la lettre dans le tableau
    //si false = afficher 1 erreurs (erreurs ++)




    //si erreur === 10 = console.log(perdu)
    //si lettres de mot.length == true = console.log(gagné!)


}
//retourne un mot aleatoire du tableau
//IN: tableau de chaines
//OUT: chaine
function randomWord(tb) {

    return tb[Math.floor(Math.random() * tb.length)];
}

function hideWord(tb, nb) {

    var tbc = [];
    for (i = 0; i < tb.length; i++) {
        tbc.push('_');


    }
    return tbc.join(' ');
}

function showWord(chaine, nb) {
    nb = 0
    console.log(nb + " erreurs: " + chaine.split('').join(" "));

}


