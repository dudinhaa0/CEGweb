# CEGweb — Central de Notificações

## Descrição

O **CEGweb** é uma aplicação web desenvolvida para funcionar como uma **Central de Notificações**, permitindo ao usuário visualizar notificações de forma simples, organizada e acessível.

O sistema permite criar notificações aleatórias, acompanhar a quantidade de notificações recebidas, visualizar o horário da última atualização e limpar todas as notificações. A interface também possui recursos de acessibilidade para facilitar o uso por pessoas que utilizam leitores de tela.

## Tecnologias

O projeto foi desenvolvido utilizando:

* **HTML5** — estrutura das páginas e elementos da aplicação.
* **CSS3** — estilização, layout, animações e responsividade.
* **JavaScript** — lógica da aplicação, criação e remoção de notificações e atualização dos horários.
* **ARIA (Accessible Rich Internet Applications)** — recursos de acessibilidade para leitores de tela.
* **Narrador do Windows

## Estrutura do Projeto

```text
CEGO/
├── index.html
├── script.js
├── style.css
└── README.md
```

### Arquivos principais

* `index.html` — contém a estrutura da Central de Notificações.
* `style.css` — contém toda a estilização da aplicação, incluindo o layout responsivo.
* `script.js` — contém as funcionalidades e interações da aplicação.
* `README.md` — documentação do projeto.

## Instalação

Como o projeto utiliza apenas HTML, CSS e JavaScript, não é necessário instalar dependências ou utilizar um gerenciador de pacotes.

### 1. Baixe ou clone o projeto

Caso esteja utilizando Git:

```bash
git clone https://github.com/dudinhaa0/CEGO.git
```

Depois, entre na pasta:

```bash
cd CEGO
```

### 2. Execute o projeto

Basta abrir o arquivo `index.html` em um navegador.

Outra opção é utilizar uma extensão como o **Live Server** no Visual Studio Code.

No Visual Studio Code:

1. Abra a pasta do projeto.
2. Abra o arquivo `index.html`.
3. Clique com o botão direito no arquivo.
4. Selecione **Open with Live Server**.

A aplicação será aberta automaticamente no navegador.

## Uso

Ao abrir a aplicação, o usuário encontrará a **Central de Notificações**.

### Criar uma notificação

Clique no botão:

**Nova Notificação**

O sistema irá:

* gerar uma mensagem aleatória;
* adicionar a notificação à lista;
* registrar o horário em que ela foi recebida;
* atualizar o contador de notificações;
* atualizar o horário da última atualização.

Exemplos de mensagens que podem aparecer:

```text
Nova mensagem recebida!
Seu download foi concluído.
O arquivo foi salvo com sucesso.
Você recebeu uma nova atualização.
Sua solicitação foi processada.
Uma nova atividade está disponível.
```

### Limpar notificações

O botão **Limpar Tudo** remove todas as notificações da tela e retorna o contador para `0`.

### Relógio

O horário atual é exibido no canto superior da aplicação e atualizado automaticamente a cada segundo.

### Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

Em dispositivos menores, como celulares e tablets, a barra lateral é reorganizada para facilitar a navegação e os botões e notificações são ajustados para o tamanho da tela.

## Acessibilidade

O projeto possui recursos voltados à acessibilidade, incluindo:

* uso de elementos semânticos do HTML5;
* suporte a leitores de tela;
* atributos `aria-label`;
* utilização de `role="alert"` para anunciar novas notificações;
* atributo `aria-live` para comunicar atualizações aos leitores de tela;
* indicador visual de foco para elementos interativos;
* título oculto visualmente para auxiliar usuários de leitores de tela.

Esses recursos permitem que a aplicação seja mais acessível para diferentes usuários.

## Funcionalidades

* [x] Criar novas notificações.
* [x] Gerar mensagens aleatórias.
* [x] Contabilizar notificações.
* [x] Exibir horário de recebimento.
* [x] Exibir horário atual em tempo real.
* [x] Limpar todas as notificações.
* [x] Interface responsiva.
* [x] Recursos de acessibilidade.

## Autor

**SQUAD 4K🎥**

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento web.

### Contato

* GitHub: **adicione aqui seu perfil do GitHub**
* LinkedIn: **adicione aqui seu perfil do LinkedIn**
* E-mail: **adicione aqui seu e-mail de contato**
