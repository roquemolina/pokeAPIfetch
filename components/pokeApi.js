export default function getPokeData(offset) {
    const $main = document.querySelector("main");
    let $loader = document.querySelector('.loader'),
    $pags = document.querySelector("#pags");
    $pags.textContent = `Pokemons ${offset} - ${offset + 20}`;



    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(json => {
        
        const fragment = new DocumentFragment();
        
        json.results.forEach(el => {
            let url = el.url.slice(25, -1);
            const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites${url}.png`;
            const img = document.createElement('img');
            img.setAttribute('src', imgSource);
            img.setAttribute('alt', el.name);
            fragment.append(img);
        })
            $loader.classList.add('none');
            $main.append(fragment);
        })
    .catch(err => {
        console.log(err);
        msg = err.statusText || "Undefined problem";
        $main.innerHTML = `Error: ${err.status}: ${msg}`;
    });

};