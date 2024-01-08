const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

/* SEM ARROW FUCTION
fetch(url)
  //Promise que lida com o sucesso da solicitação
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonBody) {
    console.log(jsonBody)
  })
  //Promise que lida com erros na solicitação
  .catch(function (error) {
    console.log(error);
  })
  //Promise que é executada independentemente de a solicitação ser bem-sucedida ou resultar em erro.
  .finally(function () {
    console.log("Requisição concluída");
  });
*/

// IGUAL AO DE CIMA PORÉM COM ARROW FUNCTION
  fetch(url)
  //Promise que lida com o sucesso da solicitação
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) =>{
    debugger
    (console.log(pokemonList))
  })
  //Promise que lida com erros na solicitação
  .catch((error) => (console.log(error)))
  //Promise que é executada independentemente de a solicitação ser bem-sucedida ou resultar em erro.
  .finally(() => console.log("Requisição concluída"))
