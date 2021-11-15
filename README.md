# Pokedex

## Tecnologias e frameworks:
HTML, CSS, JavaScript, ReactJs, Material-Ui, PokéAPI

## Como utilizar
  Faça o fork do projeto e, na pasta pokedex rode o comando 'npm i'  assim, todos os módulos necessários serão baixados.
  Após baixar as dependências, execute no terminal "npm start". O projeto será aberto no seu navegador e estará pronto pra uso.
  
  ## Entendendo os Componentes do Projeto :
  
   ### App.js
   App.js é o nosso componente pai. Nele,temos nossas funções principais como:
   'getPokemon' => função assincrona  que faz a requisição para a https://pokeapi.co/. Essa função recebe outra função assincrona (getPokemonData) que retorna os dados de cada um dos 150 pokemons. Observer que getPokemon tem um loop que deve rodar 150 vezes. A cada iteração é adicionado dento do vetor a informação de um pokemon até que sejam obtidos os dados de todos os pokemons.  
   Dentro do nosso componente pai, também encontraremos um h1, um Input e, uma div que receberá a informação dos nossos pokemons e, o nosso Card. 
   
   
   ### PokeCard
   
   Nosso Card foi criado utilizando o Material-Ui. Bastou importar o componente de https://v4.mui.com/pt/components/cards/#card, remover as informações que não seriam utilizadas e, adicionar novas propriedades ao nosso styles.
   Para popular o Card, usamos props que foram passadas a partir do componente pai.
   Utilizamos um map no nosso array de pokemon para obter todas as informações a serem utilizadas.
   
   
   
  
