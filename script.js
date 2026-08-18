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

    const indice = Math.floor(
        Math.random() * mensagens.length
    );

    return mensagens[indice];
}


// Atualiza o contador
function atualizarContador() {

    if (quantidade === 0) {

        contador.textContent =
            "0 notificações";

    } else if (quantidade === 1) {

        contador.textContent =
            "1 notificação";

    } else {

        contador.textContent =
            `${quantidade} notificações`;

    }

}


// Cria uma nova notificação
function adicionarNotificacao() {

    // Remove a mensagem "Nenhuma notificação"
    const mensagemVazia =
        notificacoes.querySelector(".vazio");

    if (mensagemVazia) {
        mensagemVazia.remove();
    }


    quantidade++;

    const novaNotificacao =
        document.createElement("article");


    novaNotificacao.classList.add("notificacao");


    const mensagem =
        escolherMensagem();


    const horario =
        new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });


    novaNotificacao.innerHTML = `
        <strong>${mensagem}</strong>

        <small>
            Recebida às ${horario}
        </small>
    `;


    // Coloca a nova notificação no começo
    notificacoes.prepend(novaNotificacao);


    atualizarContador();
}


// Limpa todas as notificações
function limparNotificacoes() {

    notificacoes.innerHTML = `
        <p class="vazio">
            Nenhuma notificação nova.
        </p>
    `;


    quantidade = 0;


    atualizarContador();
}


// Evento do botão
btnNotificacao.addEventListener(
    "click",
    adicionarNotificacao
);


// Evento do botão limpar
btnLimpar.addEventListener(
    "click",
    limparNotificacoes
);