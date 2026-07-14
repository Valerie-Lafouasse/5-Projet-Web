/*mode sombre*/
const select = document.getElementById ('theme')

/* Appliquer le thème au chargement de la page */
const prefTheme = localStorage.getItem('theme')
if (prefTheme === 'sombre') {
    document.body.classList.add('sombre')
}
if (prefTheme && select) {
    select.value = prefTheme
}
/*écouter les changements
if(select) {
    select.addEventListener ('change', function (){
       if (select.value === 'sombre') {
       document.body.classList.add('sombre')
       } else {
       document.body.classList.remove('sombre')
       }
    })
}*/

/*affichage carte - déclarations */

const choixListe = document.getElementById ('affichage-liste')
const choixCarte = document.getElementById ('affichage-carte')
const btnEnregistrer = document.getElementById('btn-enregistrer')


/*affichage des préférences au chargement de la page index*/
const prefAffichage = localStorage.getItem('affichage')
if (prefAffichage === 'carte') {
    const scroller = document.querySelector ('.scroller')
    if (scroller) scroller.classList.add('carte')
    if (choixCarte) choixCarte.checked = true
    }else {
      if (choixListe) choixListe.checked= true
    }

/*Sur Index.html, enregistrer le choix de l'affichage au 'change' du radio bouton >localStorage et classe CSS
/* Vérifier que l'élément existe avant d'ajouter le listener sinon ça bloque le script*/
if (choixCarte) {
choixCarte.addEventListener ('change', function (){
     console.log('clic carte détecté')
    localStorage.setItem('affichage','carte')
   /*cibler .scroller  et ajouter la classe carte*/ 
    document.querySelector('.scroller').classList.add('carte')
})
}  

if (choixListe) {
choixListe.addEventListener ('change', function (){
    localStorage.setItem('affichage','liste')
    document.querySelector('.scroller').classList.remove('carte')
})
}

/*Sur preferences.html, enregistrer le choix d'affichage radio bouton> bouton enregistrer > localStorage (le code ne s'execute que si la page html contient le bouton enregistrer)*/
if (btnEnregistrer) {
    btnEnregistrer.addEventListener('click', function() {
        localStorage.setItem('theme', select.value)
        if (select.value === 'sombre') {
            document.body.classList.add('sombre')
        } else {
            document.body.classList.remove('sombre')
        }
        if (choixCarte.checked) {
        localStorage.setItem('affichage', 'carte')
        } else {
        localStorage.setItem('affichage', 'liste')
        }
        document.getElementById('message-confirmation').innerText = 'Vos préférences ont bien été enregistrées !'
    })
}

/* récupérer les données de promo.json*/

fetch ('promo.json')
.then(response => response.json())
.then(data => {
    if (document.getElementById('tbody-promo')) {
        afficherData(data.apprenants)
    }
})

function afficherData (data){
    /* cibler tbody  avant d'écrire dedans*/
   const tbody = document.getElementById('tbody-promo')
   const vueCarte = document.getElementById('vue-carte')
    
   /* boucler sur data avec foreach et dans la boucle créer la ligne et l'injecter dans html*/
   data.forEach(personne => {
        const ligne = `<tr>
        <td>${personne.nom}</td>
        <td>${personne.prenom}</td>
        <td>${personne.ville}</td>
        <td><a href="#" class="lien-details" title="Détail apprenant : à venir">Détails</a></td>
        </tr>`
        tbody.innerHTML += ligne
        /*Injecter ligne et carte en même temps dans le for each: */
        const vignette = `<div class="vignette">
        <h2>${personne.nom} ${personne.prenom}</h2>
        <p>${personne.ville}</p>
        <a href="#" class="lien-details" title="Détail apprenant : à venir">Détails</a>
        </div>`
        vueCarte.innerHTML += vignette   
    }) 
}

/* Affichage carte Leaflet - page carte.html uniquement */

const carteLeaflet = document.getElementById('carte-leaflet')

if (carteLeaflet) {
    const map = L.map('carte-leaflet').setView([46.6, 2.5], 6)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    fetch('promo.json')
        .then(response => response.json())
        .then(data => {
            data.apprenants.forEach(personne => {
                const lat = personne.coordonnees.latitude
                const lng = personne.coordonnees.longitude

                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(`${personne.prenom} ${personne.nom} - ${personne.ville}`)
            })
        })
}

/* menu burger
const burger = document.querySelector(".burger")
const menu = document.querySelector (".menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
})
*/

