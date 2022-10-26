<h1 align="center"> API Pokedex - Usando TypeORM</h1>


<p align="center">
<img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-blue"/>
</p>

Uma segunda versão do Projeto <a href="https://github.com/jfdsn/API-Pokedex">API-Pokedex</a>. O objetivo desse projeto é por em prática o conhecimento sobre API rest usando TypeORM.

## :hammer: Funcionalidades do projeto

- `Métodos GET`: "/pokemon" retorna um JSON com todos Pokemon. "/pokemon/id" retorna apenas o Pokemon referente ao id.
- `Método POST`: "/pokemon" salva o Pokemon passado no corpo da requisição. O Body deve ser um JSON com nome, tipo e img.
- `Método PUT`: "/pokemon/id" modifica o Pokemon de id informado. O Body deve ser um JSON com nome, tipo e img.
- `Método DELETE`: "/pokemon/id" deleta o Pokemon de id informado.

Exemplo JSON: {"nome": "Pikachu", "tipo": "Elétrico", "img": "Caminho do diretório da imagem aqui!"}

## :heavy_check_mark: Técnicas e tecnologias utilizadas

- `Node.js`
- `npm`
- `Express`
- `TypeORM`
- `PostgreSQL`
- `Javascript`
- `Typescript`

## Autor
- `Jônathan Faria`