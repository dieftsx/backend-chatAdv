# ChatADV - Assistente Jurídico Inteligente

ChatADV é uma ferramenta de Inteligência Artificial desenvolvida exclusivamente para Advogados, projetada para simplificar e agilizar sua rotina jurídica. Este projeto inclui um backend, frontend administrativo e uma landing page minimalista.

## Índice

1. [Visão Geral](#visão-geral)
2. [Backend](#backend)
    - [Requisitos](#requisitos)
    - [Instalação](#instalação)
    - [Configuração](#configuração)
    - [Execução](#execução)
    - [Endpoints](#endpoints)
3. [Frontend](#frontend)
    - [Requisitos](#requisitos-1)
    - [Instalação](#instalação-1)
    - [Configuração](#configuração-1)
    - [Execução](#execução-1)
4. [Landing Page](#landing-page)
    - [Requisitos](#requisitos-2)
    - [Instalação](#instalação-2)
    - [Configuração](#configuração-2)
    - [Execução](#execução-2)

## Visão Geral

O ChatADV é um assistente jurídico baseado em IA que pode responder perguntas, fornecer informações jurídicas atualizadas, ajudar na preparação de documentos e oferecer suporte 24/7. O projeto consiste em:

- **Backend:** API RESTful em Node.js com Express e TypeScript.
- **Frontend:** Aplicação administrativa em React com TypeScript.
- **Landing Page:** Página de apresentação minimalista em React.

## Backend

### Requisitos

- Node.js (versão 14 ou superior)
- MongoDB
- Conta na OpenAI para usar a API GPT-3
- Conta no Twilio para integração com WhatsApp

### Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/chatadv.git
    cd chatadv/backend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

### Configuração

1. Crie um arquivo `.env` na raiz do diretório `backend` com as seguintes variáveis:
    ```plaintext
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/chatadv
    TWILIO_ACCOUNT_SID=your_account_sid
    TWILIO_AUTH_TOKEN=your_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_number
    OPENAI_API_KEY=your_openai_api_key
    ```

### Execução

1. Inicie o servidor:
    ```sh
    npm run dev
    ```

### Endpoints

- `GET /` - Verifica se a API está rodando.
- `POST /api/whatsapp` - Recebe e processa mensagens do WhatsApp.
- `POST /api/bot/message` - Recebe e processa mensagens do bot.

## Frontend

### Requisitos

- Node.js (versão 14 ou superior)

### Instalação

1. Navegue até o diretório `frontend`:
    ```sh
    cd ../frontend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

### Configuração

1. Crie um arquivo `.env` na raiz do diretório `frontend` com as seguintes variáveis:
    ```plaintext
    REACT_APP_API_URL=http://localhost:3000/api
    ```

### Execução

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

2. A aplicação estará disponível em `http://localhost:3000`.

## Landing Page

### Requisitos

- Node.js (versão 14 ou superior)

### Instalação

1. Navegue até o diretório `landing-page`:
    ```sh
    cd ../landing-page
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

### Configuração

Nenhuma configuração adicional é necessária para a landing page.

### Execução

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

2. A landing page estará disponível em `http://localhost:3000`.

---

Este README detalhado fornece todas as informações necessárias para configurar e executar o projeto ChatADV, incluindo o backend, frontend administrativo e landing page. Se precisar de mais assistência, sinta-se à vontade para perguntar!
