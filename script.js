const cardWapper = document.getElementById("pokemon-card-wapper");
const cardimg1 = document.getElementById("PokemonCard1");
const cardimg2 = document.getElementById("PokemonCard2");
const cardimg3 = document.getElementById("PokemonCard3");
const cardimg4 = document.getElementById("PokemonCard4");
const cardimg5 = document.getElementById("PokemonCard5");






let f;
arr = [];

function loadFetch() {
    fetch("http://localhost:3000/Pokemon")
        .then((resp) => resp.json())
        .then((PokemonsFromApi) => {
            Pokemons = PokemonsFromApi;
            console.log(Pokemons);
            render();


        })
}

loadFetch();
function render() {




    for (let i = 0; i < Pokemons.length; i++) {
        const object = Pokemons[i];





        console.log(Pokemons[0].id);
        arr.push(Pokemons);

        cardimg1.src = Pokemons[1].img;
        cardimg2.src = Pokemons[3].img;
        cardimg3.src = Pokemons[2].img;
        cardimg4.src = Pokemons[0].img;
        cardimg5.src = Pokemons[4].img;

        document.cardWapper.append(cardimg1, cardimg2, cardimg3, cardimg4, cardimg5);

    }

    console.log("fehler")
}



