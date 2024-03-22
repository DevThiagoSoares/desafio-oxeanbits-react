# Desafio para vaga de FrontEnd - Foco em React


## Como Executar o Projeto

Siga as instruções abaixo para executar o projeto em sua máquina local:

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

## Instale as dependências do projeto:

```bash
cd nome-do-repositorio
npm install || yanr
```

## Obtenha uma API Key do GIPHY:

Acesse https://developers.giphy.com/docs/sdk/ e inscreva-se para obter uma API Key gratuita.

Crie um arquivo .env na raiz do seu projeto.

Adicione a API Key fornecida pelo GIPHY ao arquivo .env com o nome apropriado:

```bash
REACT_APP_GIPHY_API_KEY=SuaAPIKeyAqui
```

Certifique-se de adicionar .env ao seu arquivo .gitignore para evitar que a chave da API seja incluída no controle de versão.

Execute o projeto:

bash
```bash
npm start
```

Acesse o projeto em seu navegador em http://localhost:3000.

Configuração de Variáveis de Ambiente

## Este projeto requer a configuração da variável de ambiente REACT_APP_GIPHY_API_KEY contendo a API Key fornecida pelo GIPHY para acessar a sua API de forma segura.