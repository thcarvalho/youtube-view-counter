# Youtube View Counter | Atualizador de Views do Youtube

Esse é um pequeno projeto feito em [Node.js](https://nodejs.org) que através da [Youtube API Data](https://developers.google.com/youtube/v3) consegue atualizar de tempos em tempos o título de um vídeo de acordo com seu número de views.

Basicamente, o script faz uma requisição do tipo GET para a API, que retorna suas estatísticas, como views, likes, comentários e etc. Então o programa executa mais uma requisição do tipo PUT que atualiza o título, bem simples!

---

# Como usar

## 1. Criar conta no Google

Primeiramente, caso você não tenha ainda, crie uma conta Google ou faça login com a sua conta já existente em https://console.cloud.google.com/

## 2. Criar projeto

Adicione um novo projeto na sua conta com o nome que desejar.

## 3. Ativar a Youtube Data API

Vá até a [biblioteca de APIs](https://console.cloud.google.com/apis/library) do Google e adicione a Youtube Data API v3, então crie suas credencias OAuth2 (client_id e client_secret) e salve-as em um local seguro.

Após isso, será necessário ainda adicionar duas informações importantes.

1. E-mail de teste: Através do painel Tela de Consentimento OAuth, caso já tenha preenchido as informações requisitadas na tela, vá em Usuários de Teste e adicione seu endereço de e-mail.

2. URI de redirecionamento: Através do painel Credenciais, acesse a sua chave de API e clique em Editar, após isso, vá em "URIs de redirecionamento autorizados" e adicione a URI do projeto, como exemplo, estamos usando http://localhost:3333/oauth, porém você pode adicionar outras URIs caso deseje.

## 4. Clonar projeto e rodar

Abra o terminal e digite:

```
$ git clone https://github.com/thcarvalho/youtube-view-counter
```

Após isso, entre na pasta do projeto e crie um arquivo .env na raiz do projeto com as seguintes informações:

CLIENT_ID: Seu id de cliente (client_id)
API_KEY: Sua chave da API (client_secret)
REDIRECT_URI: A mesma URI utilizada no painel Credenciais em "URIs de redirecionamento", no console do GCP. Como exemplo no projeto, estamos usando http://localhost:3333/oauth
VIDEO_ID: O ID do vídeo que você quer que seja atualizado, esse ID é obtido na URL do vídeo, por exemplo: em https://www.youtube.com/watch?v=6eJyqDP1lZw, o ID é 6eJyqDP1lZw, correspondente ao final da URL.

Por fim, no terminal digite:

```
$ npm install

$ npm start
```

## 5. Autenticar sua conta

No terminal, uma mensagem vai aparecer, indicando que você deve entrar em um link, como no exemplo abaixo

```
$ Authorize this app by visiting this url: URL_DO_VIDEO
```

Basta acessar essa URL através do navegador e autênticar com sua conta

## 6. Esperar o título atualizar

Pronto, agora basta esperar seu título ser atualizado!

---

## Autor

Desenvolvido por Thaian Carvalho

Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@thaian_carvalho-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thaian_carvalho)](https://twitter.com/thaian_carvalho) 
[![Linkedin Badge](https://img.shields.io/badge/-Thaian-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thaian-carvalho-033753178/)](https://www.linkedin.com/in/thaian-carvalho-033753178/) 
[![Gmail Badge](https://img.shields.io/badge/-th29.br@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:th29.br@gmail.com)](mailto:th29.br@gmail.com)