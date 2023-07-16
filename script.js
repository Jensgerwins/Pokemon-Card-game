const cardWapper = document.getElementById("pokemon-card-wapper");
const cardimg1 = document.getElementById("PokemonCard1");





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
        console.log(object.img)




        if (object.name === "Bisasam") {
            cardimg1.src = object.img;

            document.cardWapper.append(cardimg1);

        }
        else {
            console.log("fehler")
        }
    }
}