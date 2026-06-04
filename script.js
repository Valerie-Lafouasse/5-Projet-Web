/*mode sombre*/
const select = document.getElementById ('theme')
if(select) {
    select.addEventListener ('change', function (){
if (select.value === 'sombre') {
    document.body.classList.add('sombre')
} else {
    document.body.classList.remove('sombre')
}
})
}

/*mode carte*/


const choixListe = document.getElementById ('affichage-liste')
const choixCarte = document.getElementById ('affichage-carte')

/* je verifie que l'élément existe avant d'ajouter le listener sinon ça bloque le script*/
if (choixListe) {
choixListe.addEventListener ('change', function (){
    localStorage.setItem('affichage','liste')
})
}

if (choixCarte) {
choixCarte.addEventListener ('change', function (){
    localStorage.setItem('affichage','carte')
})
}  

/* menu burger
const burger = document.querySelector(".burger")
const menu = document.querySelector (".menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
})
*/ 


/* récupérer les données de promo.json*/

fetch ('promo.json')
.then(response => response.json())
.then(data => afficherData(data.apprenants))

function afficherData (data){
    /* cibler tbody  avant d'écrire dedans*/
   const tbody = document.getElementById('tbody-promo')
    
/* boucler sur data avec foreach et dans la boucle je crée la ligne et je l'injecte dans html*/
   data.forEach(personne => {
        const ligne = `<tr>
    <td>${personne.nom}</td>
    <td>${personne.prenom}</td>
    <td>${personne.ville}</td>
    <td><a href="">Détails</a></td>
</tr>`
        tbody.innerHTML += ligne
        
}) 
}

