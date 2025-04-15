
# GitHub Feedback Generator API

Esta API permite gerar feedback sobre perfis de usuários no GitHub, utilizando a inteligência artificial generativa do Google para avaliar repositórios públicos de usuários. O feedback é baseado em qualidade de código, documentação, testes e boas práticas de desenvolvimento.

## Funcionalidades

- 🔍 **Gerar Feedback**: Avalia repositórios públicos de um usuário do GitHub e gera um feedback detalhado com base em boas práticas de desenvolvimento.
- 📊 **Análise Completa**: Considera pontos positivos, pontos a melhorar e sugestões para otimizar a documentação, estrutura e o código.
- 🤖 **Integração com Google Generative AI**: O feedback é gerado por meio da IA do Google, garantindo uma análise inteligente e automatizada.

## Como Usar

### Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados. Você pode instalar o Node.js [aqui](https://nodejs.org/).

### Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositório>
   ```
2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-diretório
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Generative AI:

   ```env
   API_KEY=suachaveapi
   ```
5. Inicie o servidor:

   ```bash
   npm start
   ```

### Endpoints

- **GET `/`**: Retorna um simples status de saúde da API. ✔️
- **POST `/generate-feedback`**: Gera feedback para o perfil do GitHub baseado no nome de usuário.

  - **Corpo da requisição**:

    ```json
    {
      "username": "nome-de-usuário-do-github"
    }
    ```
  - **Resposta de sucesso**:

    ```json
    {
      "feedback": "Texto com o feedback gerado pela IA."
    }
    ```
  - **Resposta de erro**:

    ```json
    {
      "error": "Mensagem de erro"
    }
    ```

## Dependências

- **Express**: Framework para construir a API. 🖧
- **Google Generative AI**: API para gerar o feedback inteligente baseado em IA. 🤖
- **CORS**: Para permitir requisições de diferentes origens. 🌐
- **Dotenv**: Para gerenciar variáveis de ambiente. 🔑

## Desenvolvimento

### Scripts

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com hot reload (utilizando Nodemon). 🚀
- **`npm run build`**: Compila o código TypeScript para JavaScript. 🛠️
- **`npm run start`**: Inicia o servidor após compilar o código. ▶️

### Testes

Este projeto não inclui testes automatizados, mas você pode adicionar testes utilizando bibliotecas como Jest ou Mocha. 🧪
