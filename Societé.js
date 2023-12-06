var nom = document.getElementById('nom-societe')

var email = document.getElementById('email-societe')
var adresse = document.getElementById('adresse-societe')


var btn = document.getElementById('btnajouter')


function ajouter(e) {
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
        var societee = JSON.parse(localStorage.getItem('societee')) || []
        var data = {
            nomsoc: nom.value,
            emailsoc: email.value,
            adressesoc: adresse.value,

        }
        societee.push(data)

        localStorage.setItem('societee', JSON.stringify(societee))
        window.location.href = '/listeSociete.html'

    }



}

btn.addEventListener('click', ajouter)