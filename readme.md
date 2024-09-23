# Teste Técnico - Aplicação React Native com Expo

Este é o desafio técnico para avaliar suas habilidades de desenvolvimento mobile utilizando React Native (for Web), Expo, e boas práticas de arquitetura com Redux Toolkit e Redux Query. O objetivo é criar uma aplicação de e-commerce funcional baseada em um dos designs fornecidos no Figma, consumindo dados da API fictícia FakeStore.

## Descrição do Projeto

A aplicação será desenvolvida usando **Expo** e **expo-router** para navegação. O gerenciamento de estado será feito com **Redux Toolkit**, e a comunicação com a API será realizada através de **Redux Query**. A aplicação terá páginas de listagem de produtos, detalhes de produto e um carrinho com um checkout fictício.

A base do projeto, já está integrada com redux-toolkit (/store) e redux-query (/api) que já está configurada para acessar a api [FakeStore](https://fakestoreapi.com/docs). Use a formatação do prettier já adicionada ao projeto base.

## Instalação das Dependências e Configuração do Projeto

Siga os passos abaixo para configurar e rodar a aplicação localmente.

### 1. Pré-requisitos

Certifique-se de que você tenha instalado as seguintes ferramentas no seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/) - Versão LTS recomendada
- [Expo CLI](https://docs.expo.dev/get-started/installation/) - Instale o Expo CLI globalmente usando o comando:
  ```bash
  npm install -g expo-cli

- Start da aplicação:
   ```bash
  npm start
  #Em seguida pressione 'W' ou:
  npm run web

## Requisitos Principais

### 1. Gerenciamento de Estado com Redux Toolkit
Utilize o Redux Toolkit para gerenciar o estado global da aplicação, garantindo que as informações sobre produtos e o estado do carrinho estejam centralizadas.

### 2. Fetch API com Redux Query
Implemente chamadas para a API utilizando **Redux Query** para lidar com as requisições de listagem de produtos e detalhes dos produtos de forma otimizada.

### 3. Hooks do React
Aproveite os hooks do React para manipular estados e efeitos colaterais, como `useState`, `useEffect`, `useAppDispatch` e `useAppSelector`.

### 4. Funcionalidades Principais
- **Página de Home**: Exibe uma listagem de produtos utilizando os dados da API [FakeStore](https://fakestoreapi.com/docs).
- **Página de Detalhes do Produto**: Ao clicar em um produto na listagem, o usuário deve ser direcionado para uma página com mais informações sobre o produto.
- **Página de Carrinho com Checkout**: Adicione funcionalidade para gerenciar o carrinho de compras. Implemente um processo de checkout fictício, sem necessidade de integração com pagamento real.

## Bônus

- **Servir a aplicação**: Use GitHub Pages para servir o build da aplicação ou outro app de sua preferencia como vercel ou heroku.
- **Responsividade**: Garanta que a interface seja agradável em diferentes tamanhos de tela.
- **Animações**: Adicione animações simples para melhorar a experiência do usuário.
- **Persistência de Dados**: Use AsyncStorage ou outro método de persistência para manter o estado do carrinho após o fechamento da aplicação.
- **Testes**: Implementação de testes unitários ou de integração.

## Design de Referência

Escolha um dos designs de e-commerce no Figma para se inspirar:

1. [E-Commerce Mobile App](https://www.figma.com/design/RGDA63DDUVcdNtNwaJNsjK/E-Commerce---Mobile-Apps-(Community)?node-id=0-1&node-type=canvas&t=ra5EQjNyXYDrBB5Q-0)
2. [Fashion E-Commerce App](https://www.figma.com/design/rrw0qrmSpHj9oFCoRkvpFe/Clothing-Store-App%2FFashion-E-Commerce-App-%7C-App%C2%A0UI%C2%A0Kit-(Community)?node-id=0-1&node-type=canvas&t=5lTI04TlXhSssxry-0)

**Observação**: O design pode ser seguido como uma base, mas não precisa ser replicado fielmente.

## API

A API que será utilizada no projeto já está integrada e você pode encontrar sua documentação [aqui](https://fakestoreapi.com/docs). Use esta API para obter dados de produtos, como:
- Lista de produtos
- Detalhes de um produto específico

## Instalação e Configuração

1. Clone este repositório com https:
   ```bash
   git clone https://github.com/SeltonJeff/react-native-tech-test-base.git
2. Clone este repositório com ssh:
   ```bash
   git clone git@github.com:SeltonJeff/react-native-tech-test-base.git

Como Entregar

	• Realize o fork deste repositório.
	• Ao finalizar o teste, envie o link do seu repositório forkado.

## Boa Sorte!

Estamos ansiosos para ver a sua criatividade e habilidades em ação! Este teste foi criado para ser desafiador, mas também uma oportunidade para você demonstrar seu domínio sobre as ferramentas e tecnologias envolvidas. Não tenha medo de mostrar sua própria abordagem e soluções para os problemas propostos.

Boa sorte e divirta-se codando! Se precisar de ajuda ou tiver dúvidas, não hesite em entrar em contato. 🚀