/* $(document).ready(function(){
    alert("jquery ok");
})
 */

function FuncaoJS(){
    let name = document.getElementById('usuario')
    let password = document.getElementById('senha')

    if (!name.value && !password.value){
        alert("Nome: sem nome \nSenha: sem senha");
    } else if (!name.value){
        alert("Nome: Sem nome \nSenha: "+password.value);
    } else if (!password.value){
        alert("Nome: "+name.value+"\nSenha: sem senha");
    } else {
        alert("Nome: "+ name.value + "\nSenha: "+ password.value);
    }
}