import getPokeData from "./components/pokeApi.js";
import pagination from "./components/pagination.js";

document.addEventListener("DOMContentLoaded", e =>{
    getPokeData(0);
});

document.addEventListener('click', e => {
    pagination(e);
})