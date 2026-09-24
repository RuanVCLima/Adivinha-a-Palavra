# 🎯 Adivinha a Palavra

Um jogo de adivinhação de palavras desenvolvido com React e TypeScript.

O objetivo é descobrir a palavra secreta informando uma letra por vez. O jogo fornece uma dica para ajudar o jogador e registra as letras utilizadas durante a partida.

---

## 📸 Preview

![Adivinha a Palavra](./src/assets/preview.png)

---

## 🎮 Sobre o projeto

O **Adivinha a Palavra** é uma aplicação web interativa desenvolvida para praticar conceitos fundamentais do ecossistema React, como:

- Componentização
- Hooks
- Gerenciamento de estado
- Eventos e interações do usuário
- Renderização condicional
- Listas e propriedades (`props`)
- Tipagem com TypeScript
- Organização de componentes
- Estilização com CSS Modules

A aplicação seleciona uma palavra aleatoriamente e apresenta uma dica relacionada a ela. O jogador deve tentar descobrir a palavra informando suas letras.

---

## ✨ Funcionalidades

- 🎲 Seleção aleatória de palavras
- 💡 Sistema de dicas
- 🔤 Digitação de uma letra por tentativa
- ✅ Identificação de letras corretas
- ❌ Identificação de letras incorretas
- 📝 Histórico das letras utilizadas
- 🔢 Contador de tentativas
- 🏆 Sistema de pontuação
- 🔄 Reinício da partida
- 🚫 Prevenção de letras repetidas
- 🎉 Detecção automática de vitória
- 💬 Mensagens de vitória e derrota

---

## 🧠 Como funciona

Ao iniciar a aplicação, uma palavra é selecionada aleatoriamente a partir da lista de palavras disponível no projeto.

O jogador recebe uma dica e deve informar uma letra.

### Letra correta

Quando a letra informada existe na palavra:

- A letra é revelada.
- A quantidade de ocorrências da letra é adicionada à pontuação.
- A letra é registrada como correta.

### Letra incorreta

Quando a letra não existe na palavra:

- A letra é registrada como incorreta.
- Uma tentativa é consumida.

### Letras repetidas

O jogo verifica se a letra já foi utilizada anteriormente. Caso tenha sido, uma mensagem é exibida e a tentativa não é registrada novamente.

### Vitória

O jogador vence quando todas as letras da palavra são descobertas.

### Derrota

O jogador perde quando utiliza todas as tentativas disponíveis.

O limite de tentativas é calculado com base no tamanho da palavra, adicionando cinco tentativas extras.

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules
- ESLint
- Prettier

### Principais versões

```text
React       19.2.8
TypeScript  6.0.2
Vite        8.3.0
ESLint      10.10.0
Prettier    3.9.9
```

📂 Estrutura do projeto

src/
├── assets/
│
├── components/
│   ├── Button/
│   ├── Header/
│   ├── Input/
│   ├── Letter/
│   ├── LettersUsed/
│   └── Tips/
│
├── utils/
│   └── words/
│
├── App.tsx
├── app.module.css
├── global.css
└── main.tsx

Componentes
Header

Responsável pela apresentação das informações relacionadas às tentativas e pelo controle de reinício da partida.

Tip

Exibe a dica relacionada à palavra selecionada.

Letter

Representa individualmente as letras que compõem a palavra.

Input

Campo utilizado para que o jogador informe uma letra.

Button

Botão utilizado para confirmar o palpite.

LettersUsed

Apresenta as letras que já foram utilizadas durante a partida.

⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

Node.js
npm

Você pode verificar as versões instaladas utilizando:

```bash
node -v
npm -v
```

🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/RuanVCLima/Adivinha-a-Palavra.git
```

Entre na pasta do projeto:

```bash
cd Adivinha-a-Palavra
```

Instale as dependências:

```bash
npm install
```

▶️ Executando o projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL disponibilizada pelo Vite no terminal.

🏗️ Build

Para gerar a versão de produção:

```bash
npm run build
```

O comando executa a verificação do TypeScript e, em seguida, realiza o build da aplicação com Vite.

🔍 Lint

Para verificar possíveis problemas no código:

```bash
npm run lint
```

🧩 Arquitetura

A aplicação utiliza uma estrutura baseada em componentes.

O App.tsx concentra o estado e a lógica principal do jogo, enquanto os componentes são responsáveis pela apresentação de partes específicas da interface.

Entre os estados utilizados estão:

score
letter
lettersUsed
challenge

A palavra do desafio é selecionada aleatoriamente a partir da lista de palavras:

WORDS

O jogo também utiliza useEffect para iniciar a partida e verificar automaticamente as condições de vitória e derrota.

🎯 Regras do jogo
1-Uma palavra é selecionada aleatoriamente.
2-Uma dica é apresentada ao jogador.
3-O jogador informa uma letra.
4-O jogo verifica se a letra pertence à palavra.
5-Letras corretas são reveladas.
6-As letras utilizadas são armazenadas.
7-Letras repetidas não podem ser utilizadas novamente.
8-O jogador possui cinco tentativas adicionais além da quantidade de letras da palavra.
9-O jogo termina quando a palavra é descoberta ou quando todas as tentativas são utilizadas.
10-Uma nova partida pode ser iniciada pelo botão de reinício.

📚 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em desenvolvimento frontend utilizando React e TypeScript, especialmente:

Desenvolvimento de interfaces com React
Componentização
Hooks (useState e useEffect)
Manipulação de eventos
Tipagem com TypeScript
Organização de projetos frontend
CSS Modules
Controle de estado da aplicação
👨‍💻 Autor

Ruan Victor Cabral de Lima

GitHub: @RuanVCLima

📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.

