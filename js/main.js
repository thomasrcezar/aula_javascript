function clicou(){
    document.getElementById("agradecimento").innerHTML=" <b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    // alert("Obrigado por clicar")
}
function redirecionar(){
   // window.open("https://www.w3schools.com/html/default.asp");
   window.location.href = "https://www.w3schools.com/html/default.asp";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passasr o mouse";
    //alert("Cuidado para não pegar Virus")
    elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
   // document.getElementById("mousemove").innerHTML="Passe o mouse aqui ";
   elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada"); 
}
function funcaoChange(elemento){
    console.log(elemento.value);
}


// function validarIdade(idade){
//     var validar; 
//     if(idade >= 18){
//         validar = true;
//     }else{
//         validar = false
//     }
//     return validar; 

// }

// var idade = prompt("Qual sua idade");
// console.log(validarIdade(idade));

// function soma(n1,n2){
//     return n1+n2;
// }
// alert(soma(5,10));

// var d = new Date(); 
// alert(d.getDay());
// alert(d.getMonth());
// alert(d);


// var frutas=[{nome:"Maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = ["maça", "Pera", "Banana"]; 
// fruta.push("Morango");
// console.log(fruta);
// console.log(fruta[1]);
// fruta.pop();
// console.log(fruta.length);

// //alert("meu primeiro alerta");
// var frase = "Thomas é um cara muito legal"; 
// //var frase2 = prompt("Digite o seu nome: "); 
// var n1 = 10;
// var n2 = 20;
// var texto = frase2.replace(frase2,"Amigo");
// total = n1+n2;
// console.log(frase);
// console.log(total);
// //alert("Olá " + texto + " tudo Bem ? ")

// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());