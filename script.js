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






        if (object.name === "Bisasam") {
            cardimg1.src = object.img;
            cardimg2.src = object.img;
            cardimg3.src = object.img;
            cardimg4.src = object.img;
            cardimg5.src = object.img;

            document.cardWapper.append(cardimg1, cardimg2, cardimg3, cardimg4, cardimg5);

        }
        else {
            console.log("fehler")
        }
    }
}
console.log(arr)
function setImg() {
    cardimg1.src = object.img;
    document.cardWapper.append(cardimg1);
}