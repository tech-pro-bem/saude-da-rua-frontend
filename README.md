# Saúde da Rua

> Site da ONG Saúde da Rua

![GitHub last commit](https://img.shields.io/github/last-commit/tech-pro-bem/saude-da-rua-frontend)
![GitHub repo size](https://img.shields.io/github/repo-size/tech-pro-bem/saude-da-rua-frontend)

## :telescope: Visão Geral

[🏠 Homepage](https://www.saudedarua.org/)

O Saúde da Rua nasceu em julho de 2020, em meio à pandemia do Covid-19, com a missão de levar atendimento médico humanizado e recorrente às camadas mais vulneráveis da sociedade.

O website está sendo desenvolvido pela [Tech Pro Bem](https://techprobem.com.br): uma comunidade de profissionais da área de tecnologia dedicada a contribuir com ONGs e projetos sociais, potencializando o alcance digital do terceiro setor.

## :computer: Tecnologias do Projeto

- [React](https://reactjs.org)
- [JavaScript](https://www.javascript.com//)
- [Styled Components](https://styled-components.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)

## :wrench: Pré-requisitos e como rodar a aplicação

- [x] Antes de começar, você vai precisar ter instalado o [Node.js](https://nodejs.org/en/) na versão 14
- [x] Clone o projet com `git clone https://github.com/tech-pro-bem/saude-da-rua-frontend.git`
  - Caso não tenha ou não queira usar o `git`, faça o download do código fonte [aqui](https://github.com/tech-pro-bem/saude-da-rua-frontend/archive/refs/heads/master.zip) e descompacte.
- [x] Instale as dependências: `npm install`
- [x] Execute a aplicação em modo de desenvolvimento: `npm start`

### Variáveis de Ambiente

O projeto depende de algumas variáveis de ambiente para funcionar corretamente. Para configurar as variáveis necessárias, faça uma cópia do arquivo `.env.example` na raiz do projeto e renomeie para `.env`.

No arquivo `.env` que você acabou de copiar, coloque os valores das variáveis conforme descrito no próprio arquivo.

## :sparkles: Features

- Doações por PIX com QR Code
- Inscrição de Voluntários

## :bomb: Próximos Passos

- [ ] Versão Mobile (Responsividade)
- [ ] Formulário de Inscrição de Voluntários
- [ ] Páginas administrativas
- [ ] Melhorar a documentação

## :star2: Contribuições

Contribuições são bem vindas!

- ⭐️ Favorite o repo
- 🐛 Abra uma issue caso encontre algum problema

Veja a [página de issues](https://github.com/tech-pro-bem/saude-da-rua-frontend/issues).

<!-- You can also take a look at the contributing guide. -->

### :white_check_mark: Padrão de commits, PR e branchs:

- Commit curto (short):

```
<TYPE>: <MESSAGE>
```

- Commit longo (long):

```
<TYPE>:

- <MESSAGE>
- <MESSAGE>

...
```

- Título do PR:

```
[TPB-XXXX] <TYPE>:<SHORT DESCRIPTION>
```

- Nome das branches:

```
TPB-XXXX
```

<hr/>

#### Types

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (_continuous integration_).

Mais infos [aqui](https://github.com/iuricode/padroes-de-commits#:~:text=%F0%9F%93%84-,Padr%C3%B5es%20de%20commits,a%20cria%C3%A7%C3%A3o%20de%20ferramentas%20automatizadas.).

---

**Tech Pro Bem**

- Email: devtechprobem@gmail.com
