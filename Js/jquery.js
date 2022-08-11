// ============================== START OF JQUERY ============================== //


// 1 - Com jQuery (É importante otimizar o trabalho)
//  a) Localize um elemento por ID
//      ° Exiba em log o conteúdo desse elemento
//      ° Exiba em log o conteúdo HTML desse elemento           // concluido
//      ° Altere o conteúdo dese elemento por outro
//      ° Insira um novo elemento internamente a esse com append

//  b) Localize uma lista de elementos por class
//      ° Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
//      ° Altere o conteúdo desses elementos por outro

//  c) Localize uma lista de elementos por nome de seletor
//      ° Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
//      ° Altere o conteúdo desses elementos por outro

console.log('=====================================================');
console.group('Relembrando a utlização do JQuery')
console.log("Vamos começar capturando id de um elemento com JQuery:");
console.log("");

console.log("Exibindo o conteúdo do id capturado: " + $("#capturandoID").text());
console.log("Exibindo o conteúdo HTML do id capturado: " + $("#capturandoID").text());
console.log("Exibindo o conteúdo HTML do id capturado: " + $("#capturandoID").text("You love JQuery"));
// $("#capturandoID").append (
//     $("<i>", {text: "APENAS UM TESTE NÃO SERÁ EXECUTADO"}) // Assim que se insere com append, não estou inserindo porque é um button.
// )
console.log("");
console.log('=====================================================');
console.log("Localizando uma lista de elementos através da class com JQuery:");
console.log("");

let capturaDeClass = [...$(".nav-item")]
console.log("Nesse exemplo capturei quem tinha a class \".nav-item\" e armazenei ela em uma variável: ");
console.log(capturaDeClass);
console.log("");
console.log("Vamos também listar esse elemento capturado unitariament:");
capturaDeClass.forEach(element => {
    console.log(element);
});
// capturaDeClass.forEach(element => {
//     console.log(element.textContent = "APENAS UM TESTE NÃO SERÁ EXECUTADO"); // Aqui seria como alterar o valor desse elemento, não faço para não quebrar o site.
// });
console.log("");
console.log('=====================================================');
console.log("Localizando uma lista de elementos por do nome de seletor com JQuery:");
console.log("");

let capturaDeSeletor = [...$("li")]
console.log("Nesse exemplo capturei quem tinha o seletor \"li\" e armazenei ela em uma variável: ");
console.log(capturaDeSeletor);
console.log("");
console.log("Vamos também listar esse elemento capturado unitariament:");
capturaDeSeletor.forEach(element => {
    console.log(element);
});
// capturaDeSeletor.forEach(element => {
//     console.log(element.textContent = "APENAS UM TESTE NÃO SERÁ EXECUTADO"); // Aqui seria como alterar o valor desse elemento, não faço para não quebrar o site.
// });

console.groupEnd

// ============================== END OF JQUERY ============================== //