var nom = document.getElementById('nom-employe')
var prenom = document.getElementById('prenom-employe')
var email = document.getElementById('email-employe')
var adresse = document.getElementById('adresse-employe')
var societe = document.getElementById("employee-soc");


var btn = document.getElementById('btnajout')



var employee = JSON.parse(localStorage.getItem('employee')) || []












function ajout(e) {
    e.preventDefault()
    var formvalid = true
    if (nom.value == "") {
        nom.classList.add('is-invalid')
        nom.classList.remove('is-valid')
        formvalid = false

    } else {
        nom.classList.add('is-valid')
        nom.classList.remove('is-invalid')
    }

    if (prenom.value == "") {
        prenom.classList.add('is-invalid')
        prenom.classList.remove('is-valid')
        formvalid = false
    } else {
        prenom.classList.add('is-valid')
        prenom.classList.remove('is-invalid')
    }
    if (email.value == "") {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formvalid = false
    } else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
    if (adresse.value == "") {
        adresse.classList.add('is-invalid')
        adresse.classList.remove('is-valid')
        formvalid = false
    } else {
        adresse.classList.add('is-valid')
        adresse.classList.remove('is-invalid')
    }

    if (formvalid) {

        var data = {
            nomemploye: nom.value,
            prenomemploye: prenom.value,
            emailemploye: email.value,
            adresseemploye: adresse.value,
            sociéte: societe.value

        }
        employee.push(data)

        localStorage.setItem('employee', JSON.stringify(employee))
        window.location.href = 'listeEmploye.html'

    }


}





btn.addEventListener('click', ajout)




var societee = JSON.parse(localStorage.getItem('societee')) || []
societee.map((element) => {
    societe.innerHTML += `
    <option>${element.nomsoc}</option>
    `
})