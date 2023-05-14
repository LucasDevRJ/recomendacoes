let foto = document.getElementById("foto");
let nome = document.getElementById("nome");
let titulo = document.getElementById("titulo");
let depoimento = document.getElementById("depoimento");
let setaDireita = document.getElementById("seta-direita");
let cliques = 0;

let pessoas = [];

let pessoa = {
	foto : "imagens/camila-pessoa.jpeg",
	nome : "Camila Pessôa",
	cargo : "Desenvolvedora",
	depoimento : "Lucas é alguém incrivelmente dedicado. Tem autonomia para solucionar problemas e é apaixonado por tecnologia. Além disso possui um grande carisma e consegue conviver em harmonia com diferentes pessoas. Suas habilidades técnicas também evoluem a cada commit e projeto, é maravilhoso acompanhar seu desempenho!"
}

pessoas.push(pessoa);

foto.src = pessoas[0].foto;
nome.textContent = pessoas[0].nome;

pessoa = {
	foto : "imagens/glauber-peterson.jpeg",
	nome : "Glauber Peterson",
	cargo : "Desenvolvedor",
	depoimento : "Tive a oportunidade de ser mentorado da Comunidade Code, ao mesmo tempo em que fui da mesma turma do Lucas. Fiz reunião, como também conversei com ele e é notório o Grande conhecimento que ele tem com a linguagem Java, isso se aplica ao Paradigma estrutural, orientado a objetos e também Spring boot. O Lucas e um exemplo que o esforço continuo te tornam cada vez melhor no que faz, uso diversos projetos do Lucas como inspiração a criatividade dele e excelente e tenho certeza que seu futuro será grandioso. Fico feliz em ter conhecido o Lucas e pode ter certeza ainda vamos programar juntos."
}

pessoas.push(pessoa);

pessoa = {
	foto : "imagens/cecilia-rodrigues.jpeg",
	nome : "Cecília Rodrigues",
	cargo : "Desenvolvedora",
	depoimento : "Lucas e eu estamos desenvolvendo um projeto em conjunto e durante esse periodo, ele sempre demonstrou alta disponibilidade e abertura para novas ideias. É entusiasmado, se coloca a disposição para ajudar os colegas, está sempre disposto a aprender e evoluir. Estou entusiasmada para ve-lô alcançar seus objetivos."
}

pessoas.push(pessoa);


function troca() {
	if (cliques == 1) {
		foto.src = pessoas[1].foto;
		nome.textContent = pessoas[1].nome;
	} else if (cliques == 2) {

	}
	cliques++;
}

console.log(pessoas);
console.log(pessoas[1]);

setaDireita.onclick = troca;