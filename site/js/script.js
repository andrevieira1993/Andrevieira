
// Seleciona apenas links que controlam seções
const linksMenu = document.querySelectorAll('.menu a[data-secao]');
const secoes = document.querySelectorAll('.secao');

linksMenu.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // só bloqueia links internos

    // Remove classe ativa das seções
    secoes.forEach(secao => secao.classList.remove('ativa'));

    // Pega a seção correta
    const id = this.getAttribute('data-secao');
    document.getElementById(id).classList.add('ativa');

    // Efeito ativo no menu
    linksMenu.forEach(l => l.classList.remove('ativo'));
    this.classList.add('ativo');
  });
});

const formPergunta = document.getElementById('form-pergunta');
const forumLista = document.getElementById('forum-lista');

formPergunta.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = this.nome.value;
  const titulo = this.titulo.value;
  const descricao = this.descricao.value;

  const perguntaDiv = document.createElement('div');
  perguntaDiv.classList.add('pergunta');

  perguntaDiv.innerHTML = `
    <h3>${titulo}</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p>${descricao}</p>

    <div class="resposta-form">
      <input type="text" name="resposta-nome" placeholder="Seu nome">
      <textarea name="resposta-texto" placeholder="Sua resposta"></textarea>
      <button>Responder</button>
    </div>

    <div class="respostas"></div>
  `;

  forumLista.prepend(perguntaDiv);
  this.reset();

  const btnResponder = perguntaDiv.querySelector('button');
  const inputNome = perguntaDiv.querySelector('input[name="resposta-nome"]');
  const inputTexto = perguntaDiv.querySelector('textarea[name="resposta-texto"]');
  const respostasDiv = perguntaDiv.querySelector('.respostas');

  btnResponder.addEventListener('click', function() {
    const nomeResp = inputNome.value;
    const textoResp = inputTexto.value;

    if(nomeResp && textoResp) {
      const p = document.createElement('p');
      p.innerHTML = `<strong>${nomeResp}:</strong> ${textoResp}`;
      respostasDiv.appendChild(p);
      inputNome.value = '';
      inputTexto.value = '';
    } else {
      alert('Preencha nome e resposta!');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Remove ativa de todas as seções
  secoes.forEach(secao => secao.classList.remove('ativa'));

  // Ativa a seção Início
  const inicio = document.getElementById('inicio');
  if (inicio) {
    inicio.classList.add('ativa');
  }

  // Marca o menu Início como ativo
  linksMenu.forEach(l => l.classList.remove('ativo'));
  const linkInicio = document.querySelector('.menu a[data-secao="inicio"]');
  if (linkInicio) {
    linkInicio.classList.add('ativo');
  }
});
