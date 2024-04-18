/* page whoweare.html */

let infos = document.querySelectorAll('.infos');

/* Pourcourir chaque élément grâce à une boucle forEach et ajouter les écouteurs d'événements */
infos.forEach(function (element) {
    element.addEventListener('mouseover', function(){
        // ici on ajoute la classe .change à la div pour que notre fond devienne transparent
        element.classList.add('change');
    });

    element.addEventListener('mouseout', function(){
        // ici on enleve la classe .change à la div pour que notre fond devienne blanc
        element.classList.remove('change');
    });
});

/* page contact.html */

let formInscription = document.querySelector("form[name='inscription']");

/* écouteur d'événement sur le submit */
formInscription.addEventListener('submit', functionInscription);

/* fonction pour traiter les formulaires */
function functionInscription(event) {
    /* a. on empêche le comportement naturel du form (son envoi) */
    event.preventDefault();

    /* b. Récupération du contenu des champs du form dans des variables */
    let prenom = event.target.prenom.value,
        nom = event.target.nom.value,
        email = event.target.email.value,
        message = event.target.message.value;

    /* c. déclaration du regex qui va nous permettre de vérifier le mail et sa validité */
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z-]+)*$/;

    /* d. tests des différents éléments du formulaire */
    if (prenom !== '' || nom !== '') {
        if(prenom.length <= 1) {
            event.target.prenom.classList.remove('valide');
            event.target.prenom.classList.add('erreur');
            document.getElementById('p1').innerHTML = '<em class="text-danger">Votre prénom doit faire plus d\'un caractère</em>';
        } else {
            event.target.prenom.classList.remove('erreur');
            event.target.prenom.classList.add('valide');
            document.getElementById('p1').innerHTML = '';
        }
        if(nom.length <= 1) {
            event.target.nom.classList.remove('valide');
            event.target.nom.classList.add('erreur');
            document.getElementById('p2').innerHTML = '<em class="text-danger">Votre nom doit faire plus d\'un caractère</em>';
        } else {
            event.target.nom.classList.remove('erreur');
            event.target.nom.classList.add('valide');
            document.getElementById('p2').innerHTML = '';
        }
    }/* fin du else interne */

}
/* vérification mail */
if (regex.test(email) === false) {
    event.target.email.classList.remove('valide');
    event.target.email.classList.add('erreur');
    document.getElementById('p3').innerHTML = '<em class="text-danger">votre mail n\'est pas valable !</em>';
} else {
    event.target.email.classList.remove('erreur');
    event.target.email.classList.add('valide');
    document.getElementById('p3').innerHTML = '';
}

if (message.length <= 8) {
    event.target.message.classList.remove('valide');
    event.target.message.classList.add('erreur');
    document.getElementById('p4').innerHTML = '<em class="text-danger">votre message doit faire au moins 8 caractères !</em>'
} else {
    event.target.message.classList.remove('erreur');
    event.target.message.classList.add('valide');
    document.getElementById('p4').innerHTML = '';
}
