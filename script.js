const texto = document.querySelector('#texto');
const entrada = document.querySelector('#entrada');
const reiniciar = document.querySelector('#reiniciar');
const resultado = document.querySelector('#resultado');
const alterarTema = document.querySelector('#alterarTema');
const level1 = document.querySelector('#level1');
const level2 = document.querySelector('#level2');
const level3 = document.querySelector('#level3');

var textos = [
  'O sol está brilhando.',
  'Eu gosto de sorvete de baunilha.',
  'O cachorro corre no parque.',
  'A música é muito animada.',
  'A casa é grande e bonita.',
];

function novoTexto() {
  const index = Math.floor(Math.random() * textos.length);
  texto.textContent = textos[index];
}
novoTexto();

function atualizarTeste() {
  iniciar();
  if (entrada.value === texto.textContent) {
    verificar();
  }
}

function iniciar() {
  const statusDoTeste = JSON.parse(localStorage.getItem('testeEmAndamento'));
  if (!statusDoTeste) {
    localStorage.setItem('tempoInicial', new Date().getTime());
    localStorage.setItem('testeEmAndamento', true);
  }
}

function verificar() {
  const tempoFinal = new Date().getTime();
  const tempoInicial = parseInt(localStorage.getItem('tempoInicial'));
  const tempoGasto = (tempoFinal - tempoInicial) / 1000;

  resultado.textContent = `você levou ${tempoGasto} segundos`;
  localStorage.setItem('testeEmAndamento', false);
  entrada.value = '';
  novoTexto();
}

entrada.addEventListener('keyup', atualizarTeste);
reiniciar.addEventListener('click', novoTexto);

level1.addEventListener('click', () => {
  level2.classList.remove('bg-sky-950');
  level3.classList.remove('bg-sky-950');
  level1.classList.add('bg-sky-950');
  textos = [
    'O céu está azul hoje.',
    'A música é uma forma de arte poderosa.',
    'A natureza é cheia de beleza e mistério.',
    'A leitura nos transporta para outros mundos.',
    'A educação é a chave para um futuro melhor.',
  ];
  novoTexto();
});
level2.addEventListener('click', () => {
  level1.classList.remove('bg-sky-950');
  level3.classList.remove('bg-sky-950');
  level2.classList.add('bg-sky-950');
  level1.classList.add('bg-sky-600');

  textos = [
    'A pintura abstrata despertava diversas emoções.',
    'O inverno traz consigo o frio intenso.',
    'A garota dançava com graça e elegância.',
    'O livro antigo estava empoeirado na prateleira.',
    'O rápido rapaz correu pela rua movimentada.',
  ];
  novoTexto();
});
level3.addEventListener('click', () => {
  level1.classList.remove('bg-sky-950');
  level2.classList.remove('bg-sky-950');
  level1.classList.add('bg-sky-600');
  level3.classList.add('bg-sky-950');
  textos = [
    'A criptografia avançada garante a segurança dos dados.',
    'O desempenho excepcional do atleta impressionou a todos.',
    'A complexidade do problema requer uma solução inovadora.',
    'O desenvolvimento sustentável é fundamental para o futuro do planeta.',
    'A inteligência artificial revolucionará diversos setores da sociedade.',
  ];
  novoTexto();
});

/*
Nível 2 - Médio:

O rápido rapaz correu pela rua movimentada.
O livro antigo estava empoeirado na prateleira.
A garota dançava com graça e elegância.
O inverno traz consigo o frio intenso.
Nível 3 - Difícil:


*/
