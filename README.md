
<h1 align="center"> Squad 20 | Orange Portifólio 🍊</h1>

Esta é uma solução para o desafio da **5ª** edição do [Programa de Formação](https://tech.orangejuice.com.br/programadeformacao) da FCamara.



## Sobre o projeto

A Orange Portfólio é uma plataforma interativa projetada para facilitar o compartilhamento detalhado de projetos desenvolvidos por seus usuários. Essa abordagem única permite que membros da comunidade compartilhem suas experiências, habilidades e conquistas, proporcionando aos demais usuários a oportunidade de explorar e descobrir uma ampla variedade de projetos registrados na plataforma.

#

<p align="center">
  <img alt="Projeto" src="https://i.imgur.com/5kgvIUJ.png" width="800px">
</p>

#

## Funcionalidades da Aplicação Web:
 ### Página Home:
 - Interface intuitiva e agradável visualmente.
 - Informações necessárias para o usuário acessar a plataforma.
 - Botões "Começar Agora" e "Cadastrar" para navegar para a página de cadastro.

### Página de Cadastro:
 - Formulário de cadastro com validação de campos.
 - Formulário de login com validação de campos.
 - Garantia de preenchimento correto dos campos através de validação.

### Rotas Privadas:
 - Acesso restrito a rotas privadas para usuários logados.

### Dashboard (Meus Projetos):
 - Cadastro de projetos com preenchimento obrigatório de todos os campos.
 - Validar e exibir mensagem de erro se campos não estiverem preenchidos corretamente.
 - Campo de tags seguindo regras específicas (separar tags apenas com espaço).
 - Edição e exclusão de projetos.
   
### Barra de Pesquisa:
- Pesquisa de projetos por tags na barra de pesquisa.

### Página Descobrir:
 - Visualização de todos os projetos cadastrados na plataforma.
 - Modal com informações detalhadas do projeto ao clicar em um projeto específico.
 - Exibição de título, nome do cadastrador, tags, imagem, descrição e link de acesso no modal.
 - Pesquisa por tags na barra de pesquisa.

#

## 🛠️ Tecnologias

### Frontend:
  <img src="https://skillicons.dev/icons?i=typescript,react,css,vite,vercel,"/></a></p>
- React com TypeScript: Aproveitar os benefícios do sistema de tipos estáticos do TypeScript ao desenvolver componentes React, fornecendo uma camada adicional de segurança e facilitando a manutenção do código.
- CSS3: linguagem de estilo para estilizar a interface do usuário.
- Vite: Ferramenta de construção de aplicações web rápida e eficiente, especialmente otimizada para o desenvolvimento moderno.
- Vercel: Ferramenta utilizada para fazer o deploy da aplicação web.
#
### Backend:
<img src="https://skillicons.dev/icons?i=java,spring,postgres,aws"/>

- Java Spring:  Java com o Spring Boot oferece desenvolvimento eficiente, simplificando a configuração, facilitando a criação de aplicativos robustos e escaláveis, além de integração perfeita com o ecossistema Spring e qualque outro Framework frontend, no caso deste projeto, o React.
- PostgreSQL: É um sistema gerenciador de banco de dados relacional de software livre e multiplataforma, usado em variados tipos de aplicações.
- AWS S3: O Amazon Simple Storage Service é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade de dados, segurança e perfomance.

O Backend segue o padrão MVC (Model-View-Controller), onde os controladores gerenciam as requisições, os serviços manipulam a lógica de negócios, e os modelos representam os dados. Além disso, estamos implementando o padrão DAO para acesso a dados.

Você pode visualizar a documentação da API deste projeto através deste link 👉🏻 [Swagger](https://op-app-jrdxq.ondigitalocean.app/swagger-ui/index.html#/)

#

## Para Rodar localmente o frontend sua máquina:

### É necessário ter o [Nodejs](https://nodejs.org/en/download) instalado na maquina. 

Para começar, clone o repositório para o seu ambiente local:
```bash
git clone https://github.com/Denis-moreira98/orange-portfolio-squad20
```

## Instalando dependencias

Acesse o diretório do projeto e instale as dependências utilizando o npm:

```bash
  cd frontend
```
```bash
  npm install
```

## Inciando servidor

 Adicione arquivo .env na pasta raiz do frontend, passando a url da api:
```bash
  VITE_API_URL="http://localhost:3000/exemplo"
```

Inicie o servidor:

```bash
  npm run dev
```

#


<h3>Demostração da Aplicação</h3>
<p>Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:</p>
<table>
<tr>
	<th>Ferramenta</th>
	<th>Versão</th>
</tr>
<tr>
	<td>Java JDK</td>
	<td>8+</td>
</tr>
<tr>
	<td>Java</td>
	<td>17</td>
</tr>
<tr>
	<td>Eclipse IDE</td>
	<td>2023-12</td>
</tr>
<tr>
	<td>Git</td>
	<td>2.**</td>
</tr>
</table>

<h6>**  **</h6>


No Terminal/Console:
<ol>
	<li>Faça um clone do projeto na sua máquina: <code>git clone https://github.com/Denis-moreira98/orange-portfolio-squad20</code></li>
	<li>Entre na pasta raiz do projeto: <code>cd orange-portfolio-squad20</code></li> 
	<li>No Eclipse, importe o projeto: Vá em File > Import > Paste General > "Existing projects Maven"</li>
	<li>Para evitar erros, use o SpringBoot 3.1.8</li>
</ol>


 ## 👨🏻‍💻 Colaboradores 👩🏻‍💻

<div>

<a href="https://github.com/brenddamachado" target="_blank">

<img src="https://avatars.githubusercontent.com/u/112699067?v=4" heigth="50px" width="50px" style="border-radius: 50%;" />
</a>

<a href="https://github.com/Denis-moreira98" target="_blank">

<img src="https://avatars.githubusercontent.com/u/72985107?v=4" heigth="50px" width="50px" style="border-radius: 50%;" />
</a>

<a href="https://github.com/Jefferson-Pedro" target="_blank">

<img src="https://avatars.githubusercontent.com/u/79370742?v=4" heigth="50px" width="50px" style="border-radius: 50%;" />
</a>

<a href="https://github.com/queziafiladelfo" target="_blank">

<img src="https://avatars.githubusercontent.com/u/9157219?v=4" heigth="50px" width="50px" style="border-radius: 50%;" />
</a>

<a href="https://github.com/WilbertSilva" target="_blank">

<img src="https://avatars.githubusercontent.com/u/43455642?v=4" heigth="50px" width="50px" style="border-radius: 50%;" />
</a>

