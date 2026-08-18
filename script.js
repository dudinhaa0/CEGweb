const btnNotificacao = document.getElementById("btnNotificacao");
const btnLimpar = document.getElementById("btnLimpar");

const notificacoes = document.getElementById("notificacoes");
const contador = document.getElementById("contador");

let quantidade = 0;

// Lista de possíveis notificações
const mensagens = [
    "Nova mensagem recebida!",
    "Seu download foi concluído.",
    "O arquivo foi salvo com sucesso.",
    "Você recebeu uma nova atualização.",
    "Sua solicitação foi processada.",
    "Uma nova atividade está disponível."
];

// Escolhe uma mensagem aleatória
function escolherMensagem() {
    const indice = Math.floor(Math.random() * mensagens.length);
    return mensagens[indice];
}

// Atualiza o contador
function atualizarContador() {
    if (quantidade === 0) {
        contador.textContent = "0";
    } else if (quantidade === 1) {
        contador.textContent = "1";
    } else {
        contador.textContent = `${quantidade}`;
    }

    // Atualiza badge da sidebar
    const badge = document.getElementById("badgeContador");
    if (badge) {
        badge.textContent = quantidade;
    }

    // Atualiza última atualização
    const ultimaAtualizacao = document.getElementById("ultimaAtualizacao");
    if (ultimaAtualizacao && quantidade > 0) {
        const agora = new Date();
        ultimaAtualizacao.textContent = agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    } else if (ultimaAtualizacao) {
        ultimaAtualizacao.textContent = "--:--";
    }
}

// Cria uma nova notificação
function adicionarNotificacao() {
    // Remove a mensagem "Nenhuma notificação"
    const mensagemVazia = notificacoes.querySelector(".empty-state");
    if (mensagemVazia) {
        mensagemVazia.remove();
    }

    quantidade++;

    const novaNotificacao = document.createElement("article");
    novaNotificacao.classList.add("notificacao");

    const mensagem = escolherMensagem();

    const horario = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    });

    novaNotificacao.innerHTML = `
        <div class="conteudo">
            <strong>${mensagem}</strong>
            <small>Recebida às ${horario}</small>
        </div>
        <span class="timestamp">${horario}</span>
    `;

    // ===================================================
    // CONFIGURAÇÃO PARA LEITOR DE TELA
    // Só essa notificação vai ser anunciada!
    // ===================================================
    novaNotificacao.setAttribute('role', 'alert');
    novaNotificacao.setAttribute('aria-live', 'assertive');
    novaNotificacao.setAttribute('aria-atomic', 'true');

    // Coloca a nova notificação no começo
    notificacoes.prepend(novaNotificacao);

    atualizarContador();
}

// Limpa todas as notificações
function limparNotificacoes() {
    notificacoes.innerHTML = `
        <div class="empty-state">
            <span class="empty-icon" aria-hidden="true">📭</span>
            <h3>Nenhuma notificação</h3>
            <p>As notificações aparecerão aqui em tempo real</p>
        </div>
    `;

    quantidade = 0;
    atualizarContador();
}

// Relógio
function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
    if (relogio) {
        const agora = new Date();
        relogio.textContent = agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });
    }
}

// Eventos
btnNotificacao.addEventListener("click", adicionarNotificacao);
btnLimpar.addEventListener("click", limparNotificacoes);

// Inicia relógio
atualizarRelogio();
setInterval(atualizarRelogio, 1000);