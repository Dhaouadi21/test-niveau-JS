var societee = JSON.parse(localStorage.getItem('societee')) || []

var tbody = document.getElementById("societe-tables")
function getdata2() {
    societee.map((societee, index) => {

        tbody.innerHTML += `
<tr> 
<td> ${societee.nomsoc} </td>
<td> ${societee.emailsoc} </td>
<td> ${societee.adressesoc} </td>




<td>    <button type="button" class="btn btn-outline-warning" Onclick="getdetails(${index})" data-bs-toggle="modal" data-bs-target="#exampleModalEmployee">
Modifier
</button>
<button class="btn btn-outline-danger" onClick="supp(${index})"> Supprimer  </button></td>
</tr>
`
    })

}

getdata2()


function supp(index) {
    societee.splice(index, 1)
    localStorage.setItem('societee', JSON.stringify(societee))
    window.location.reload()
}

var nom = document.getElementById('nom-societe')

var email = document.getElementById('email-societe')
var adresse = document.getElementById('adresse-societe')




var indice = 0
function getdetails(index) {

    nom.value = societee[index].nomsoc
    email.value = societee[index].emailsoc
    adresse.value = societee[index].adressesoc



    indice = index
}

function savechanges() {
    var data = {
        nomsoc: nom.value,
        emailsoc: email.value,
        adressesoc: adresse.value,
    }
    societee.splice(indice, 1, data)

    localStorage.setItem('societee', JSON.stringify(societee))
    window.location.reload()
}