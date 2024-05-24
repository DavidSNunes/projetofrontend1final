# 🔎Movie Search🎬

- Este projeto é o MovieSearch e consiste numa aplicação Vue.js que permite aos utilizadores pesquisar filmes e séries de TV utilizando a API OMDb.
- Algumas das funcionalidades deste projeto incluem:
   - Alteração entre mode claro e mode escuro(com peristência de dados);
   - Autenticação de utilizadores;
   - Possibilidade de adicionar filmes a uma lista de favoritos(com persistência de dados).


## 🎬FUNCIONALIDADES

- Pesquisa de filmes e séries;
- Visualização de detalhes dos filmes selecionados;
- Adição e remoção de filmes dos favoritos;
- Alteração do tema da página(mode escuro ou mode claro);
- Autenticação de utilizadores(registo, login, logout).


## 📁Estrutura do Projeto

### components/
   - 'DarkMode.vue': Usado para alterar entre mode claro e mode escuro;
   - 'MovieSearch.vue': Componente para pesquisar filmes e séries;

### views/
   - 'AboutView.vue': Página para pesquisa de filmes;
   - 'Feed.vue': Página dos filmes favoritos do utilizador;
   - 'HomeView.vue': Página inicial com filmes populares;
   - 'Register.vue': Página de registo de utilizadores;
   - 'SignIn.vue': Página de login de utilizadores.

- 'App.vue': Componente principal da aplicação.


## ✅Execução do Projeto

### Pré-requisitos:
   - Node.js instalado;
   - Vue CLI instalada;
   - Executar o comando " npm i ", para instalar as dependências;
   - Ter uma chave de API;
   - Configuração do Firebase para autenticação.

## 🖥️Utilização

### ☀Modo Escuro🌙
- O componente DarkMode.vue permite alternar entre modos claro e escuro. A escolha do modo é guardada no localStorage para persistência de dados.

### 🔎Pesquisa de Filmes
- O componente MovieSearch.vue permite pesquisar filmes e séries de TV utilizando a API OMDb. Os utilizadores podem ver os detalhes dos filmes e adicionar ou remover dos favoritos.

### 🔑Autenticação
- As páginas Register.vue e SignIn.vue permitem o registo e login dos utilizadores. A autenticação é gerida pelo Firebase.

### ➡️Routes do Projeto

- '/'': Página inicial;
- '/about': Página de pesquisa de filmes;
- '/register': Página de registo;
- '/sign-in': Página de login;
- '/feed': Página dos filmes favoritos (requer autenticação).

## 🌐Utilização do projeto

### Inicialização do Projeto
   - Executar o comando "vue ui" no Node.js command prompt;
   - Na secção do Project tasks selecionar o serve;
   - Dar Run task;

OU

   - Iniciar o terminal do Visual Studio Code;
   - Executar o comando "npm run serve";
   - Usar o link do Local.

### Utilização da "MovieSearch" app
   - Realizar Login com o email: teste@gmail.com e palavra-passe:1234abcd;
   - Com o login feito é possível aceder à página dos Favoritos.

