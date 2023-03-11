/* var alerta = "Esse é o nosso Alerta"; */

/* $(document).ready(function(){
    alert("jquery ok");
})
 */

function avisoTeste(){
    alert("Esse é um teste do aviso")
} 

function FuncaoJS(x, y){
    let nome = document.getElementById('usuario');
    let password = document.getElementById('senha');

     if (!nome.value && !password.value){
        alert("Nome: sem nome \nSenha: sem senha");
    } else if (!nome.value){
        alert("Nome: Sem nome \nSenha: "+password.value);
    } else if (!password.value){
        alert("Nome: "+nome.value+"\nSenha: sem senha");
    } else {
        alert("Nome: "+ nome.value + "\nSenha: "+ password.value);
    } /* 
    console.log(x);
    console.log(y);
    return (console.log(parseInt(x) + parseInt(y)));  */
} 

function setCor(){
let mudaCor = document.querySelector('.nomeClasse');
mudaCor.setAttribute('style', 'background-color: greenyellow;')
} 
