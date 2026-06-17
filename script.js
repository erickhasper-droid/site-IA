// Função para mostrar mais detalhes ao clicar nos cards
function mostrarDetalhe(tipo) {
    const painel = document.getElementById('painel-informativo');
    const titulo = document.getElementById('titulo-detalhe');
    const texto = document.getElementById('texto-detalhe');

    // Remove a classe que esconde o painel
    painel.classList.remove('escondido');

    // Altera o conteúdo baseado no card clicado
    if (tipo === 'saude') {
        titulo.innerText = "⚽ Saúde em Jogo";
        texto.innerText = "A prática regular do futebol melhora a capacidade cardiovascular, ajuda no desenvolvimento de ossos e músculos fortes, e combate diretamente os riscos da obesidade infantil e juvenil.";
    } else if (tipo === 'social') {
        titulo.innerText = "🤝 União e Respeito";
        texto.innerText = "Ninguém joga futebol sozinho. Na escola, o esporte ensina os alunos a passarem a bola, a confiarem nos colegas e a entenderem que o coletivo é sempre mais importante do que o brilho individual.";
    } else if (tipo === 'disciplina') {
        titulo.innerText = "📈 Aprendendo com as Regras";
        texto.innerText = "O futebol escolar ensina a lidar com limites. Seguir as regras do jogo, respeitar a decisão do árbitro (ou professor) e aprender a ganhar com humildade e perder com dignidade são lições para a vida inteira.";
    }

    // Rola a página suavemente até o painel informativo
    painel.scrollIntoView({ behavior: 'smooth' });
}
