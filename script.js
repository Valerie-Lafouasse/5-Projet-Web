/*mode sombre*/
const select = document.getElementById ('theme')
select.addEventListener ('change', function (){
if (select.value === 'sombre') {
    document.body.classList.add('sombre')
} else {
    document.body.classList.remove('sombre')
}
})

/*mode carte*/
const choixListe = document.getElementById ('affichage-liste')
const choixCarte = document.getElementById ('affichage-carte')

choixListe.addEventListener ('change', function (){
    localStorage.setItem('affichage','liste')
})

choixCarte.addEventListener ('change', function (){
    localStorage.setItem('affichage','carte')
})
  



/* menu burger*/
const burger = document.querySelector(".burger")
const menu = document.querySelector (".menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
})