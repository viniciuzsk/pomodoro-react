# PomoFocus - React Pomodoro Timer

Uma aplicação de gerenciamento de tempo baseada na técnica Pomodoro, desenvolvida para estudo aprofundado de fluxo de dados e gerenciamento de estado no React.

![alt](Area.gif)

## Sobre o Projeto

Este projeto consiste em um timer configurável que alterna entre modos de Foco, Pausa Curta e Pausa Longa. O objetivo principal do desenvolvimento foi solidificar conceitos fundamentais do React, evitando bibliotecas externas para lógica de estado, priorizando soluções nativas e arquitetura limpa.

## Funcionalidades Principais

- **Timer Preciso:** Contagem regressiva que respeita o ciclo de vida do componente.
- **Modos Alternáveis:** Troca dinâmica entre Foco, Descanso Curto e Descanso Longo.
- **Configuração Personalizada:** Modal de ajustes que permite ao usuário definir a duração de cada modo.
- **Persistência de Dados:** As configurações e o modo atual são salvos no LocalStorage, mantendo as preferências do usuário mesmo após recarregar a página.
- **Feedback Visual:** A interface altera a paleta de cores inteira baseada no modo atual (Foco/Descanso) para melhor experiência do usuário (UX).
- **Interface Responsiva:** Estilização moderna e adaptativa utilizando Tailwind CSS.

## Conceitos Técnicos e Aprendizados

Este projeto foi fundamental para a aplicação prática de conceitos de Engenharia de Software no front-end:

### 1. Lifting State Up (Elevação de Estado)

O desafio de sincronizar o Timer com o Modal de Configurações foi resolvido elevando o estado para o componente pai (`App.jsx`). Isso garantiu uma "Única Fonte de Verdade" (Single Source of Truth), onde tanto o timer quanto o modal consomem e atualizam os mesmos dados.

### 2. Componentes Controlados (Controlled Components)

No modal de configurações, os inputs não gerenciam seu próprio estado internamente de forma isolada. Foi implementado o padrão de Componentes Controlados, onde o React detém o estado do formulário em tempo real, permitindo validação e manipulação precisa dos dados antes do envio.

### 3. Gerenciamento de Side Effects

Uso estratégico do hook `useEffect` para:

- Gerenciar o intervalo do timer (`setInterval`) e garantir a limpeza da memória (`clearInterval`) quando o componente desmonta ou o timer pausa.
- Sincronizar o estado da aplicação com o `localStorage` sempre que houver alterações.
- Manipular o DOM diretamente para alterar a cor de fundo do `body` conforme o estado.

### 4. Comunicação entre Componentes (Callbacks)

Implementação de funções de callback passadas via props para permitir que componentes filhos (`SettingsModal`) comuniquem alterações para o componente pai (`App`), resolvendo problemas comuns de fluxo de dados unidirecional.

### 5. Imutabilidade de Estado

Manipulação correta de estados complexos (objetos) utilizando o spread operator para garantir a imutabilidade durante as atualizações parciais do formulário.

## Tecnologias Utilizadas

- **React** (Hooks: useState, useEffect)
- **Vite** (Build tool)
- **Tailwind CSS** (Estilização)
- **Lucide React** (Ícones)
- **JavaScript (ES6+)**

## Como Executar

1. Clone o repositório:

```bash
git clone https://seu-link-do-github-aqui.git

```

2. Instale as dependências:

```bash
npm install

```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev

```
