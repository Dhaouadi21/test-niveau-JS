var tbody = document.getElementById("employee-tables")

var employee = JSON.parse(localStorage.getItem('employee')) || []
function getdata() {
    employee.map((employee, index) => {
        tbody.innerHTML += `
<tr> 
<td> ${employee.nomemploye} </td>
<td> ${employee.prenomemploye} </td>
<td> ${employee.emailemploye} </td>
<td> ${employee.adresseemploye} </td>
<td> ${employee.sociéte} </td>




<td>    <button type="button" class="btn btn-outline-warning" Onclick="getdetails(${index})" data-bs-toggle="modal" data-bs-target="#exampleModalEmployee">
Modifier
</button>
<button class="btn btn-outline-danger" onClick="supp(${index})"> Supprimer  </button></td>
</tr>
`
    })

}

getdata()

function supp(index) {
    employee.splice(index, 1)
    localStorage.setItem('employee', JSON.stringify(employee))
    window.location.reload()
}


var nom = document.getElementById('nom-employe')
var prenom = document.getElementById('prenom-employe')
var email = document.getElementById('email-employe')
var adresse = document.getElementById('adresse-employe')
var societe = document.getElementById("employee-soc");


var indice = 0
function getdetails(index) {

    nom.value = employee[index].nomemploye
    prenom.value = employee[index].prenomemploye
    email.value = employee[index].emailemploye
    adresse.value = employee[index].adresseemploye
    societe.value = employee[index].sociéte



    indice = index
}

function savechanges() {
    var data = {
        nomemploye: nom.value,
        prenomemploye: email.value,
        emailemploye: adresse.value,
        adresseemploye: adresse.value,
        sociéte: societe.value,
    }
    employee.splice(indice, 1, data)

    localStorage.setItem('employee', JSON.stringify(employee))
    window.location.reload()
}
var societee = JSON.parse(localStorage.getItem('societee')) || []
var societe = document.getElementById("employee-soc");
societee.map((element) => {
    societe.innerHTML += `
    <option>${element.nomsoc}</option>
    `
})