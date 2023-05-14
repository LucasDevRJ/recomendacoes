let script = document.querySelector("script");
let divCaixa = document.body;
let divDepoimento = document.createElement("div");
divCaixa.insertBefore(divDepoimento, script);

let pessoas = [];

let pessoa = {
	"nome": "Camila Pessôa",
	"cargo": "Desenvolvedora",
	"recomendacao": "Lucas é alguém incrivelmente dedicado. Tem autonomia para solucionar problemas e é apaixonado por tecnologia. Além disso possui um grande carisma e consegue conviver em harmonia com diferentes pessoas. Suas habilidades técnicas também evoluem a cada commit e projeto, é maravilhoso acompanhar seu desempenho!"
}

var nome = document.createTextNode(pessoa.nome);

divDepoimento.appendChild(nome);

pessoas.push(pessoa);

console.log(pessoas);