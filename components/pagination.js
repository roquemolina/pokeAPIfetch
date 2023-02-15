import getPokeData from "./pokeApi.js";
let startPag = 0;
let $loader = document.querySelector('.loader');

const $main = document.querySelector("main");
export default function pagination(e) {

    if(e.target == document.getElementById('back')) {
        if(startPag === 0){
            console.log('Last page');
        } else if (startPag > 0) {
            $main.innerHTML = '';
            $loader.classList.remove('none');
            startPag -= 20;
            getPokeData(startPag);
        };
    };

    if(e.target == document.getElementById('next')) {
        if(startPag === 80){
            console.log('Last page');
        } else if (startPag <80) {
            startPag += 20;
            $main.innerHTML = '';
            $loader.classList.remove('none');
            getPokeData(startPag);

        };
    }
};