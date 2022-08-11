// ============================== START OF VARIÁVEIS ============================== //


// 1 - Crie uma variável para cada tipo existente com let ou var:
//  ° string
//  ° number
//  ° boolean               // concluido
//  ° array
//  ° object json
//  ° function

// 2 - Exiba em log o valor de cada variável e o tipo da variável com typeof(variável) // concluido

// 3 - Para cada variável faça um IF que tome uma decisão e também no ELSE // concluido

// 4 - Para uma variável string e number, faça um switch que tome uma decisão // concluido

// 5 - Para uma variável do tipo array, faça as repetições possíveis: // concluido
//  ° for com índice
//  ° foreach

// 6 - Se cada exercício anterior foi feito de forma unica no arquivo JS, separe-os em funções especificas // concluido

let nome = "Arthur Estevan Vargas"
let idade = 19
let verdade = true
let mentira = false
let programadores = ["Grace Hopper", "John Backus", "Bill Gates", "Brian Kernighan", "Ken Thompson", "Tim Berners", "Bjarne Fonte", "Linus Torvalds", "Dennis Ritchie", "Alan Turing"]
let superHeroes =
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}
let funcao = function testando() {
    console.log("Podemos atribuir uma função a uma variável let ou var, você pode usar para atribuir valores da função a variável.");
}

console.log('=====================================================');
console.group('Revisando Variáveis')

console.log("Vamos começar exibindo o valor de algumas variáveis:");
console.log("");
console.log("Meu nome é " + nome + ", tenho " + idade + " anos e trabalho como auxiliar de modelagem atualmente, porém, estou estudando para ser desenvolvedor.");
console.log("Acima foram usadas variavéis: " + typeof (nome) + " e " + typeof (idade) + ".");
console.log("");
console.log("Em matemática um número elevado ao expoente 1 é o mesmo valor da base: " + verdade + ".");
console.log("Em matemática um número elevado ao expoente 0 é 0: " + mentira);
console.log("Acima foram usadas variavéis: " + typeof (verdade) + " e " + typeof (mentira) + ".");
console.log("");
console.log("Em qualquer área temos os pinores e os mais renomados nomes, vou listar alguns: " + programadores + ".");
console.log("Acima foi usada a variável: " + typeof (programadores) + ".");
console.log("");
console.log("Agora vamos manipular uma variável do tipo JSON, são muito legais de usar e podemos atribuir diversos valores.");
console.log("Quero acessar a variável superHeroes com a propriedade members no index of 1 na propriedade name: " + superHeroes.members[1].name);
console.log("");
console.log(funcao);
console.log('=====================================================');

console.log("Agora vamos atribuir lógica em algumas variáveis usando IF / ELSE:");

console.log("");
console.log("IF nome for == Arthur Estevan Vargas (true) and Else nome não for == Arthur Estevan Vargas (false)");

if (nome == "Arthur Estevan Vargas") {
    console.log("True (porque a condição do meu IF foi aceita");
} else {
    console.log("False (porque a condição do meu IF não foi aceita");
}

console.log("");
console.log("IF idade for > 18 (true) and Else idade for < 18 (false)");

if (idade > 18) {
    console.log("True (porque a condição do meu IF foi aceita");
} else {
    console.log("False (porque a condição do meu IF não foi aceita");
}

console.log("");
console.log("IF idade for > 18 (true) and Else idade for < 18 (false)");

if (idade > 18) {
    console.log("True (porque a condição do meu IF foi aceita");
} else {
    console.log("False (porque a condição do meu IF não foi aceita");
}

console.log("");
console.log("IF mentira for != verdade (true) and Else verdade for == mentira (false)");

if (mentira != verdade) {
    console.log("True (porque a condição do meu IF foi aceita");
} else {
    console.log("False (porque a condição do meu IF não foi aceita");
}

console.log("");
console.log("IF programadores[2] for == \"Bill Gates\" (true) and Else programadores[2] for != \"Bill Gates\" (false)");

if (programadores[2] == "Bill Gates") {
    console.log("True (porque a condição do meu IF foi aceita");
} else {
    console.log("False (porque a condição do meu IF não foi aceita");
}
console.log('=====================================================');

console.log("Agora vamos configurar um swith para gerar conta de mátematica aleatórias:");
console.log("");

// Eventos entre HTML e JS

// 1 - Com javascript puro (É importante saber o básico)
//  ° No html utilize o atributo de seletor onclick para executar funções existente no javascript
//  ° No javascript crie funções para as operações matemáticas onde o resultado deve ser exibido em log

// 2 - Com jQuery(É importante otimizar o trabalho)
//  ° No html não teve ter menção ao javascript, mas deve permitir o acesso facilitado ao mesmo por id,class ou nome do seletor
//  ° Crie eventos de click para botoes onde a função deve exibir em log apenas que o click funcionou
//  ° Crie evento de submit que exiba em log os dados capturados nos inputs


// começamos fazendo um gerador de números até 100 e outro gerador até 4
function gerador_Numeros() {
    let gerador = Math.floor(Math.random() * 100);
    return gerador;
}
function gerador_switch() {
    let gerador = Math.floor(Math.random() * 5);    
    return gerador;
}

// precisamo também ter todas as operações matemáticas em funções
function soma(parm1, parm2) {
    let resultado = parm1 + parm2
    return parm1 + " + " + parm2 + " = " + resultado
}
function subtracao(parm1, parm2) {
    let resultado = parm1 - parm2
    return parm1 + " - " + parm2 + " = " + resultado
}
function multiplicacao(parm1, parm2) {
    let resultado = parm1 * parm2
    return parm1 + " x " + parm2 + " = " + resultado
}
function divisao(parm1, parm2) {
    let resultado = parm1 / parm2
    return parm1 + " / " + parm2 + " = " + resultado
}

// por fim capturamos o click do elemento <a> e configuramos para chamar o switch
$("#operacoesMatematica").on("click", (event) => {

    event.preventDefault()

    switch (gerador_switch()) {
        case 1:
            console.log(soma(gerador_Numeros(), gerador_Numeros()))
            break;
        case 2:
            console.log(subtracao(gerador_Numeros(), gerador_Numeros()))
            break;
        case 3:
            console.log(multiplicacao(gerador_Numeros(), gerador_Numeros()))
            break;
        case 4:
            console.log(divisao(gerador_Numeros(), gerador_Numeros()))
            break;
    }
})
console.log('=====================================================');

console.log("Podemos também listar itens de uma array usando FOR e FOREACH veja o exemplo:");
console.log("");

console.log("Vamos listar unitariamente cada um dos mais importantes programadores da história usando for:");
for (let index = 0; index < programadores.length; index++) {
    const element = programadores[index];

    console.log((index + 1) + "° temos " + element);
    
}
console.log("");

console.log("Vamos listar unitariamente cada um dos mais importantes programadores da história usando foreach:");
programadores.forEach(element => {
    console.log("temos " + element);
});


console.groupEnd
console.log("");

// ============================== END OF VARIÁVEIS ============================== //

// ============================== START OF MANPULÇAO DE HTML COM JAVASCRIPT PURO ============================== //

// 1 - Com javascript puro (É importante saber o básico)
//  ° Localize um elemento no html por id 
//  ° Localize um ou mais elementos por class
//  ° Localize um ou mais elementos por nome do seletor <tag>       //concluido
//  ° Crie um novo paragrafo no body
//  ° Crie um novo paragrafo em algum elemento por ID,CLASS,ou seletor


console.log('=====================================================');
console.group('Manipulação de HTML usando JavaScript Puro')
console.log("");

console.log("Vamo começar capturando alguns id, class, elementos, parágrafo e etc.");

document.getElementById("operacoesMatematica") // id capturado
document.getElementsByClassName("NomeDaClassAqui") // class capturada
document.getElementsByClassName("NomeDaClassAqui") // class capturada
document.getElementsByTagName("p") // apenas capturo um elemento

let paragrafos = [...document.getElementsByTagName("p")] // capturamos todos os elementos <p>
console.log("");

console.log("Agora vamos escrever um parágrafo novo no body e escrever dentro de um parágrafo existente:");

document.getElementById("escrevendoComJavaScript").textContent = "Fui escrito usando JavaScript puro."

function adcElemento() {
    // cria um novo elemento div
    // e dá à ele conteúdo
    var pNovo = document.createElement("p");
    var conteudoNovo = document.createTextNode("Nossa podemos fazer muitas coisas com JavaScript puro!");
    pNovo.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
    

    // adiciona o novo elemento criado e seu conteúdo ao DOM
    document.getElementById("cardHeader").append(pNovo);

  }

console.groupEnd

// ============================== END OF MANPULÇAO DE HTML COM JAVASCRIPT PURO ============================== //